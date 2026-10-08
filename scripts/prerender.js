import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { SEO_ROUTES } from '../src/data/seoMetadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrDir = path.resolve(rootDir, 'dist-ssr');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function runPrerender() {
  console.log('🚀 [KAMN SEO Engine] Starting Static Route Prerendering...');

  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Template dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }
  const baseTemplate = fs.readFileSync(templatePath, 'utf8');

  // 1. Build SSR bundle
  console.log('📦 Compiling SSR server bundle...');
  execSync('npx vite build --ssr src/entry-server.jsx --outDir dist-ssr', {
    cwd: rootDir,
    stdio: 'inherit'
  });

  // 2. Import server render function
  const { render } = await import(path.resolve(ssrDir, 'entry-server.js'));

  // 3. Prerender all SEO routes
  console.log(`✨ Prerendering ${SEO_ROUTES.length} indexable marketing routes...`);

  for (const route of SEO_ROUTES) {
    try {
      const appHtml = render(route.path);
      let pageHtml = baseTemplate;

      // Inject rendered app into root
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Replace Title
      pageHtml = pageHtml.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${escapeHtml(route.title)}</title>`
      );
      pageHtml = pageHtml.replace(
        /<meta name="title"[\s\S]*?>/i,
        `<meta name="title" content="${escapeHtml(route.title)}" />`
      );

      // Replace Description
      pageHtml = pageHtml.replace(
        /<meta name="description"[\s\S]*?>/i,
        `<meta name="description" content="${escapeHtml(route.description)}" />`
      );

      // Replace Canonical
      pageHtml = pageHtml.replace(
        /<link rel="canonical"[\s\S]*?>/i,
        `<link rel="canonical" href="${route.canonical}" />`
      );

      // Replace Open Graph metadata
      pageHtml = pageHtml.replace(
        /<meta property="og:title"[\s\S]*?>/i,
        `<meta property="og:title" content="${escapeHtml(route.title)}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta property="og:description"[\s\S]*?>/i,
        `<meta property="og:description" content="${escapeHtml(route.description)}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta property="og:url"[\s\S]*?>/i,
        `<meta property="og:url" content="${route.canonical}" />`
      );
      if (route.ogType) {
        pageHtml = pageHtml.replace(
          /<meta property="og:type"[\s\S]*?>/i,
          `<meta property="og:type" content="${route.ogType}" />`
        );
      }

      // Replace Twitter metadata
      pageHtml = pageHtml.replace(
        /<meta name="twitter:title"[\s\S]*?>/i,
        `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta name="twitter:description"[\s\S]*?>/i,
        `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta name="twitter:url"[\s\S]*?>/i,
        `<meta name="twitter:url" content="${route.canonical}" />`
      );

      // Replace Structured Data JSON-LD
      if (route.schema) {
        const schemaString = JSON.stringify(route.schema, null, 2);
        const scriptBlock = `<script type="application/ld+json" id="route-schema-jsonld">\n${schemaString}\n    </script>`;
        
        if (pageHtml.includes('id="route-schema-jsonld"')) {
          pageHtml = pageHtml.replace(/<script type="application\/ld\+json" id="route-schema-jsonld">[\s\S]*?<\/script>/i, scriptBlock);
        } else {
          pageHtml = pageHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, scriptBlock);
        }
      }

      // Determine output file path
      let outFilePath;
      if (route.path === '/') {
        outFilePath = path.resolve(distDir, 'index.html');
      } else {
        const routeSubdir = path.resolve(distDir, route.path.replace(/^\//, ''));
        if (!fs.existsSync(routeSubdir)) {
          fs.mkdirSync(routeSubdir, { recursive: true });
        }
        outFilePath = path.resolve(routeSubdir, 'index.html');
      }

      fs.writeFileSync(outFilePath, pageHtml, 'utf8');
      console.log(`  ✓ Prerendered: ${route.path} -> ${path.relative(rootDir, outFilePath)}`);
    } catch (err) {
      console.error(`  ✗ Failed prerendering ${route.path}:`, err);
    }
  }

  // 4. Prerender 404 page
  try {
    const notFoundHtml = render('/404-not-found');
    let notFoundPage = baseTemplate;
    notFoundPage = notFoundPage.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);
    notFoundPage = notFoundPage.replace(/<title>[\s\S]*?<\/title>/i, '<title>Page Not Found (404) | KAMN</title>');
    notFoundPage = notFoundPage.replace(/<meta name="description"[\s\S]*?>/i, '<meta name="description" content="The requested page could not be found. Return to KAMN homepage." />');
    notFoundPage = notFoundPage.replace(/<meta name="robots"[\s\S]*?>/i, '<meta name="robots" content="noindex, follow" />');
    notFoundPage = notFoundPage.replace(/<link rel="canonical"[\s\S]*?>/i, '<link rel="canonical" href="https://kamn-growth.vercel.app/404" />');
    
    fs.writeFileSync(path.resolve(distDir, '404.html'), notFoundPage, 'utf8');
    console.log('  ✓ Prerendered: 404.html');
  } catch (err) {
    console.error('  ✗ Failed prerendering 404.html:', err);
  }

  // 5. Clean up temporary SSR files
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log('🎉 [KAMN SEO Engine] All routes prerendered with full HTML and metadata!');
}

runPrerender().catch(err => {
  console.error('Prerender process error:', err);
  process.exit(1);
});

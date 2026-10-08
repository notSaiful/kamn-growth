// ==============================================================================
// KAMN CANONICAL METADATA & STRUCTURED DATA REGISTRY
// ==============================================================================

export const SITE_URL = 'https://kamn-growth.vercel.app';
export const SITE_NAME = 'KAMN';
export const LOGO_URL = `${SITE_URL}/assets/kamn-logo-mark.png`;
export const HERO_POSTER_URL = `${SITE_URL}/assets/hero-poster.jpg`;

export const SEO_ROUTES = [
  // 1. Homepage
  {
    path: '/',
    title: 'KAMN | Managed Growth, Procurement & Operations',
    description: 'KAMN handles business development, procurement and operations for SMEs. A managed team powered by AI. No software to learn.',
    canonical: `${SITE_URL}/`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          'name': 'KAMN',
          'url': SITE_URL,
          'logo': LOGO_URL,
          'image': HERO_POSTER_URL,
          'description': 'AI-native managed business consultancy providing outsourced growth, procurement, operations and AI systems execution for growing SMEs.',
          'slogan': 'Grow your business. We handle the rest.',
          'knowsAbout': [
            'Outsourced Business Development',
            'B2B Lead Generation',
            'Procurement Outsourcing',
            'Supplier Sourcing & Vendor Diligence',
            'Business Operations Management',
            'AI Workflow Automation'
          ],
          'areaServed': {
            '@type': 'AdministrativeArea',
            'name': 'Global'
          }
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${SITE_URL}/#service`,
          'name': 'KAMN Managed Consultancy',
          'url': SITE_URL,
          'image': HERO_POSTER_URL,
          'priceRange': '$$$',
          'description': 'Outsourced operational execution combining dedicated human consultants with internal AI OS leverage. Clients purchase execution, never software.',
          'parentOrganization': {
            '@id': `${SITE_URL}/#organization`
          },
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Managed SME Disciplines',
            'itemListElement': [
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Managed Business Growth',
                  'description': 'Outbound prospect research, qualified introductions, and pipeline development.'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Strategic Procurement',
                  'description': 'Supplier comparison, commercial contract negotiation, and purchasing diligence.'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Managed Operations',
                  'description': 'Recurring coordination, follow-up management, and calm back-office execution.'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'AI Workflow Systems',
                  'description': 'Proprietary intelligent workflows operated internally by KAMN consultants on behalf of clients.'
                }
              }
            ]
          }
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          'url': SITE_URL,
          'name': 'KAMN',
          'publisher': {
            '@id': `${SITE_URL}/#organization`
          }
        }
      ]
    }
  },

  // 2. Services Overview
  {
    path: '/services',
    title: 'Managed Business Services for Growing SMEs | KAMN',
    description: 'Explore KAMN\'s managed disciplines: business development, strategic procurement, business operations, and pragmatic AI execution.',
    canonical: `${SITE_URL}/services`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${SITE_URL}/services` }
          ]
        },
        {
          '@type': 'CollectionPage',
          'name': 'Managed SME Capabilities',
          'url': `${SITE_URL}/services`,
          'description': 'Overview of KAMN managed services: Growth, Procurement, Operations, and AI Systems.',
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    }
  },

  // 3. Growth Service
  {
    path: '/services/growth',
    title: 'Outsourced Business Development Services | KAMN',
    description: 'Find more B2B opportunities with managed prospect research, outreach coordination and sales follow-up from KAMN.',
    canonical: `${SITE_URL}/services/growth`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${SITE_URL}/services` },
            { '@type': 'ListItem', 'position': 3, 'name': 'Growth', 'item': `${SITE_URL}/services/growth` }
          ]
        },
        {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/growth#service`,
          'name': 'Outsourced Business Development & Growth',
          'serviceType': 'Managed Business Development',
          'provider': { '@id': `${SITE_URL}/#organization` },
          'description': 'End-to-end managed outbound prospect research, qualified introduction scheduling, and CRM sales follow-up coordination for growing SMEs.',
          'areaServed': 'Global',
          'audience': {
            '@type': 'Audience',
            'audienceType': 'Founders, SMEs, Manufacturers, and B2B Leaders'
          }
        }
      ]
    }
  },

  // 4. Procurement Service
  {
    path: '/services/procurement',
    title: 'Procurement & Supplier Sourcing Services | KAMN',
    description: 'Find and compare suppliers with KAMN\'s managed procurement research, vendor sourcing and purchasing support.',
    canonical: `${SITE_URL}/services/procurement`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${SITE_URL}/services` },
            { '@type': 'ListItem', 'position': 3, 'name': 'Procurement', 'item': `${SITE_URL}/services/procurement` }
          ]
        },
        {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/procurement#service`,
          'name': 'Procurement & Supplier Sourcing Services',
          'serviceType': 'Strategic Procurement Outsourcing',
          'provider': { '@id': `${SITE_URL}/#organization` },
          'description': 'Managed supplier benchmarking, request for quotation (RFQ) coordination, vendor comparison memos, and contract renegotiation support.',
          'areaServed': 'Global',
          'audience': {
            '@type': 'Audience',
            'audienceType': 'Manufacturers, Wholesalers, Distributors, and Commercial Operators'
          }
        }
      ]
    }
  },

  // 5. Operations Service
  {
    path: '/services/operations',
    title: 'Managed Business Operations Services | KAMN',
    description: 'Reduce operational workload with outsourced follow-ups, reporting, coordination and workflow support.',
    canonical: `${SITE_URL}/services/operations`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${SITE_URL}/services` },
            { '@type': 'ListItem', 'position': 3, 'name': 'Operations', 'item': `${SITE_URL}/services/operations` }
          ]
        },
        {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/operations#service`,
          'name': 'Managed Business Operations Services',
          'serviceType': 'Outsourced Operations & Back-Office Execution',
          'provider': { '@id': `${SITE_URL}/#organization` },
          'description': 'Outsourced execution desk handling recurring follow-ups, operational coordination, document synthesis, and back-office cadence.',
          'areaServed': 'Global',
          'audience': {
            '@type': 'Audience',
            'audienceType': 'Growing SME Business Owners and Executive Teams'
          }
        }
      ]
    }
  },

  // 6. AI Systems Service
  {
    path: '/services/ai-systems',
    title: 'AI Workflow Automation & Managed Operations | KAMN',
    description: 'KAMN builds and operates AI-assisted workflows for businesses. Less repetitive work, with human oversight and no complex software to manage.',
    canonical: `${SITE_URL}/services/ai-systems`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${SITE_URL}/services` },
            { '@type': 'ListItem', 'position': 3, 'name': 'AI Systems', 'item': `${SITE_URL}/services/ai-systems` }
          ]
        },
        {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/ai-systems#service`,
          'name': 'AI Workflow Automation & Managed Operations',
          'serviceType': 'Supervised AI Workflow Operations',
          'provider': { '@id': `${SITE_URL}/#organization` },
          'description': 'Supervised AI workflow automation executed internally by KAMN consultants. We operate intelligent pipelines on your behalf without requiring software management.',
          'areaServed': 'Global',
          'audience': {
            '@type': 'Audience',
            'audienceType': 'SME Operators Seeking Practical Automation Without SaaS Overhead'
          }
        }
      ]
    }
  },

  // 7. Approach / How We Work
  {
    path: '/approach',
    title: 'Our Approach — How KAMN Operates Behind Your Business',
    description: 'How KAMN works: structured onboarding, weekly decision memos, internal AI Agentic OS execution, and strict commercial confidentiality.',
    canonical: `${SITE_URL}/approach`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Approach', 'item': `${SITE_URL}/approach` }
          ]
        },
        {
          '@type': 'WebPage',
          'name': 'KAMN Operating Approach',
          'url': `${SITE_URL}/approach`,
          'description': 'The three-phase execution rhythm: Diagnostic, Architecture, and Continuous Managed Retainer.',
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    }
  },

  // 8. Partnership Models
  {
    path: '/partnership',
    title: 'Partnership Models & Scope | KAMN Consultancy',
    description: 'Flexible monthly managed partnerships for growing SMEs. Dedicated principal attention, calm execution, and transparent deliverables.',
    canonical: `${SITE_URL}/partnership`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Partnership', 'item': `${SITE_URL}/partnership` }
          ]
        },
        {
          '@type': 'WebPage',
          'name': 'KAMN Monthly Partnership Models',
          'url': `${SITE_URL}/partnership`,
          'description': 'Transparent retainer structures with defined deliverables and principal accountability.',
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    }
  },

  // 9. About & Amanah
  {
    path: '/about',
    title: 'About KAMN — Built on Amanah, Driven by Ihsan',
    description: 'KAMN is an AI-native managed consultancy strengthening SME capacity. Founded on sacred trust (Amanah) and commercial excellence (Ihsan).',
    canonical: `${SITE_URL}/about`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': `${SITE_URL}/about` }
          ]
        },
        {
          '@type': 'AboutPage',
          'name': 'About KAMN',
          'url': `${SITE_URL}/about`,
          'description': 'Our founding values: Amanah (sacred trust), Ihsan (mastery), and building long-term economic capacity.',
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    }
  },

  // 10. Results / Founding Note
  {
    path: '/results',
    title: 'Founding Principles & Commercial Standard | KAMN',
    description: 'Our founding commitment: truthful capability, rigorous execution, and fiduciarily sound partnerships for productive businesses.',
    canonical: `${SITE_URL}/results`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Founding Note', 'item': `${SITE_URL}/results` }
          ]
        },
        {
          '@type': 'WebPage',
          'name': 'Founding Principles and Standards',
          'url': `${SITE_URL}/results`,
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    }
  },

  // 11. Journal / Insights
  {
    path: '/journal',
    title: 'KAMN Journal — Practical B2B Growth & Operations Insights',
    description: 'Strategic perspectives on business development outsourcing, supplier vetting, and pragmatic AI execution for SME leaders.',
    canonical: `${SITE_URL}/journal`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Journal', 'item': `${SITE_URL}/journal` }
          ]
        },
        {
          '@type': 'CollectionPage',
          'name': 'KAMN Journal & Memorandums',
          'url': `${SITE_URL}/journal`,
          'description': 'Editorial memorandums on B2B sales development, supply chain diligence, and operational discipline.',
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    }
  },

  // 12. Book a Growth Review / Begin
  {
    path: '/begin',
    title: 'Book a Growth Review | KAMN Managed Consultancy',
    description: 'Schedule a confidential 30-minute growth review with KAMN principals to evaluate business development, procurement, or operations needs.',
    canonical: `${SITE_URL}/begin`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Growth Review', 'item': `${SITE_URL}/begin` }
          ]
        },
        {
          '@type': 'ContactPage',
          'name': 'Book a Growth Review',
          'url': `${SITE_URL}/begin`,
          'description': 'Confidential executive intake to evaluate managed growth, procurement, and operations support.',
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    }
  },

  // 13. Privacy Policy
  {
    path: '/privacy',
    title: 'Privacy Policy | KAMN Consultancy',
    description: 'KAMN\'s privacy commitments and data protection practices for client business information and inquiries.',
    canonical: `${SITE_URL}/privacy`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Privacy Policy', 'item': `${SITE_URL}/privacy` }
          ]
        },
        {
          '@type': 'WebPage',
          'name': 'Privacy Policy',
          'url': `${SITE_URL}/privacy`,
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    }
  },

  // 14. Terms of Service
  {
    path: '/terms',
    title: 'Terms of Service | KAMN Consultancy',
    description: 'Terms governing commercial partnerships, managed advisory scopes, and engagement with KAMN.',
    canonical: `${SITE_URL}/terms`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Terms of Service', 'item': `${SITE_URL}/terms` }
          ]
        },
        {
          '@type': 'WebPage',
          'name': 'Terms of Service',
          'url': `${SITE_URL}/terms`,
          'publisher': { '@id': `${SITE_URL}/#organization` }
        }
      ]
    }
  }
];

export function getSeoMetadata(path) {
  const normalized = path.replace(/\/$/, '') || '/';
  const found = SEO_ROUTES.find(r => r.path === normalized);
  if (found) return found;

  // Fallback for subpaths or unmatched
  return {
    path,
    title: 'KAMN | Managed Growth, Procurement & Operations',
    description: 'AI-native managed business development, procurement, and operations consultancy for SMEs. We execute the operational work behind your business.',
    canonical: `${SITE_URL}${path}`,
    ogType: 'website',
    schema: SEO_ROUTES[0].schema
  };
}

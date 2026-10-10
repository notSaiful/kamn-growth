import nodemailer from 'nodemailer';

const TARGET_EMAIL = process.env.INQUIRY_RECIPIENT_EMAIL || 'saiful@ug30.mesaschool.co';

/**
 * Builds clean HTML email for KAMN inquiries
 */
function buildHtmlEmail(data, title) {
  const {
    fullName = '',
    businessEmail = '',
    companyName = '',
    whatsappNumber = '',
    website = '',
    annualRevenue = '',
    primaryChallenge = '',
    idealTimeline = '',
    description = '',
    source = 'KAMN Platform',
  } = data;

  const timestamp = new Date().toUTCString();

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #F4EFE6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #29251F;">
  <div style="max-width: 620px; margin: 0 auto; background-color: #FAF6EE; border: 1px solid #DCD0BF; border-radius: 4px; padding: 36px 32px; box-shadow: 0 4px 12px rgba(41, 37, 31, 0.05);">
    
    <!-- Header -->
    <div style="border-bottom: 1px solid rgba(41, 37, 31, 0.15); padding-bottom: 20px; margin-bottom: 28px;">
      <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2.5px; color: #68694C; font-weight: 700; margin-bottom: 6px;">
        KAMN &bull; Confidential Executive Intake
      </div>
      <h1 style="font-size: 26px; font-weight: 700; color: #29251F; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.2;">
        ${title}
      </h1>
      <p style="font-size: 13px; color: #6C6255; margin: 6px 0 0 0;">
        Received on ${timestamp} &bull; Source: ${source}
      </p>
    </div>

    <!-- Details Table -->
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px; font-size: 14px;">
      <tr style="border-bottom: 1px solid rgba(41, 37, 31, 0.08);">
        <td style="padding: 12px 0; color: #6C6255; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; font-weight: 600; width: 140px;">Client Name</td>
        <td style="padding: 12px 0; color: #29251F; font-weight: 600; font-size: 15px;">${fullName || 'Not specified'}</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(41, 37, 31, 0.08);">
        <td style="padding: 12px 0; color: #6C6255; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; font-weight: 600;">Business Email</td>
        <td style="padding: 12px 0; color: #29251F;">
          <a href="mailto:${businessEmail}" style="color: #68694C; font-weight: 600; text-decoration: underline;">${businessEmail}</a>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(41, 37, 31, 0.08);">
        <td style="padding: 12px 0; color: #6C6255; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; font-weight: 600;">Company Name</td>
        <td style="padding: 12px 0; color: #29251F; font-weight: 600;">${companyName || 'Not specified'}</td>
      </tr>
      ${whatsappNumber ? `
      <tr style="border-bottom: 1px solid rgba(41, 37, 31, 0.08);">
        <td style="padding: 12px 0; color: #6C6255; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; font-weight: 600;">WhatsApp / Phone</td>
        <td style="padding: 12px 0; color: #29251F;">
          <a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}" style="color: #68694C; text-decoration: underline;">${whatsappNumber}</a>
        </td>
      </tr>` : ''}
      ${website ? `
      <tr style="border-bottom: 1px solid rgba(41, 37, 31, 0.08);">
        <td style="padding: 12px 0; color: #6C6255; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; font-weight: 600;">Website</td>
        <td style="padding: 12px 0; color: #29251F;">
          <a href="${website.startsWith('http') ? website : 'https://' + website}" target="_blank" style="color: #68694C; text-decoration: underline;">${website}</a>
        </td>
      </tr>` : ''}
      ${annualRevenue ? `
      <tr style="border-bottom: 1px solid rgba(41, 37, 31, 0.08);">
        <td style="padding: 12px 0; color: #6C6255; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; font-weight: 600;">Annual Turnover</td>
        <td style="padding: 12px 0; color: #29251F;">${annualRevenue}</td>
      </tr>` : ''}
      ${primaryChallenge ? `
      <tr style="border-bottom: 1px solid rgba(41, 37, 31, 0.08);">
        <td style="padding: 12px 0; color: #6C6255; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; font-weight: 600;">Primary Need</td>
        <td style="padding: 12px 0; color: #29251F; font-weight: 600;">${primaryChallenge}</td>
      </tr>` : ''}
      ${idealTimeline ? `
      <tr style="border-bottom: 1px solid rgba(41, 37, 31, 0.08);">
        <td style="padding: 12px 0; color: #6C6255; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; font-weight: 600;">Timeline</td>
        <td style="padding: 12px 0; color: #29251F;">${idealTimeline}</td>
      </tr>` : ''}
    </table>

    <!-- Description / Situation Block -->
    ${description ? `
    <div style="background-color: #F2EADB; border: 1px solid rgba(41, 37, 31, 0.12); border-radius: 3px; padding: 18px 20px; margin-bottom: 28px;">
      <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6C6255; font-weight: 700; margin-bottom: 8px;">
        Operational Situation & Objectives
      </div>
      <div style="font-size: 14px; line-height: 1.6; color: #29251F; white-space: pre-wrap;">${description}</div>
    </div>` : ''}

    <!-- Direct Action Button -->
    <div style="text-align: center; margin-bottom: 28px;">
      <a href="mailto:${businessEmail}?subject=Re:%20KAMN%20Growth%20Review%20%E2%80%94%20${encodeURIComponent(companyName || 'Your Business')}" 
         style="display: inline-block; background-color: #29251F; color: #FAF6EE; padding: 12px 28px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; border-radius: 2px;">
        Reply to Client Directly
      </a>
    </div>

    <!-- Footer -->
    <div style="border-top: 1px solid rgba(41, 37, 31, 0.15); padding-top: 18px; font-size: 11px; color: #8C8275; line-height: 1.5; text-align: center;">
      KAMN &bull; AI-Native Managed Growth, Procurement & Operations Consultancy<br/>
      Strict Commercial Amanah & Confidentiality &bull; <a href="https://kamn-growth.vercel.app" style="color: #68694C; text-decoration: none;">kamn-growth.vercel.app</a>
    </div>

  </div>
</body>
</html>
  `.trim();
}

/**
 * Dispatch notification across available email delivery channels
 */
export async function sendEnquiryNotification(data) {
  const fullName = data.fullName || data.name || 'Anonymous Lead';
  const companyName = data.companyName || data.company || 'Enterprise';
  const subject = `New KAMN Enquiry: ${companyName} (${fullName})`;
  const htmlContent = buildHtmlEmail(data, subject);

  const results = {
    formsubmit: null,
    resend: null,
    smtp: null,
    webhook: null,
  };

  // 1. Channel 1: FormSubmit.co forwarding directly to TARGET_EMAIL
  try {
    const fsResponse = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TARGET_EMAIL)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://kamn-growth.vercel.app/',
        'Origin': 'https://kamn-growth.vercel.app',
      },
      body: JSON.stringify({
        _subject: subject,
        _template: 'table',
        _replyto: data.businessEmail || data.email,
        'Client Name': fullName,
        'Business Email': data.businessEmail || data.email,
        'Company Name': companyName,
        'Phone / WhatsApp': data.whatsappNumber || 'N/A',
        'Website': data.website || 'N/A',
        'Annual Turnover': data.annualRevenue || 'N/A',
        'Primary Need / Challenge': data.primaryChallenge || data.objective || 'N/A',
        'Ideal Timeline': data.idealTimeline || 'N/A',
        'Operational Description': data.description || 'N/A',
        'Source': data.source || 'web_form',
      }),
    });
    const fsRaw = await fsResponse.text();
    let fsJson = fsRaw;
    try {
      fsJson = JSON.parse(fsRaw);
    } catch (e) {
      // raw text
    }
    results.formsubmit = { status: fsResponse.status, data: fsJson };
    console.log('[Notifier] FormSubmit dispatch status:', fsResponse.status);
  } catch (fsErr) {
    results.formsubmit = { error: fsErr.message };
    console.warn('[Notifier] FormSubmit error:', fsErr.message);
  }

  // 2. Channel 2: Resend API (if configured in environment)
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || 'KAMN Enquiries <onboarding@resend.dev>',
          to: [TARGET_EMAIL],
          reply_to: data.businessEmail || data.email,
          subject: subject,
          html: htmlContent,
        }),
      });
      const resendJson = await resendRes.json();
      results.resend = { status: resendRes.status, data: resendJson };
      console.log('[Notifier] Resend dispatch:', resendJson);
    } catch (resendErr) {
      results.resend = { error: resendErr.message };
      console.warn('[Notifier] Resend error:', resendErr.message);
    }
  }

  // 3. Channel 3: SMTP / Nodemailer (if configured in environment)
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

  if (smtpHost || (smtpUser && smtpPass)) {
    try {
      const transportConfig = smtpHost ? {
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: smtpUser, pass: smtpPass },
      } : {
        service: 'gmail',
        auth: { user: smtpUser, pass: smtpPass },
      };

      const transporter = nodemailer.createTransport(transportConfig);
      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM || `"KAMN Enquiries" <${smtpUser}>`,
        to: TARGET_EMAIL,
        replyTo: data.businessEmail || data.email,
        subject: subject,
        html: htmlContent,
      });
      results.smtp = { messageId: info.messageId };
      console.log('[Notifier] SMTP email dispatched:', info.messageId);
    } catch (smtpErr) {
      results.smtp = { error: smtpErr.message };
      console.warn('[Notifier] SMTP error:', smtpErr.message);
    }
  }

  // 4. Channel 4: Generic Webhook (e.g. Zapier, Make, Slack)
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const whRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: TARGET_EMAIL,
          event: 'new_enquiry',
          subject: subject,
          data: data,
          timestamp: new Date().toISOString(),
        }),
      });
      results.webhook = { status: whRes.status };
    } catch (whErr) {
      results.webhook = { error: whErr.message };
      console.warn('[Notifier] Webhook error:', whErr.message);
    }
  }

  return results;
}

import { COMPANY_INFO, CATEGORIES, PRODUCTS } from './data/products.js';
import { SITE_URL, FAQS, getRouteSeo, getJsonLd } from './data/seo.js';

// Web3Forms public access key (safe to ship in client code); mail goes to the address registered with it.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'a289feef-6c08-4bd5-927b-f353cf445e39';

// Local Brand Images from /public/BRANDS WE OFFER
const BRAND_IMAGES = [
  '/BRANDS%20WE%20OFFER/ASMACO%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/COSMOPLAST%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/DeWalt_Logo.webp',
  '/BRANDS%20WE%20OFFER/FEVICOL%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/FOSROC%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/Gemini_Generated_Image_62az9962az9962az.webp',
  '/BRANDS%20WE%20OFFER/Gemini_Generated_Image_yd14mmyd14mmyd14.webp',
  '/BRANDS%20WE%20OFFER/HILTI%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/Honeywell%20Logo.webp',
  '/BRANDS%20WE%20OFFER/JOTUN%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/KAJ%20LOGG.webp',
  '/BRANDS%20WE%20OFFER/KNAUF%20Logo.webp',
  '/BRANDS%20WE%20OFFER/KNIPEX%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/NATIONAL%20CEMENT%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/POLYCOM%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/RBA%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/RR%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/SIKA%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/STEICO%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/Stanley-Logo.webp',
  '/BRANDS%20WE%20OFFER/TERRACO%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/TOTAL%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/ULTRATECH%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/VAULTEX%20LOGO.webp',
  '/BRANDS%20WE%20OFFER/bison-logo.webp',
  '/BRANDS%20WE%20OFFER/gypsoman-logo.webp',
  '/BRANDS%20WE%20OFFER/henkel-logo.webp',
  '/BRANDS%20WE%20OFFER/makita-logo.webp',
  '/BRANDS%20WE%20OFFER/polybit-logo-png.webp',
  '/BRANDS%20WE%20OFFER/polycab%20logo.webp',
  '/BRANDS%20WE%20OFFER/uken_logo.webp'
];

// Fleet Trucks Google Drive Direct IDs
const FLEET_TRUCKS = [
  {
    capacity: "3 Cubic Meter Capacity",
    image: "https://lh3.googleusercontent.com/d/1L918lwizbD3OSMSTcHf0dGDrTHopp52X=w1000"
  },
  {
    capacity: "5 Cubic Meter Capacity",
    image: "https://lh3.googleusercontent.com/d/1eSa9J74_A7eoHoTHYbShHskMZWimddqj=w1000"
  },
  {
    capacity: "20 Cubic Meter Capacity",
    image: "https://lh3.googleusercontent.com/d/1LyZMfRtRvanbPhbT6FMfIQMxl61oU53h=w1000"
  },
  {
    capacity: "35 - 40 Cubic Meter Capacity",
    image: "https://lh3.googleusercontent.com/d/1l5EBYE9fuJNhpp3dvN9g2WpZOPZKADGR=w1000"
  }
];

// Projects Showcase
const PROJECTS_BUILD = [
  {
    title: "Al Ferdous Shopping Mall",
    location: "Jumeirah",
    image: "/projects/al-ferdous-shopping-mall-jumeirah.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Hotel",
    location: "Al Garhoud",
    image: "/projects/hotel-al-garhoud.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Mosque",
    location: "Al Warqa",
    image: "/projects/mosque-al-warqa.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Mosque",
    location: "Deira",
    image: "/projects/mosque-deira.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Residential and Commercial (2B+G+6+R)",
    location: "Al Warsan",
    image: "/projects/residential-commercial-al-warsan-2bg6r.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Residential Building (B+G+3P+14)",
    location: "JVC",
    image: "/projects/residential-building-jvc-bg3p14.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Residential Building (G+1P+5+R)",
    location: "JVT",
    image: "/projects/residential-building-jvt-g1p5r.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Villa",
    location: "Dubai Hills",
    image: "/projects/villa-dubai-hills.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Villa",
    location: "Rashidiya",
    image: "/projects/villa-rashidiya.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Villas",
    location: "Dubai Land",
    image: "/projects/villas-dubai-land.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Emirates Hospital",
    location: "Motor City",
    image: "/projects/emirates-hospital-motor-city.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Mansion",
    location: "Al Jumeirah",
    image: "/projects/mansion-al-jumeirah.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  },
  {
    title: "Residential Building (G+5+R)",
    location: "Al Wasl",
    image: "/projects/residential-building-al-wasl-g5r.webp",
    supplied: "Supplied: Premium Building Materials & Site Support"
  }
];

// Vector SVG Icons (No Emojis)
const ICONS = {
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  whatsapp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.01c0 2.13.665 4.108 1.8 5.732L2 22l4.382-1.744A9.957 9.957 0 0012 22.02c5.523 0 10-4.484 10-10.01C22 6.484 17.523 2 12 2zm.006 18.016a7.973 7.973 0 01-4.07-1.107l-.292-.174-2.6.1.688-2.533-.19-.303A7.974 7.974 0 014.008 12.01c0-4.411 3.585-7.997 8.002-7.997 4.411 0 7.992 3.586 7.992 7.997 0 4.415-3.58 8.006-7.996 8.006zm4.38-5.986c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.013-.373-1.93-1.19-.714-.637-1.196-1.425-1.336-1.665-.14-.24-.015-.37.105-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01 0 1.19.86 2.33.98 2.49.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.2-.16-.44-.28z"/></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  location: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  menu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  cart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
  badgeCheck: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  truckFast: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
  truckSmall: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
  tagPercent: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>`,
  headset: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`
};

// Application State
const state = {
  currentView: 'home', // 'home' | 'categories' | 'category' | 'about' | 'contact' | 'cart'
  selectedCategory: null,
  searchQuery: '',
  cart: JSON.parse(localStorage.getItem('pioneer_cart') || localStorage.getItem('pioneer_boq_cart') || '[]'),
  searchModalOpen: false,
  mobileMenuOpen: false
};

// Cart LocalStorage Sync
function saveCart() {
  localStorage.setItem('pioneer_cart', JSON.stringify(state.cart));
}

window.addToCartById = function(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = state.cart.find(item => item.id === product.id);
  if (existing) {
    showToast(`"${product.name}" is already in your Cart!`);
  } else {
    state.cart.push({ ...product, qty: 1, note: '' });
    saveCart();
    showToast(`Added "${product.name}" to your Cart!`);
    renderApp();
  }
};

window.removeFromCart = function(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  showToast('Item removed from Cart');
  renderApp();
};

window.updateCartItemNote = function(productId, note) {
  const item = state.cart.find(i => i.id === productId);
  if (item) {
    item.note = note;
    saveCart();
  }
};

function showToast(msg) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.style.cssText = `
      position: fixed; bottom: 24px; right: 24px; z-index: 3500;
      background: #1E293B; color: #ffffff; padding: 12px 20px;
      border-radius: 8px; font-size: 14px; font-weight: 600;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25); border-left: 4px solid #80C0C0;
      transition: opacity 200ms ease-out, transform 200ms ease-out;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 3000);
}

function generateEmailCartUrl(clientName = '', clientPhone = '', customNotes = '') {
  const recipient = COMPANY_INFO.emails[0];
  const subject = `Pioneer BMT Order Inquiry - ${clientName || 'Site Order'}`;
  
  let body = `OFFICIAL PIONEER BMT CART ORDER INQUIRY\n`;
  body += `Pioneer Building Materials Trading LLC\n`;
  body += `Target Recipient: ${recipient}\n`;
  body += `------------------------------------\n\n`;

  if (clientName) body += `CLIENT NAME / COMPANY: ${clientName}\n`;
  if (clientPhone) body += `PHONE / WHATSAPP: ${clientPhone}\n`;
  if (customNotes) body += `SITE LOCATION / NOTES:\n${customNotes}\n`;
  body += `------------------------------------\n\n`;

  if (state.cart.length === 0) {
    body += `Inquiry Details: Requesting catalog pricing & site delivery options.\n`;
  } else {
    body += `CART ITEMS ORDERED:\n`;
    state.cart.forEach((item, index) => {
      const specText = item.spec ? ` (${item.spec.replace(/\n/g, ', ')})` : '';
      body += `${index + 1}. ${item.name}${specText}\n`;
      if (item.note) body += `   Note / Requirements: ${item.note}\n`;
      body += `\n`;
    });
  }

  body += `Please reply with current stock availability, unit pricing & site delivery schedule in UAE.\nThank you!`;
  
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function generateWhatsAppCartUrl(customNotes = '') {
  let text = `*OFFICIAL PIONEER BMT CART ORDER*\n`;
  text += `Pioneer Building Materials Trading LLC\n`;
  text += `------------------------------------\n\n`;
  
  if (state.cart.length === 0) {
    text += `Hello Sales Team, I would like to place a materials inquiry.\n`;
  } else {
    text += `*SELECTED CART ITEMS:*\n`;
    state.cart.forEach((item, index) => {
      const specText = item.spec ? ` (${item.spec.replace(/\n/g, ', ')})` : '';
      text += `${index + 1}. *${item.name}*${specText}\n`;
      if (item.note) text += `   _Note:_ ${item.note}\n`;
    });
  }

  if (customNotes) text += `\n*PROJECT NOTES:* ${customNotes}\n`;
  text += `\nPlease confirm pricing & site delivery logistics. Thank you!`;
  
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}

window.handleSendCartOrderEmail = async function(e) {
  if (e) e.preventDefault();
  const nameEl = document.getElementById('cart-client-name');
  const phoneEl = document.getElementById('cart-client-phone');
  const notesEl = document.getElementById('cart-notes');
  const btnEl = document.getElementById('send-cart-order-btn');
  
  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const notes = notesEl ? notesEl.value.trim() : '';

  if (!name || !phone) {
    showToast('Please enter your name and phone number');
    return;
  }

  if (btnEl) {
    btnEl.disabled = true;
    btnEl.innerHTML = `<span>⏳ Submitting Order...</span>`;
  }

  let itemsSummary = '';
  if (state.cart.length === 0) {
    itemsSummary = "General building materials catalog & site inquiry.";
  } else {
    itemsSummary = state.cart.map((item, idx) => {
      const specText = item.spec ? ` (${item.spec.replace(/\n/g, ', ')})` : '';
      return `${idx + 1}. ${item.name}${specText}${item.note ? `\n   • Note: ${item.note}` : ''}`;
    }).join('\n\n');
  }

  const payload = {
    kind: 'order',
    subject: `[CART ORDER] Pioneer BMT - ${name}`,
    fields: [
      ['Client / Company', name],
      ['Phone / WhatsApp', phone],
      ['Delivery Location & Site Notes', notes || 'No additional site notes specified']
    ],
    items: state.cart.map(i => ({ name: i.name, spec: (i.spec || '').replace(/\n/g, ', '), note: i.note || '' })),
    plain: itemsSummary
  };

  const sent = await sendNotification(payload);
  if (sent) {
    showToast('Order sent! Our sales team will get back to you shortly.');
    state.cart = [];
    saveCart();
    renderApp();
    return;
  }

  // The service did not confirm delivery: open the visitor's mail app instead,
  // and say so, rather than reporting an order that was never sent.
  window.open(generateEmailCartUrl(name, phone, notes), '_self');
  showToast('Could not send automatically. Your email app has opened with the order ready to send.');
  if (btnEl) {
    btnEl.disabled = false;
    btnEl.innerHTML = `<span>Submit Cart Order</span>`;
  }
};

// ---- Email notifications -------------------------------------------------
// Preferred: EmailJS, which sends a fully formatted HTML email (logo, header,
// footer, order/enquiry label). Fallback: Web3Forms plain-text email.
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
};

const escHtml = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function buildEmailHtml({ kind, fields, items }) {
  const isOrder = kind === 'order';
  const siteUrl = SITE_URL;
  const badge = isOrder ? 'NEW CART ORDER' : 'NEW CONTACT ENQUIRY';
  const source = isOrder ? 'Submitted from the Shopping Cart page' : 'Submitted from the Contact Us page (Send Direct Inquiry)';
  const accent = isOrder ? '#178f86' : '#0f2c3d';
  const font = "font-family:'Segoe UI',Arial,Helvetica,sans-serif;";

  const rows = fields.map(([k, v]) => `
    <tr>
      <td style="${font}padding:12px 16px;width:34%;background:#f4fbfa;border-bottom:1px solid #e1efec;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#4d6478;vertical-align:top;">${escHtml(k)}</td>
      <td style="${font}padding:12px 16px;border-bottom:1px solid #e1efec;font-size:15px;color:#0f2c3d;white-space:pre-line;">${escHtml(v)}</td>
    </tr>`).join('');

  const itemRows = (items || []).map((it, i) => `
    <tr>
      <td style="${font}padding:12px 14px;border-bottom:1px solid #e1efec;font-size:14px;color:#178f86;font-weight:700;width:36px;vertical-align:top;">${i + 1}</td>
      <td style="${font}padding:12px 14px;border-bottom:1px solid #e1efec;vertical-align:top;">
        <div style="font-size:15px;font-weight:700;color:#0f2c3d;">${escHtml(it.name)}</div>
        ${it.spec ? `<div style="font-size:12px;color:#4d6478;margin-top:2px;">${escHtml(it.spec)}</div>` : ''}
        ${it.note ? `<div style="font-size:13px;color:#0f2c3d;margin-top:6px;padding:6px 10px;background:#fff8e6;border-left:3px solid #f0b429;">Note: ${escHtml(it.note)}</div>` : ''}
      </td>
    </tr>`).join('');

  const itemsBlock = isOrder ? `
    <tr><td style="padding:26px 32px 0;">
      <div style="${font}font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#0f2c3d;margin-bottom:10px;">Cart Items (${(items || []).length})</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e1efec;border-radius:8px;border-collapse:separate;">
        ${itemRows || `<tr><td style="${font}padding:14px;font-size:14px;color:#4d6478;">General building materials catalog &amp; site inquiry.</td></tr>`}
      </table>
    </td></tr>` : '';

  const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dubai', dateStyle: 'medium', timeStyle: 'short' }) + ' (Dubai time)';

  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#eef5f4;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef5f4;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #d5e9e6;">
  <tr><td style="background:#ffffff;padding:22px 32px;border-bottom:4px solid #178f86;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td width="64" style="vertical-align:middle;"><img src="${siteUrl}/email-logo.png" width="56" height="57" alt="Pioneer" style="display:block;border:0;"></td>
      <td style="vertical-align:middle;padding-left:12px;">
        <div style="${font}font-size:24px;font-weight:800;letter-spacing:.14em;color:#0f2c3d;line-height:1;">PIONEER</div>
        <div style="${font}font-size:12px;font-weight:600;letter-spacing:.08em;color:#4d6478;text-transform:uppercase;margin-top:5px;">Building Materials Trading LLC</div>
      </td>
    </tr></table>
  </td></tr>
  <tr><td style="background:${accent};padding:18px 32px;">
    <div style="${font}font-size:11px;letter-spacing:.2em;color:#bfe9e3;text-transform:uppercase;">Website notification</div>
    <div style="${font}font-size:22px;font-weight:800;color:#ffffff;margin-top:4px;">${badge}</div>
    <div style="${font}font-size:13px;color:#e8f5f3;margin-top:4px;">${source}</div>
  </td></tr>
  <tr><td style="padding:28px 32px 0;">
    <div style="${font}font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#0f2c3d;margin-bottom:10px;">${isOrder ? 'Customer Details' : 'Enquiry Details'}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e1efec;border-radius:8px;border-collapse:separate;">${rows}</table>
  </td></tr>
  ${itemsBlock}
  <tr><td style="padding:22px 32px 30px;">
    <div style="${font}font-size:13px;color:#4d6478;">Received: ${escHtml(now)}</div>
    <div style="${font}font-size:13px;color:#4d6478;margin-top:6px;">Please reply with stock availability, pricing and delivery schedule.</div>
  </td></tr>
  <tr><td style="background:#0f2c3d;padding:22px 32px;">
    <div style="${font}font-size:14px;font-weight:700;color:#ffffff;letter-spacing:.06em;">${escHtml(COMPANY_INFO.name)}</div>
    <div style="${font}font-size:12px;color:#bcd0d8;margin-top:8px;line-height:1.7;">
      ${escHtml(COMPANY_INFO.address)}<br>
      ${COMPANY_INFO.phones.map(escHtml).join(' &nbsp;|&nbsp; ')}<br>
      ${COMPANY_INFO.emails.map(escHtml).join(' &nbsp;|&nbsp; ')}<br>
      <a href="${siteUrl}" style="color:#2ecfb2;text-decoration:none;">${escHtml(COMPANY_INFO.website)}</a>
    </div>
    <div style="${font}font-size:11px;color:#7f9aa6;margin-top:12px;">This message was generated automatically by the Pioneer website.</div>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}

// True only when the mail service explicitly confirms it accepted the message.
async function sendNotification(payload) {
  const { kind, subject, fields, items, plain } = payload;

  if (EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey) {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS.serviceId,
          template_id: EMAILJS.templateId,
          user_id: EMAILJS.publicKey,
          template_params: {
            subject,
            source_label: kind === 'order' ? 'Cart Order' : 'Contact Enquiry',
            html_body: buildEmailHtml({ kind, fields, items })
          }
        })
      });
      return response.ok;
    } catch (err) {
      return false;
    }
  }

  // Fallback: Web3Forms plain-text email, still labelled with where it came from.
  try {
    const body = { access_key: WEB3FORMS_KEY, subject, from_name: 'Pioneer Website',
      'Source': kind === 'order' ? 'CART ORDER (Shopping Cart page)' : 'CONTACT ENQUIRY (Contact Us page)' };
    fields.forEach(([k, v]) => { body[k] = v; });
    if (kind === 'order') body['Cart Items'] = plain;
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return response.ok && data.success === true;
  } catch (err) {
    return false;
  }
}

window.handleContactInquiry = async function(e) {
  e.preventDefault();
  const f = e.target;
  const v = (id) => (f.querySelector('#' + id)?.value || '').trim();
  const name = v('cx-name'), company = v('cx-company'), phone = v('cx-phone');
  const email = v('cx-email'), subjectLine = v('cx-subject'), message = v('cx-message');
  const btn = f.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';

  const fields = [['Name', name]];
  if (company) fields.push(['Company', company]);
  fields.push(['Phone / WhatsApp', phone]);
  if (email) fields.push(['Email', email]);
  if (subjectLine) fields.push(['Subject', subjectLine]);
  fields.push(['Message / Materials Needed', message]);

  const sent = await sendNotification({
    kind: 'contact',
    subject: `[CONTACT ENQUIRY] Pioneer BMT - ${subjectLine || name}`,
    fields
  });
  btn.disabled = false;
  btn.textContent = 'Send Message';
  if (sent) {
    showToast('Message sent! We will get back to you shortly.');
    f.reset();
  } else {
    const subject = encodeURIComponent(`Pioneer BMT Inquiry - ${subjectLine || name}`);
    const body = encodeURIComponent(fields.map(([k, x]) => `${k}: ${x}`).join('\n'));
    window.open(`mailto:${COMPANY_INFO.emails[0]}?subject=${subject}&body=${body}`, '_self');
    showToast('Could not send automatically. Your email app has opened with the message ready to send.');
  }
};

window.clearCart = function() {
  state.cart = [];
  saveCart();
  renderApp();
};

window.handleSendCartOrderWhatsApp = function(e) {
  if (e) e.preventDefault();
  const nameEl = document.getElementById('cart-client-name');
  const phoneEl = document.getElementById('cart-client-phone');
  const notesEl = document.getElementById('cart-notes');
  
  const name = nameEl ? nameEl.value : '';
  const phone = phoneEl ? phoneEl.value : '';
  const notes = notesEl ? notesEl.value : '';

  let notesCombo = '';
  if (name) notesCombo += `Client: ${name}\n`;
  if (phone) notesCombo += `Phone: ${phone}\n`;
  if (notes) notesCombo += `Site Notes: ${notes}\n`;

  const waUrl = generateWhatsAppCartUrl(notesCombo);
  window.open(waUrl, '_blank');
  showToast('Opening WhatsApp sales desk...');
};

window.toggleMobileMenu = function() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  renderApp();
};

window.closeMobileMenu = function() {
  state.mobileMenuOpen = false;
  renderApp();
};

// Clean HTML5 History Navigation (PushState Router)
window.navigateTo = function(view, catSlug = null) {
  state.mobileMenuOpen = false;
  let targetPath = '/';
  if (view === 'home' || !view) {
    targetPath = '/';
  } else if (catSlug) {
    targetPath = `/category/${catSlug}`;
  } else {
    targetPath = `/${view}`;
  }

  if (window.location.pathname === targetPath) {
    syncRouteFromPath();
    return;
  }

  // White loader with the logo, held until the next page's images have loaded.
  const started = Date.now();
  showPageLoader().then(() => {
    window.history.pushState({ view, catSlug }, '', targetPath);
    syncRouteFromPath();
    return waitForPageImages();
  }).then(() => {
    const wait = Math.max(0, 900 - (Date.now() - started));
    setTimeout(hidePageLoader, wait);
  });
};

function ensurePageLoader() {
  let el = document.getElementById('page-loader');
  if (!el) {
    el = document.createElement('div');
    el.id = 'page-loader';
    el.innerHTML = '<div class="pl-wrap"><div class="pl-ring"></div><div class="pl-ring2"></div><img class="pl-logo" src="/logo-removebg-preview.webp" alt="Pioneer"></div>';
    document.body.appendChild(el);
  }
  return el;
}

function showPageLoader() {
  const el = ensurePageLoader();
  el.classList.add('show');
  return new Promise(res => setTimeout(res, 260));
}

function hidePageLoader() {
  const el = document.getElementById('page-loader');
  if (el) el.classList.remove('show');
  // Let anything waiting on the loader (e.g. the About page reveal) start now.
  setTimeout(() => window.dispatchEvent(new Event('scroll')), 300);
}

// Resolve once the images near the top of the new page are ready (or after 2.5s).
function waitForPageImages() {
  const imgs = Array.from(document.querySelectorAll('#app img'))
    .filter(i => i.getBoundingClientRect().top < window.innerHeight * 1.2 && !i.complete);
  const loads = imgs.map(i => new Promise(res => { i.addEventListener('load', res, { once: true }); i.addEventListener('error', res, { once: true }); }));
  return Promise.race([Promise.all(loads), new Promise(res => setTimeout(res, 2500))]);
}

function syncRouteFromPath() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  if (pathname === '/' || pathname === '') {
    state.currentView = 'home';
    state.selectedCategory = null;
  } else if (pathname.startsWith('/category/')) {
    const rawCatSlug = pathname.replace('/category/', '');
    const decodedSlug = decodeURIComponent(rawCatSlug).toLowerCase();
    state.currentView = 'category';
    state.selectedCategory = CATEGORIES.find(c => 
      c.slug === rawCatSlug || 
      c.oldSlug === rawCatSlug || 
      c.slug === decodedSlug || 
      c.name.toLowerCase() === decodedSlug ||
      c.slug.replace(/[^a-z0-9]/g, '') === decodedSlug.replace(/[^a-z0-9]/g, '')
    ) || null;
  } else {
    const viewName = pathname.replace('/', '');
    // If user hits /products, redirect to /categories
    if (viewName === 'products') {
      state.currentView = 'categories';
    } else {
      state.currentView = viewName || 'home';
    }
    state.selectedCategory = null;
  }

  window.scrollTo(0, 0);
  renderApp();
}

// HEADER NAVBAR (Unified sticky nav bar across all pages)
function renderHeader() {
  const cartTotal = state.cart.length;
  const isHome = state.currentView === 'home';
  const isProdActive = state.currentView === 'categories' || state.currentView === 'category';

  return `
    <!-- Header nav bar: fades in on scroll for home, immediately visible on inner pages -->
    <header class="sticky-nav-bar ${isHome ? '' : 'visible'}" id="sticky-nav-bar">
      <div class="sticky-nav-inner">
        <a href="#" onclick="navigateTo('home'); return false;" class="sticky-brand">
          <img src="/logo-removebg-preview.webp" alt="Pioneer Logo" class="sticky-brand-img">
          <span class="sticky-brand-name">PIONEER</span>
        </a>
        <ul class="sticky-nav-links">
          <li><a href="#" onclick="navigateTo('home'); return false;" class="${isHome ? 'active' : ''}">HOME</a></li>
          <li><a href="#" onclick="navigateTo('categories'); return false;" class="${isProdActive ? 'active' : ''}">PRODUCTS</a></li>
          <li><a href="#" onclick="navigateTo('about'); return false;" class="${state.currentView === 'about' ? 'active' : ''}">ABOUT US</a></li>
          <li><a href="#" onclick="navigateTo('contact'); return false;" class="${state.currentView === 'contact' ? 'active' : ''}">CONTACT US</a></li>
        </ul>
        <div class="sticky-nav-actions">
          <button class="sticky-icon-btn" onclick="openSearchModal()" title="Search Products">${ICONS.search}</button>
          <button class="sticky-icon-btn sticky-cart-btn" onclick="navigateTo('cart')" title="Cart">
            ${ICONS.cart}
            ${cartTotal > 0 ? `<span class="cart-badge">${cartTotal}</span>` : ''}
          </button>
          <button class="sticky-icon-btn sticky-hamburger" onclick="toggleMobileMenu()" title="Menu">${ICONS.menu}</button>
        </div>
      </div>
    </header>
  `;
}

// 1. FULL-BLEED IMMERSIVE HERO — Logo top-left, headline centre, bottom nav pills + CTA
function renderHeroSection() {
  const cartTotal = state.cart.length;
  return `
    <section class="immersive-hero" id="immersive-hero">
      <!-- Background image -->
      <div class="immersive-hero-bg">
        <img src="/cover.webp" alt="Pioneer Building Materials" class="immersive-hero-img" fetchpriority="high">
        <div class="immersive-hero-overlay"></div>
      </div>

      <!-- Top-left: Logo (floating on photo) -->
      <div class="immersive-logo">
        <a href="#" onclick="navigateTo('home'); return false;" class="immersive-logo-link">
          <img src="/logo-removebg-preview.webp" alt="Pioneer Logo" class="immersive-logo-img">
          <div class="immersive-logo-text">
            <span class="immersive-logo-name">PIONEER</span>
            <span class="immersive-logo-sub">Building Materials Trading LLC</span>
          </div>
        </a>
      </div>

      <!-- Top-right: nav links, with search + cart sitting beneath them -->
      <div class="immersive-top-right">
        <nav class="immersive-nav-pills">
          <a href="#" onclick="navigateTo('home'); return false;" class="immersive-pill ${state.currentView === 'home' ? 'active' : ''}">HOME</a>
          <a href="#" onclick="navigateTo('categories'); return false;" class="immersive-pill">PRODUCTS</a>
          <a href="#" onclick="navigateTo('about'); return false;" class="immersive-pill">ABOUT US</a>
          <a href="#" onclick="navigateTo('contact'); return false;" class="immersive-pill">CONTACT US</a>
        </nav>
        <div class="immersive-top-actions">
          <button class="immersive-icon-btn" onclick="openSearchModal()" title="Search Products">${ICONS.search}</button>
          <button class="immersive-icon-btn immersive-cart-btn" onclick="navigateTo('cart')" title="Cart">
            ${ICONS.cart}
            ${cartTotal > 0 ? `<span class="cart-badge">${cartTotal}</span>` : ''}
          </button>
          <button class="immersive-icon-btn immersive-hamburger" onclick="toggleMobileMenu()" title="Menu">${ICONS.menu}</button>
        </div>
      </div>

      <!-- Bottom-left: Get a Quote CTA + click-to-call -->
      <div class="immersive-bottom-bar">
        <div class="immersive-cta-stack">
          <a href="https://wa.me/${COMPANY_INFO.whatsapp}" target="_blank" rel="noopener" class="immersive-cta-btn">
            Get a Quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}" class="immersive-phone-link">
            ${COMPANY_INFO.phones[0]}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}

// 1b. WELCOME / INTRO SECTION
function renderWelcomeSection() {
  return `
    <section class="welcome-section" id="welcome-section">
      <div class="container">
        <div class="welcome-head">
          <h2 class="welcome-main-title">Welcome to ${COMPANY_INFO.name}</h2>
        </div>

        <div class="welcome-stats-track" id="welcome-stats">
          <!-- Circle 1: 100% client satisfaction -->
          <div class="welcome-stat-circle" data-target="100" data-suffix="%" data-decimals="0">
            <div class="welcome-stat-num">
              <span class="stat-count">0</span><span class="stat-suffix">%</span>
            </div>
            <div class="welcome-stat-label">Client Satisfaction</div>
          </div>

          <!-- Circle 2: 16+ years of experience -->
          <div class="welcome-stat-circle" data-target="16" data-suffix="+" data-decimals="0">
            <div class="welcome-stat-num">
              <span class="stat-count">0</span><span class="stat-suffix">+</span>
            </div>
            <div class="welcome-stat-label">Years of experience</div>
          </div>

          <!-- Circle 3: 1000+ projects completed -->
          <div class="welcome-stat-circle" data-target="1000" data-suffix="+" data-decimals="0">
            <div class="welcome-stat-num">
              <span class="stat-count">0</span><span class="stat-suffix">+</span>
            </div>
            <div class="welcome-stat-label">Projects Completed</div>
          </div>

          <!-- Circle 4: 5000+ products available -->
          <div class="welcome-stat-circle" data-target="5000" data-suffix="+" data-decimals="0">
            <div class="welcome-stat-num">
              <span class="stat-count">0</span><span class="stat-suffix">+</span>
            </div>
            <div class="welcome-stat-label">Products Available</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 2. OUR PRODUCTS — DIAGONAL WIPE SLIDER
// Covers fill the frame. The new one is revealed by a diagonal edge
// sweeping from the top-left corner to the bottom-right. No copy — just
// the View Products button sitting in the middle.
const PRODUCT_COVERS = [
  "/category_cover/sand-aggregate-cement.webp",
  "/category_cover/building-materials.webp",
  "/category_cover/safety-items.webp",
  "/category_cover/fasteners.webp",
  "/category_cover/hand-tools.webp",
  "/category_cover/power-tools.webp",
  "/category_cover/timber-plywood.webp",
  "/category_cover/electrical-plumbing-sanitary.webp",
  "/category_cover/water-tanks-coolers-filters.webp",
  "/category_cover/concrete-products.webp",
  "/category_cover/packaging-painting-abrasives-adhesives.webp"
];

function renderOurProductsSlider() {
  return `
    <section class="prod-slider-section">
      <div class="prod-slider-header">
        <h2 class="section-title">Our Products</h2>
        <p class="prod-slider-sub">Explore all our material divisions featuring certified building products</p>
      </div>

      <div class="prod-slider" id="prod-slider" data-current="0" data-total="${PRODUCT_COVERS.length}">
        ${PRODUCT_COVERS.map((src, i) => `
          <div class="prod-slide ${i === 0 ? 'is-active' : ''}" data-index="${i}">
            <div class="prod-slide-img" style="background-image: url('${encodeURI(src)}')"></div>
          </div>
        `).join('')}

        <div class="prod-nav">
          <button class="prod-nav-btn prod-nav-prev" onclick="prodSliderNav(-1)" aria-label="Previous category">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <span class="prod-nav-slash" aria-hidden="true"></span>
          <button class="prod-nav-btn prod-nav-next" onclick="prodSliderNav(1)" aria-label="Next category">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      <div class="prod-slider-foot">
        <a href="#" onclick="handleSliderViewProducts(event); return false;" class="prod-view-btn">View Products</a>
      </div>
    </section>
  `;
}

window.handleSliderViewProducts = function(e) {
  if (e) e.preventDefault();
  const slider = document.getElementById('prod-slider');
  const currIdx = slider ? parseInt(slider.dataset.current || '0', 10) : 0;
  const targetCat = CATEGORIES[currIdx];
  if (targetCat) {
    navigateTo('category', targetCat.slug);
  } else {
    navigateTo('categories');
  }
};

// Wipe in the next cover. The outgoing slide stays put underneath until
// the incoming one has swept fully across it.
const PROD_INTERVAL = 4000;
let prodTimer = null;

function prodGo(dir) {
  const slider = document.getElementById('prod-slider');
  if (!slider || slider.dataset.animating === 'true') return;

  const slides = slider.querySelectorAll('.prod-slide');
  if (slides.length < 2) return;

  const total = slides.length;
  const from  = parseInt(slider.dataset.current, 10);
  const to    = (from + dir + total) % total;

  slider.dataset.animating = 'true';

  slides[from].classList.remove('is-active');
  slides[from].classList.add('is-leaving');

  const next = slides[to];
  next.classList.remove('is-leaving');
  void next.offsetWidth;
  next.classList.add('is-active');

  // The outgoing slide must stay put until the sweep has fully cleared it,
  // so take the wipe length from the stylesheet rather than duplicating it.
  const wipeMs = (parseFloat(getComputedStyle(next).transitionDuration) || 1.8) * 1000;

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    clearTimeout(fallback);
    next.removeEventListener('transitionend', finish);
    slides[from].classList.remove('is-leaving');
    slider.dataset.animating = 'false';
  };
  // Whichever lands first wins: the real transition, or the safety net for
  // when it never fires (background tab, re-render, reduced motion).
  const fallback = setTimeout(finish, wipeMs + 400);
  next.addEventListener('transitionend', finish);

  slider.dataset.current = to;
}

// Arrow clicks advance immediately and push the autoplay back to a full
// interval, so a manual move is never cut short by the timer.
window.prodSliderNav = function(dir) {
  prodGo(dir);
  prodSchedule();
};

// Pause only while the pointer is on the arrows themselves. The slider is
// full-bleed, so pausing on any hover over it stalls indefinitely whenever
// the cursor happens to rest on the image.
function inView(el) {
  if (!el) return false;
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * 0.75 && r.bottom > window.innerHeight * 0.25;
}

// True once `el` has been continuously on screen for `ms`, so a slider that
// has just scrolled into view is held still long enough to be seen.
function dwelled(el, ms) {
  if (!inView(el)) { delete el.dataset.seen; return false; }
  if (!el.dataset.seen) el.dataset.seen = String(Date.now());
  return Date.now() - Number(el.dataset.seen) >= ms;
}

function prodPaused() {
  const nav = document.querySelector('.prod-nav');
  return !!nav && nav.matches(':hover');
}

function prodSchedule(delay) {
  clearTimeout(prodTimer);
  prodTimer = setTimeout(() => {
    const slider = document.getElementById('prod-slider');
    if (!slider) { prodSchedule(); return; }
    if (!dwelled(slider, 4500) || prodPaused() || slider.dataset.animating === 'true') {
      prodSchedule(800);   // re-check soon rather than skipping a whole turn
      return;
    }
    prodGo(1);
    prodSchedule();
  }, delay || PROD_INTERVAL);
}

prodSchedule();


// 3. BRANDS WE OFFER - CONTINUOUS MOVING MARQUEE (PAUSE ON HOVER)
function renderBrandsSection() {
  return `
    <section class="brands-section">
      <div class="container" style="margin-bottom: var(--space-8); text-align: center;">
        <span class="section-eyebrow">Global Partnerships</span>
        <h2 class="section-title">Brands We Offer</h2>
      </div>

      <div class="brands-marquee-wrap">
        <div class="brands-marquee-track">
          ${BRAND_IMAGES.concat(BRAND_IMAGES).map((src) => {
            const fileName = decodeURIComponent(src.split('/').pop());
            const brandName = fileName.replace(/(_logo|-logo| logo|\.[^.]+)$/gi, '').replace(/[-_]/g, ' ');
            const isLarge = /makita|polybit|Gemini/i.test(fileName);
            return `
              <div class="brand-card-logo ${isLarge ? 'is-large-logo' : ''}" title="Authorised Brand Partner: ${brandName}">
                <img src="${src}" alt="${brandName} Logo" loading="lazy">
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

// 4. OUR FLEET SECTION
function renderFleetSection() {
  return `
    <section class="fleet-section">
      <div class="container">
        <div style="text-align: center; max-width: 700px; margin: 0 auto var(--space-8);">
          <h2 class="section-title">Our Fleet</h2>
          <p style="margin: 8px auto 0;">In-house heavy tipper truck fleet available for site material delivery and dump transport across Dubai & all UAE Emirates.</p>
        </div>

        <div class="fleet-grid">
          ${FLEET_TRUCKS.map((truck, idx) => `
            <div class="fleet-card">
              <div class="fleet-img-wrap">
                <img src="${truck.image}" alt="${truck.capacity}" class="fleet-img" loading="lazy" referrerpolicy="no-referrer"
                     onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='https://drive.google.com/thumbnail?id=${(truck.image.match(/\/d\/([^=/?]+)/) || [])[1] || ''}&sz=w1000';}else{this.src='https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80';}">
              </div>
              <div class="fleet-card-body" style="text-align: center; padding: 18px 20px;">
                <div style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 15px; font-weight: 800; color: var(--color-primary-dark); margin: 0;">
                  ${ICONS.truckSmall}
                  <span>${truck.capacity}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 5. PROJECTS — ARCHILOVERS EDITORIAL SLIDER
// White canvas, image inset right, project name overlapping its left edge.
// Transition: panels clear to white, then the new image reveals from the
// right (panel 4 -> 3 -> 2 -> 1) while the copy slides in from the left.
// Splits a trailing "(...)" off a project title so it sits on its own line
// instead of running across the photo, e.g. "Residential Building<br>(G+1P+5+R)".
function archTitleHTML(title) {
  const m = String(title).match(/^(.*?)\s*(\([^)]*\))\s*$/);
  const main = m ? m[1] : String(title);
  // Break the name onto two balanced lines so it never runs across the photo.
  const words = main.split(/\s+/);
  let best = main, bestMax = Infinity;
  for (let k = 1; k < words.length; k++) {
    const a = words.slice(0, k).join(' '), b = words.slice(k).join(' ');
    const mx = Math.max(a.length, b.length);
    if (mx < bestMax) { bestMax = mx; best = `${a}<br>${b}`; }
  }
  return m ? `${best}<span class="arch-title-sub">${m[2]}</span>` : best;
}

function renderProjectsSection() {
  const totalStr = String(PROJECTS_BUILD.length).padStart(2, '0');
  const first = PROJECTS_BUILD[0];

  return `
    <section class="arch-slider-section">
      <div class="arch-slider-header">
        <span class="section-eyebrow">Proven Track Record</span>
        <h2 class="section-title">Projects We Help Build</h2>
        <p class="arch-slider-sub">Key landmarks, commercial complexes, and infrastructure sites supplied with Pioneer building materials.</p>
      </div>

      <div class="arch-slider" id="arch-slider" data-current="0" data-total="${PROJECTS_BUILD.length}" data-copy="in">

        <div class="arch-gridlines"><span></span><span></span><span></span><span></span></div>

        <div class="arch-visual">
          ${PROJECTS_BUILD.map((proj, index) => `
            <div class="arch-slide ${index === 0 ? 'is-active' : ''}" data-index="${index}">
              <div class="arch-panels">
                ${[0, 1, 2, 3].map(col => `
                  <div class="arch-panel" data-col="${col}">
                    <div class="arch-panel-img" style="background-image: url('${proj.image}')"></div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="arch-copy" id="arch-copy">
          <h3 class="arch-slide-title" id="arch-title">${archTitleHTML(first.title)}</h3>
          <p class="arch-slide-sub" id="arch-sub">${first.location}<span class="arch-supplied">${first.supplied}</span></p>
          <div class="arch-actions">
            <span class="arch-slide-index" id="arch-index">01 / ${totalStr}</span>
          </div>
        </div>

        <div class="arch-nav">
          <button class="arch-nav-btn" onclick="archSliderNav(-1)" title="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button class="arch-nav-btn" onclick="archSliderNav(1)" title="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div class="arch-progress-bar"><div class="arch-progress-fill" id="arch-progress"></div></div>
      </div>
    </section>
  `;
}

// ---- Slider logic (vanilla JS, no library) ----
const ARCH_STAGGER = 90;    // ms between panels
const ARCH_CLEAR   = 420;   // ms for a panel to clear away
const ARCH_REVEAL  = 620;   // ms for a panel to reveal in
const ARCH_EASE    = 'cubic-bezier(0.76, 0, 0.24, 1)';

const ARCH_HIDDEN  = 'inset(0 0 0 100%)'; // collapsed against the right edge

window.archSliderNav = function(dir) {
  const slider = document.getElementById('arch-slider');
  if (!slider || slider.dataset.animating === 'true') return;

  const total   = parseInt(slider.dataset.total, 10);
  const current = parseInt(slider.dataset.current, 10);
  archTransition(slider, current, (current + dir + total) % total);
};

function archTransition(slider, fromIdx, toIdx) {
  slider.dataset.animating = 'true';

  const slides    = slider.querySelectorAll('.arch-slide');
  const fromSlide = slides[fromIdx];
  const toSlide   = slides[toIdx];
  const outPanels = Array.from(fromSlide.querySelectorAll('.arch-panel'));
  const inPanels  = Array.from(toSlide.querySelectorAll('.arch-panel'));

  // Phase 1 — clear the current image to white, left column first.
  slider.dataset.copy = 'out';
  outPanels.forEach((panel, i) => {
    setTimeout(() => {
      panel.style.transition = `clip-path ${ARCH_CLEAR}ms ${ARCH_EASE}`;
      panel.style.clipPath = ARCH_HIDDEN;
    }, i * ARCH_STAGGER);
  });

  const clearTime = ARCH_STAGGER * (outPanels.length - 1) + ARCH_CLEAR;

  // Phase 2 — reveal the new image from the right (panel 4 -> 3 -> 2 -> 1),
  // and bring the copy in from the right at the same moment.
  setTimeout(() => {
    fromSlide.classList.remove('is-active');
    archSetCopy(slider, toIdx);

    inPanels.forEach(panel => {
      panel.style.transition = 'none';
      panel.style.clipPath = ARCH_HIDDEN;
      panel.querySelector('.arch-panel-img').style.transform = 'translateX(9%)';
    });

    requestAnimationFrame(() => requestAnimationFrame(() => {
      toSlide.classList.add('is-active');
      slider.dataset.copy = 'in';

      // reverse order: rightmost panel first
      inPanels.slice().reverse().forEach((panel, i) => {
        setTimeout(() => {
          panel.style.transition = `clip-path ${ARCH_REVEAL}ms ${ARCH_EASE}`;
          const img = panel.querySelector('.arch-panel-img');
          img.style.transition = `transform ${ARCH_REVEAL + 160}ms ${ARCH_EASE}`;
          panel.style.clipPath = 'inset(0 0 0 0)';
          img.style.transform = 'translateX(0)';
        }, i * ARCH_STAGGER);
      });
    }));
  }, clearTime);

  // Phase 3 — reset the outgoing slide and commit state.
  setTimeout(() => {
    outPanels.forEach(panel => {
      panel.style.transition = 'none';
      panel.style.clipPath = 'inset(0 0 0 0)';
      panel.querySelector('.arch-panel-img').style.transform = 'translateX(0)';
    });

    slider.dataset.current = toIdx;
    slider.dataset.animating = 'false';
  }, clearTime + ARCH_STAGGER * (inPanels.length - 1) + ARCH_REVEAL + 220);
}

function archSetCopy(slider, idx) {
  const proj = PROJECTS_BUILD[idx];
  if (!proj) return;

  const total = String(PROJECTS_BUILD.length).padStart(2, '0');
  const title = document.getElementById('arch-title');
  const sub   = document.getElementById('arch-sub');
  const index = document.getElementById('arch-index');
  const prog  = document.getElementById('arch-progress');

  if (title) title.innerHTML   = archTitleHTML(proj.title);
  if (sub)   sub.innerHTML     = `${proj.location}<span class="arch-supplied">${proj.supplied}</span>`;
  if (index) index.textContent = `${String(idx + 1).padStart(2, '0')} / ${total}`;
  if (prog)  prog.style.width  = ((idx + 1) / PROJECTS_BUILD.length * 100) + '%';
}

// Reveal the first slide on load so it animates in like the rest.
function archInitFirstSlide() {
  const slider = document.getElementById('arch-slider');
  if (!slider || slider.dataset.inited === 'true' || !inView(slider)) return;
  slider.dataset.inited = 'true';

  const panels = Array.from(slider.querySelectorAll('.arch-slide.is-active .arch-panel'));
  panels.slice().reverse().forEach((panel, i) => {
    setTimeout(() => {
      panel.style.transition = `clip-path ${ARCH_REVEAL}ms ${ARCH_EASE}`;
      panel.style.clipPath = 'inset(0 0 0 0)';
    }, 120 + i * ARCH_STAGGER);
  });
}

// Reveal-on-mount watcher + autoplay
(function startArchSlider() {
  // The slider is re-rendered whenever the view changes, so keep watching
  // for a fresh, un-revealed instance rather than initialising once.
  setInterval(archInitFirstSlide, 300);

  // Pause only over the arrows, not the whole slide, and re-check shortly
  // after a skipped turn instead of waiting out another full interval.
  let archTimer = null;
  function archSchedule(delay) {
    clearTimeout(archTimer);
    archTimer = setTimeout(() => {
      const slider = document.getElementById('arch-slider');
      const nav = document.querySelector('.arch-nav');
      const paused = !!nav && nav.matches(':hover');

      if (!slider || slider.dataset.inited !== 'true' || !dwelled(slider, 8000) ||
          slider.dataset.animating === 'true' || paused) {
        archSchedule(800);
        return;
      }
      window.archSliderNav(1);
      archSchedule();
    }, delay || 5600);
  }
  archSchedule();

  // Timers are throttled hard in hidden tabs, so a slider can sit idle long
  // after the user comes back. Restart both clocks when the page is shown.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return;
    const arch = document.getElementById('arch-slider');
    if (arch) arch.dataset.animating = 'false';
    const prod = document.getElementById('prod-slider');
    if (prod) prod.dataset.animating = 'false';
    archSchedule(1200);
    prodSchedule(1200);
  });
})();


// 6. WHY CHOOSE US SECTION (VECTOR ICONS, NO EMOJIS)
function renderWhyChooseUsSection() {
  return `
    <section class="why-section">
      <div class="container">
        <div style="text-align: center; max-width: 700px; margin: 0 auto var(--space-8);">
          <h2 class="section-title">Why Choose Us</h2>
          <p style="margin: 8px auto 0;">Empowering contractor partners with certified materials, reliable transport, and competitive wholesale terms.</p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon-box">${ICONS.badgeCheck}</div>
            <h3 class="why-card-title">Certified Quality</h3>
            <p class="why-card-desc">All supplied building materials are factory-tested and certified to comply with strict UAE municipality standards and international specifications.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">${ICONS.truckFast}</div>
            <h3 class="why-card-title">In-House Logistics</h3>
            <p class="why-card-desc">In-house transport fleet including 3 ton, 5 ton, 20 ton tippers and more, ensuring rapid site delivery across Dubai & all UAE Emirates.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">${ICONS.tagPercent}</div>
            <h3 class="why-card-title">Competitive Rates</h3>
            <p class="why-card-desc">Direct factory pricing with transparent volume discounts for commercial contractors and project managers.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">${ICONS.headset}</div>
            <h3 class="why-card-title">24/7 Sales Support</h3>
            <p class="why-card-desc">Dedicated sales team providing instant WhatsApp quotes, BOQ estimates, and technical advice.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

// HOME VIEW RENDERER
function renderHomeView() {
  return `
    ${renderHeroSection()}
    ${renderWelcomeSection()}
    ${renderOurProductsSlider()}
    ${renderBrandsSection()}
    ${renderFleetSection()}
    ${renderProjectsSection()}
    ${renderWhyChooseUsSection()}
  `;
}

// PRODUCT CARD UTILITY
function renderProductCard(p) {
  return `
    <div class="product-card" id="prod-${p.id}">
      <div class="product-thumb-wrap">
        <img src="${p.image}" alt="${p.name}" class="product-thumb-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'">
      </div>
      <div class="product-card-body">
        <h4 class="product-card-title">${p.name}</h4>
        <p class="product-card-spec">${p.spec || '&nbsp;'}</p>
        <div class="product-card-footer">
          <button onclick="addToCartById('${p.id}')" class="product-add-btn">
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

// CATEGORY LANDING VIEW (/category/:slug)
function renderCategoryView() {
  if (!state.selectedCategory) return renderCategoriesView();
  const cat = state.selectedCategory;
  const catProducts = PRODUCTS.filter(p => p.catId === cat.id);

  return `
    <div class="category-detail-wrapper">
      <div class="container" style="padding: var(--space-8) var(--space-4) var(--space-16);">
        <!-- Breadcrumbs / Back Navigation -->
        <div class="category-nav-breadcrumb">
          <a href="#" onclick="navigateTo('categories'); return false;" class="cat-back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            <span>All Categories</span>
          </a>
        </div>

        <!-- Category Hero Section (Clean non-block layout) -->
        <div class="category-hero-section">
          <div class="category-hero-media">
            <img src="${cat.coverImage}" alt="${cat.name}" class="category-hero-img">
          </div>
          <div class="category-hero-header">
            <h1 class="category-hero-title">${cat.name}</h1>
            ${cat.tagline ? `<h2 class="category-hero-tagline">${cat.tagline}</h2>` : ''}
            <p class="category-hero-desc">${cat.description}</p>
          </div>
        </div>

        <!-- Products Section -->
        <div class="category-products-section">
          <div class="category-products-header" style="margin-bottom: var(--space-6);">
            <h2 class="section-title" style="font-size: 26px;">Available Products</h2>
          </div>
          <div class="product-grid">
            ${catProducts.length > 0 ? catProducts.map(p => renderProductCard(p)).join('') : `
              <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                <p style="color: var(--color-text-muted); margin-bottom: 16px;">No products currently listed in this category.</p>
                <button onclick="navigateTo('categories')" class="btn btn-primary">Browse All Categories</button>
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}

// CATEGORIES PAGE VIEW (/categories)
function renderCategoriesView() {
  return `
    <div class="categories-page-wrapper">
      <div class="container" style="padding: var(--space-12) 0 var(--space-16);">
        <div class="categories-hero-heading" style="text-align: center; max-width: 800px; margin: 0 auto var(--space-12);">
          <h1 class="section-title" style="font-size: clamp(32px, 4vw, 48px); margin-bottom: var(--space-3);">Product Categories</h1>
          <p style="font-size: var(--font-size-lg); color: var(--color-text-muted); line-height: 1.6;">
            Explore our comprehensive inventory across multiple materials for structural, industrial, and site construction.
          </p>
        </div>

        <div class="categories-showcase-grid">
          ${CATEGORIES.map(cat => `
            <div class="category-showcase-card">
              <div class="category-cover-wrap" onclick="navigateTo('category', '${cat.slug}')" role="button" tabindex="0" title="View ${cat.name}">
                <img src="${cat.coverImage}" alt="${cat.name}" class="category-cover-img" loading="lazy">
              </div>
              <div class="category-showcase-info">
                <div class="category-showcase-meta">
                  <h3 class="category-showcase-title">${cat.name}</h3>
                  <p class="category-showcase-desc">${cat.tagline || cat.description}</p>
                </div>
                <div class="category-showcase-action">
                  <a href="#" onclick="navigateTo('category', '${cat.slug}'); return false;" class="prod-view-btn">View Products</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// SHOPPING CART VIEW (/cart)
function renderCartView() {
  const count = state.cart.length;
  const field = (label, id, type, ph, required) => `
    <div class="ct-field">
      <label for="${id}">${label}${required ? ' <i>*</i>' : ''}</label>
      <input type="${type}" id="${id}" ${required ? 'required' : ''} placeholder="${ph}">
    </div>`;

  return `
    <div class="cart-page">
      <header class="ct-head">
        <span class="ct-eyebrow">Order Inquiry</span>
        <h1>Shopping Cart</h1>
        <p>Review your items, add sizes or quantities, and send your inquiry to our sales team. We will reply with pricing and delivery details.</p>
      </header>

      <div class="rfq-layout-grid">
        <section class="ct-card">
          <div class="ct-card-head">
            <h2>Cart Items <span class="ct-count">${count}</span></h2>
            ${count ? `<button type="button" class="ct-clear" onclick="clearCart()">Clear all</button>` : ''}
          </div>

          ${count === 0 ? `
            <div class="ct-empty">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l3 12h11l2-8H6"/></svg>
              <h3>Your cart is empty</h3>
              <p>Browse our product categories and add the materials you need.</p>
              <button type="button" onclick="navigateTo('categories')" class="ct-primary ct-inline">Browse Products</button>
            </div>
          ` : `
            <ul class="ct-items">
              ${state.cart.map(item => `
                <li class="ct-item">
                  <div class="ct-item-top">
                    <div>
                      <strong>${item.name}</strong>
                      ${item.spec ? `<span class="ct-spec">${item.spec.replace(/\n/g, ', ')}</span>` : ''}
                    </div>
                    <button type="button" class="ct-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove ${item.name}">Remove</button>
                  </div>
                  <input type="text" class="ct-note" value="${item.note || ''}" placeholder="Add size, quantity or specifications"
                    oninput="updateCartItemNote('${item.id}', this.value)">
                </li>
              `).join('')}
            </ul>
          `}
        </section>

        <section class="ct-card ct-submit-card">
          <h2>Send Your Order</h2>
          <p class="ct-sub">Your cart is sent directly to our sales team.</p>

          <form onsubmit="handleSendCartOrderEmail(event)">
            ${field('Name / Company', 'cart-client-name', 'text', 'e.g. Al Habtoor Contracting', true)}
            ${field('Mobile / WhatsApp', 'cart-client-phone', 'tel', '+971 50 123 4567', true)}
            <div class="ct-field">
              <label for="cart-notes">Delivery Location / Project Notes</label>
              <textarea id="cart-notes" rows="3" placeholder="Site address, delivery date, specifications"></textarea>
            </div>

            <button type="button" onclick="handleSendCartOrderWhatsApp(event)" class="ct-wa">
              ${ICONS.whatsapp}
              <span>Send via WhatsApp</span>
            </button>
            <div class="ct-or"><span>or</span></div>
            <button type="submit" id="send-cart-order-btn" class="ct-primary">
              <span>Submit Cart Order</span>
            </button>
          </form>
        </section>
      </div>
    </div>
  `;
}

// ABOUT VIEW (/about)
// Each section is a designed 1600x900 artboard: the background image carries the
// artwork and the copy is live text positioned in artboard units (--x/--y/--w),
// so it scales with the width. Elements slide in from the left when scrolled to.
function abAt(x, y, w, cls, html, d = 0, extra = '') {
  return `<div class="ab-abs ${cls}" style="--x:${x};--y:${y};${w ? `--w:${w};` : ''}--d:${d}ms;${extra}">${html}</div>`;
}

const SUPPLY = [
  ['Sand, Aggregate & Cement', 'The foundation for every build.'],
  ['Building Materials', 'Strong materials. Lasting results.'],
  ['Safety Items', 'Work safer. Build smarter.'],
  ['Fasteners', 'Small parts. Big strength.'],
  ['Hand Tools', 'Reliable tools for every task.'],
  ['Power Tools', 'More power. Greater productivity.'],
  ['Timber & Plywood', 'Build with confidence.'],
  ['Electrical, Plumbing & Sanitary', 'Better systems. Stronger spaces.'],
  ['Water Tanks, Coolers & Filters', 'Clean water. A healthier tomorrow.'],
  ['Concrete Products', 'Built for strength and durability.'],
  ['Packing, Painting, Abrasives & Adhesives', 'The finishing touch for every project.']
];
const WHY = [
  ['A Wide Product Range', 'Access thousands of products across multiple building materials categories in one place.'],
  ['16+ Years of Experience', 'Industry experience that helps us understand customer needs and construction requirements.'],
  ['Customer-Focused Service', 'We aim to build lasting relationships through clear communication and attentive service.'],
  ['Supply Support', 'Helping customers source the materials they need to keep projects moving.'],
  ['Quality-Conscious Sourcing', 'We recognise the importance of dependable materials and work to meet our customers’ requirements.'],
  ['Built Around Your Needs', 'Serving a variety of customers, from individual buyers to contractors and businesses.']
];
const SERVE = [
  ['Contractors & Construction Companies', 'Dependable materials to keep projects supplied and moving on schedule.'],
  ['Builders & Developers', 'A broad product range to support projects from planning through completion.'],
  ['Trade Professionals', 'Practical tools, fittings and supplies for the work you do every day.'],
  ['Business & Individual Buyers', 'Reliable access to essential building materials for businesses and personal projects.']
];


function renderAboutDesktop() {
  const SUPPLY_X = [205, 594, 980, 1355];
  const SUPPLY_Y = [284, 472, 659];

  const WHY_X = [193, 580, 984];
  const WHY_W = [205, 228, 215];
  const WHY_Y = [292, 510];

  return `
    <div class="about-page">

      <!-- 1. ABOUT US (hero) -->
      <section class="ab-section ab-hero" data-ab>
        <div class="ab-stage" style="background-image: linear-gradient(90deg, rgba(7,26,46,0.9) 0%, rgba(7,26,46,0.7) 42%, rgba(7,26,46,0.05) 72%), url('/cover.webp');">
          ${abAt(73, 52, 0, 'ab-eyebrow ab-light', '<span>About Us</span><i></i>', 0)}
          ${abAt(73, 96, 800, 'ab-h1 ab-light', 'Building Strong Foundations.<br><em>Delivering with Confidence.</em>', 120)}
          ${abAt(73, 232, 640, 'ab-body ab-light', '<p>At Pioneer Building Materials Trading LLC, we believe every successful project begins with the right materials and a reliable supply partner.</p><p>With over 16 years of experience in the building materials industry, we have built our business around quality products, dependable service and long-term customer relationships. From essential construction materials such as sand, cement and aggregates to tools, hardware, plumbing, electrical supplies and more, we bring a wide range of products together to support projects of every scale.</p><p>Our goal is simple: to make sourcing building materials easier, more efficient and more reliable for contractors, builders, businesses and individuals.</p>', 260)}
          ${abAt(73, 482, 0, 'ab-dash', '', 420)}
        </div>
      </section>

      <!-- 2. WHO WE ARE -->
      <section class="ab-section" data-ab>
        <div class="ab-stage" style="background-image:url('/about/who-we-are.webp')">
          <div class="ab-watermark" style="--x:-8;--y:735">PIONEER</div>
          ${abAt(78, 66, 0, 'ab-eyebrow', '<span>Who We Are</span><i></i>', 0)}
          ${abAt(78, 96, 640, 'ab-h1', 'Supporting Every<br>Step of Your Build.', 120)}
          ${abAt(78, 268, 640, 'ab-body', '<p>Pioneer Building Materials Trading LLC is a building materials supplier dedicated to supporting the people and businesses that build, develop and improve our surroundings.</p><p>Over the years, we’ve developed a broad understanding of the demands of the construction industry. We understand that every project comes with its own requirements, timelines and budgets, and that having access to the right materials at the right time can make a significant difference.</p><p>That is why we focus on offering a diverse selection of construction materials and related products through one reliable source. Whether a customer is sourcing bulk raw materials for a construction site or looking for specific tools, fittings or hardware, we aim to simplify the purchasing process and provide a dependable experience from enquiry to delivery.</p><p>We see ourselves as more than a supplier. We aim to be a long-term partner our customers can rely on as their projects and businesses grow.</p>', 260)}
        </div>
      </section>

      <!-- 3. WHAT WE SUPPLY -->
      <section class="ab-section" data-ab>
        <div class="ab-stage" style="background-image:url('/about/what-we-supply.webp')">
          <div class="ab-watermark" style="--x:10;--y:790">PIONEER</div>
          ${abAt(73, 44, 0, 'ab-eyebrow ab-noline', '<span>What We Supply</span>', 0)}
          ${abAt(73, 78, 700, 'ab-h1 ab-h1-sm ab-h1-xs', 'Everything You Need.<br>Under One Roof.', 120)}
          ${abAt(73, 188, 760, 'ab-lead ab-lead-sm', 'From raw materials to essential tools and building supplies, we provide a wide range of products to support your construction and maintenance needs.', 240)}
          ${abAt(1295, 84, 280, 'ab-tagline', 'Quality Products.<br>Reliable Supply.<br>For Every Project.', 300)}
          ${SUPPLY.map((it, i) => abAt(
            SUPPLY_X[i % 4], SUPPLY_Y[Math.floor(i / 4)], 195, 'ab-supply',
            `<b>${String(i + 1).padStart(2, '0')}</b><h4>${it[0]}</h4><u></u><p>${it[1]}</p>`,
            360 + i * 90)).join('')}
        </div>
      </section>

      <!-- 4. WHY CHOOSE PIONEER -->
      <section class="ab-section" data-ab>
        <div class="ab-stage" style="background-image:url('/about/why-choose-us.webp')">
          ${abAt(75, 46, 0, 'ab-eyebrow ab-noline', '<span>Why Choose Pioneer</span>', 0)}
          ${abAt(75, 70, 900, 'ab-h1 ab-h1-sm', 'More Than a Supplier.<br>A Partner You Can Rely On.', 120)}
          ${abAt(75, 190, 640, 'ab-lead', 'We’re committed to providing quality products, dependable service and long-term support to help you build with confidence.', 240)}
          ${WHY.map((it, i) => abAt(
            WHY_X[i % 3], WHY_Y[Math.floor(i / 3)], WHY_W[i % 3], 'ab-why',
            `<h4>${it[0]}</h4><p>${it[1]}</p>`, 360 + i * 110, '--h:110;')).join('')}
          ${abAt(117, 762, 0, 'ab-band-name', 'Pioneer Building Materials Trading LLC', 700)}
          ${abAt(117, 790, 0, 'ab-band-sub', 'Quality Materials &nbsp;/&nbsp; Reliable Supply &nbsp;/&nbsp; Lasting Partnerships', 780)}
          ${abAt(1290, 760, 0, 'ab-script', 'Building<br>Better Together.', 860)}
        </div>
      </section>

      <!-- 5. OUR COMMITMENT -->
      <section class="ab-section" data-ab>
        <div class="ab-stage" style="background-image:url('/about/our-commitment.webp')">
          ${abAt(76, 56, 0, 'ab-eyebrow ab-noline', '<span>Our Commitment</span>', 0)}
          ${abAt(222, 122, 0, 'ab-titleblock', '<small>Our</small><strong>Commitment</strong>', 120)}
          ${abAt(76, 252, 650, 'ab-body ab-body-md', '<p>At Pioneer, we understand that construction projects depend on more than just materials. They depend on planning, coordination, reliable communication and suppliers who understand the importance of getting things right.</p><p>We strive to make every interaction straightforward, from understanding product requirements and responding to enquiries to helping customers identify suitable products for their needs.</p><p>We value the trust our customers place in us and believe that lasting business relationships are built through consistency, transparency and a genuine commitment to service.</p><p>As the construction industry continues to evolve, we remain focused on expanding our range, improving the customer experience and finding better ways to serve the people who depend on us.</p>', 260)}
        </div>
      </section>

      <!-- 6. OUR MISSION & VISION -->
      <section class="ab-section" data-ab>
        <div class="ab-stage" style="background-image:url('/about/mission-vision.webp')">
          ${abAt(68, 44, 0, 'ab-eyebrow ab-noline', '<span>Our Mission &amp; Vision</span>', 0)}
          ${abAt(195, 144, 0, 'ab-titleblock', '<small>Our</small><strong>Mission</strong>', 120)}
          ${abAt(70, 312, 700, 'ab-body ab-body-md ab-body-sm', '<p>Our mission is to provide high-quality building materials and related products that meet the evolving needs of our customers. We are committed to delivering reliable service, maintaining consistent supply, and making the purchasing process simple and efficient. By focusing on quality, accessibility and customer satisfaction, we aim to support the people and businesses that build a better tomorrow.</p>', 260)}
          ${abAt(195, 482, 0, 'ab-titleblock', '<small>Our</small><strong>Vision</strong>', 380)}
          ${abAt(70, 650, 680, 'ab-body ab-body-md ab-body-sm', '<p>Our vision is to be a leading building materials supplier in the region, known for our reliability, product range and commitment to long-term partnerships. We aim to grow alongside our customers, expand our offerings, and contribute to stronger, safer and more sustainable communities through the materials and solutions we provide.</p>', 520)}
        </div>
      </section>

      <!-- 7. WHO WE SERVE -->
      <section class="ab-section" data-ab>
        <div class="ab-stage" style="background-image:url('/about/who-we-serve.webp')">
          ${abAt(0, 26, 1600, 'ab-eyebrow ab-center ab-noline', '<span>Pioneer Building Materials Trading LLC</span>', 0)}
          ${abAt(0, 72, 1600, 'ab-h1 ab-center ab-serve-title', 'WHO WE <em>SERVE</em>', 120)}
          ${SERVE.map((it, i) => abAt(
            67 + (i % 2) * 762, 408 + Math.floor(i / 2) * 347, 690, 'ab-serve',
            `<h4>${it[0]}</h4><p>${it[1]}</p>`, 300 + i * 140)).join('')}
        </div>
      </section>

      <div class="ab-contact-strip" data-ab-self>
        <div>
          <strong>${COMPANY_INFO.name}</strong>
          <span>${COMPANY_INFO.address}</span>
        </div>
        <div class="ab-contact-links">
          <a href="tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}">${COMPANY_INFO.phones[0]}</a>
          <a href="tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}">${COMPANY_INFO.phones[1]}</a>
          ${COMPANY_INFO.emails.map(e => `<a href="mailto:${e}">${e}</a>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ---- Mobile About page -----------------------------------------------------
// Same idea as desktop, but on 941x1672 portrait artboards (units are px of that image).
const ABOUT_MOBILE_QUERY = '(max-width: 860px)';
const isAboutMobile = () => window.matchMedia(ABOUT_MOBILE_QUERY).matches;

// Copy placed on a portrait artboard. fs = font size in artboard units, min = smallest px on screen.
function mAt(x, y, w, cls, html, fs, d = 0, extra = '', min = 5) {
  const size = fs ? `font-size:max(${min}px,calc(${fs}*var(--u)));` : '';
  return abAt(x, y, w, cls, html, d, size + extra);
}

function renderAboutMobile() {
  const SUPPLY_M_X = [229, 667];
  const SUPPLY_M_Y = [466, 658, 841, 1026, 1206, 1381];
  const WHY_M_X = [76, 526];
  const WHY_M_W = [372, 385];
  const WHY_M_Y = [806, 1056, 1310];
  const SERVE_M_Y = [452, 785, 1117, 1435];

  return `
    <div class="about-page about-mobile">

      <!-- 1. ABOUT US (hero) -->
      <section class="ab-section ab-hero ab-hero-m" data-ab>
        <div class="ab-stage ab-m-hero" style="background-image: linear-gradient(180deg, rgba(7,26,46,0.92) 0%, rgba(7,26,46,0.78) 50%, rgba(7,26,46,0.35) 100%), url('/cover.webp');">
          <div class="ab-eyebrow ab-light ab-solo"><span>About Us</span><i></i></div>
          <h2 class="ab-h1 ab-light">Building Strong Foundations.<br><em>Delivering with Confidence.</em></h2>
          <div class="ab-body ab-light">
            <p>At Pioneer Building Materials Trading LLC, we believe every successful project begins with the right materials and a reliable supply partner.</p>
            <p>With over 16 years of experience in the building materials industry, we have built our business around quality products, dependable service and long-term customer relationships. From essential construction materials such as sand, cement and aggregates to tools, hardware, plumbing, electrical supplies and more, we bring a wide range of products together to support projects of every scale.</p>
            <p>Our goal is simple: to make sourcing building materials easier, more efficient and more reliable for contractors, builders, businesses and individuals.</p>
          </div>
        </div>
      </section>

      <!-- 2. WHO WE ARE -->
      <section class="ab-section" data-ab>
        <div class="ab-stage ab-m" style="background-image:url('/about/m-who-we-are.webp')">
          <div class="ab-watermark" style="--x:12;--y:1440;font-size:calc(205*var(--u))">PIONEER</div>
          ${mAt(50, 116, 0, 'ab-eyebrow', '<span>Who We Are</span><i></i>', 26, 0)}
          ${mAt(50, 168, 640, 'ab-h1', 'Supporting<br>Every Step of<br>Your Build.', 67, 120, 'line-height:1.17;', 5)}
          ${mAt(51, 432, 400, 'ab-body', '<p>Pioneer Building Materials Trading LLC is a building materials supplier dedicated to supporting the people and businesses that build, develop and improve our surroundings.</p><p>Over the years, we’ve developed a broad understanding of the demands of the construction industry. We understand that every project comes with its own requirements, timelines and budgets, and that having access to the right materials at the right time can make a significant difference.</p><p>That is why we focus on offering a diverse selection of construction materials and related products through one reliable source. Whether a customer is sourcing bulk raw materials for a construction site or looking for specific tools, fittings or hardware, we aim to simplify the purchasing process and provide dependable experience from enquiry to delivery.</p><p>We see ourselves as more than a supplier. We aim to be a long-term partner our customers can rely on as their projects and businesses grow.</p>', 21.4, 260, 'line-height:1.37;')}
        </div>
      </section>

      <!-- 3. WHAT WE SUPPLY -->
      <section class="ab-section" data-ab>
        <div class="ab-stage ab-m" style="background-image:url('/about/m-what-we-supply.webp')">
          ${mAt(46, 90, 0, 'ab-eyebrow ab-noline', '<span>What We Supply</span>', 21, 0)}
          ${mAt(46, 138, 700, 'ab-h1', 'Everything You Need.<br>Under One Roof.', 52.7, 120, 'line-height:1.2;font-weight:700;', 5)}
          ${mAt(46, 280, 480, 'ab-lead', 'From raw materials to essential tools and building supplies, we provide a wide range of products to support your construction and maintenance needs.', 21, 240, 'line-height:1.36;')}
          ${mAt(46, 411, 0, 'ab-dash', '', 0, 320)}
          ${SUPPLY.map((it, i) => {
            const col = i === 10 ? 0 : i % 2, row = Math.floor(i / 2);
            const x = i === 10 ? 252 : SUPPLY_M_X[col];
            const w = i === 10 ? 600 : (col === 0 ? 232 : 235);
            return mAt(x, SUPPLY_M_Y[row], w, 'ab-supply ab-supply-m', `<b>${String(i + 1).padStart(2, '0')}</b><h4>${it[0]}</h4><u></u><p>${it[1]}</p>`, 0, 360 + i * 80);
          }).join('')}
          <div class="ab-vbar" style="--x:37;--y:1550"></div>
          ${mAt(58, 1561, 0, 'ab-tagline ab-tag-m', 'Quality Products. Reliable Supply. For Every Project.', 16, 1100, '', 5)}
          ${mAt(700, 1522, 0, 'ab-script', 'Building<br>Better Together.', 32, 1200, '', 5)}
        </div>
      </section>

      <!-- 4. WHY CHOOSE PIONEER -->
      <section class="ab-section" data-ab>
        <div class="ab-stage ab-m" style="background-image:url('/about/m-why-choose-us.webp')">
          ${mAt(54, 102, 0, 'ab-eyebrow ab-noline', '<span>Why Choose Pioneer</span>', 18.7, 0)}
          ${mAt(54, 150, 0, 'ab-dash', '', 0, 60)}
          ${mAt(52, 178, 560, 'ab-h1', 'More Than<br>a Supplier.<br>A Partner<br>You Can Rely On.', 58.9, 120, 'line-height:1.19;font-weight:600;', 5)}
          ${mAt(54, 488, 560, 'ab-lead', 'We’re committed to providing<br>quality products, dependable service<br>and long-term support to help you<br>build with confidence.', 23.2, 240, 'line-height:1.47;')}
          ${mAt(54, 641, 0, 'ab-dash', '', 0, 300)}
          ${WHY.map((it, i) => mAt(WHY_M_X[i % 2], WHY_M_Y[Math.floor(i / 2)], WHY_M_W[i % 2], 'ab-why ab-why-m',
            `<h4 style="font-size:max(5px,calc(24.9*var(--u)))">${it[0]}</h4><p style="font-size:max(5px,calc(19.3*var(--u)));line-height:1.42">${it[1]}</p>`, 0, 380 + i * 110)).join('')}
          ${mAt(64, 1508, 0, 'ab-band-name', 'Pioneer Building Materials Trading LLC', 17.5, 800, '', 5)}
          ${mAt(64, 1540, 0, 'ab-band-sub', 'Quality Materials &nbsp;/&nbsp; Reliable Supply &nbsp;/&nbsp; Lasting Partnerships', 13.5, 880, '', 5)}
          ${mAt(712, 1480, 0, 'ab-script', 'Building<br>Better Together.', 32, 960, '', 5)}
        </div>
      </section>

      <!-- 5. OUR COMMITMENT -->
      <section class="ab-section" data-ab>
        <div class="ab-stage ab-m" style="background-image:url('/about/m-our-commitment.webp')">
          ${mAt(64, 92, 0, 'ab-eyebrow ab-noline', '<span>Our Commitment</span>', 22, 0)}
          ${mAt(235, 148, 0, 'ab-titleblock ab-title-m', '<small style="font-size:max(5px,calc(31*var(--u)))">Our</small><strong style="font-size:calc(73.2*var(--u))">Commitment</strong>', 0, 120)}
          ${mAt(64, 290, 800, 'ab-body ab-body-md ab-pm32', '<p>At Pioneer, we understand that construction projects depend on more than just materials. They depend on planning, coordination, reliable communication and suppliers who understand the importance of getting things right.</p><p>We strive to make every interaction straightforward, from understanding product requirements and responding to enquiries to helping customers identify suitable products for their needs.</p><p>We value the trust our customers place in us and believe that lasting business relationships are built through consistency, transparency and a genuine commitment to service.</p><p>As the construction industry continues to evolve, we remain focused on expanding our range, improving the customer experience and finding better ways to serve the people who depend on us.</p>', 22.8, 260, 'line-height:1.38;')}
          ${mAt(64, 826, 0, 'ab-dash', '', 0, 700)}
        </div>
      </section>

      <!-- 6. OUR MISSION & VISION -->
      <section class="ab-section" data-ab>
        <div class="ab-stage ab-m" style="background-image:url('/about/m-mission-vision.webp')">
          ${mAt(132, 62, 0, 'ab-eyebrow ab-noline', '<span>Our Mission &amp; Vision</span>', 17.5, 0)}
          ${mAt(266, 150, 0, 'ab-titleblock ab-title-m', '<small style="font-size:max(5px,calc(26*var(--u)))">Our</small><strong style="font-size:calc(69*var(--u))">Mission</strong>', 0, 120)}
          ${mAt(136, 268, 745, 'ab-body ab-body-md ab-pm32', '<p>Our mission is to provide high-quality building materials and related products that meet the evolving needs of our customers. We are committed to delivering reliable service, maintaining consistent supply, and making the purchasing process simple and efficient. By focusing on quality, accessibility and customer satisfaction, we aim to support the people and businesses that build a better tomorrow.</p>', 20.7, 260, 'line-height:1.47;')}
          ${mAt(278, 540, 0, 'ab-titleblock ab-title-m', '<small style="font-size:max(5px,calc(26*var(--u)))">Our</small><strong style="font-size:calc(69*var(--u))">Vision</strong>', 0, 380)}
          ${mAt(136, 650, 690, 'ab-body ab-body-md ab-pm32', '<p>Our vision is to be a leading building materials supplier in the region, known for our reliability, product range and commitment to long-term partnerships. We aim to grow alongside our customers, expand our offerings, and contribute to stronger, safer and more sustainable communities through the materials and solutions we provide.</p>', 20.7, 520, 'line-height:1.47;')}
        </div>
      </section>

      <!-- 7. WHO WE SERVE -->
      <section class="ab-section" data-ab>
        <div class="ab-stage ab-m" style="background-image:url('/about/m-who-we-serve.webp')">
          ${mAt(0, 56, 941, 'ab-eyebrow ab-center ab-noline', '<span>Pioneer Building Materials Trading LLC</span>', 19, 0)}
          ${mAt(0, 112, 941, 'ab-h1 ab-center ab-serve-title', 'WHO WE <em>SERVE</em>', 74.2, 120, 'font-weight:800;', 5)}
          ${SERVE.map((it, i) => mAt(66, SERVE_M_Y[i], 810, 'ab-serve ab-serve-m',
            `<h4 style="font-size:max(5px,calc(22.5*var(--u)))">${it[0]}</h4><u></u><p style="font-size:max(5px,calc(16.8*var(--u)))">${it[1]}</p>`, 0, 300 + i * 140)).join('')}
        </div>
      </section>

      <div class="ab-contact-strip" data-ab-self>
        <div>
          <strong>${COMPANY_INFO.name}</strong>
          <span>${COMPANY_INFO.address}</span>
        </div>
        <div class="ab-contact-links">
          <a href="tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}">${COMPANY_INFO.phones[0]}</a>
          <a href="tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}">${COMPANY_INFO.phones[1]}</a>
          ${COMPANY_INFO.emails.map(e => `<a href="mailto:${e}">${e}</a>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderAboutView() {
  return isAboutMobile() ? renderAboutMobile() : renderAboutDesktop();
}

// Switch between the desktop and phone layouts when the window crosses the breakpoint.
window.matchMedia(ABOUT_MOBILE_QUERY).addEventListener('change', () => {
  if (state.currentView === 'about') renderApp();
});


// About page: split every text block into its visual lines, then slide each
// line in from the left, one after another, as it scrolls into view.
const AB_TEXT = 'h1,h2.ab-h1,.ab-h1,.ab-body p,.ab-lead,.ab-tagline,.ab-titleblock small,.ab-titleblock strong,' +
  '.ab-supply b,.ab-supply h4,.ab-supply p,.ab-why h4,.ab-why p,.ab-serve h4,.ab-serve p,' +
  '.ab-band-name,.ab-band-sub,.ab-script,.ab-contact-strip > div:first-child > strong,.ab-contact-strip > div:first-child > span';

function abSplitBlock(el) {
  if (el.dataset.abSrc === undefined) el.dataset.abSrc = el.innerHTML;
  else el.innerHTML = el.dataset.abSrc;

  const toks = [];
  const walk = (node, em) => {
    node.childNodes.forEach(n => {
      if (n.nodeType === 3) {
        n.textContent.split(/\s+/).filter(Boolean).forEach(w => toks.push({ w, em }));
      } else if (n.nodeName === 'BR') {
        toks.push({ br: true });
      } else {
        walk(n, em || n.nodeName === 'EM');
      }
    });
  };
  walk(el, false);

  el.innerHTML = toks.map(t => t.br ? '<br>' :
    `<span class="aw${t.em ? ' em' : ''}">${t.w}</span>`).join(' ');

  const lines = [];
  let lastTop = null;
  el.querySelectorAll('.aw').forEach(sp => {
    const top = sp.offsetTop;
    if (lastTop === null || Math.abs(top - lastTop) > 4) { lines.push([]); lastTop = top; }
    lines[lines.length - 1].push(sp);
  });

  el.innerHTML = lines.map(l =>
    `<span class="ab-line"><span class="ab-line-text">${l.map(sp =>
      sp.classList.contains('em') ? `<span class="em">${sp.textContent}</span>` : sp.textContent).join(' ')}</span></span>`
  ).join('');
}

function initAboutReveal() {
  const page = document.querySelector('.about-page');
  if (!page) return;

  const build = () => {
    const seen = new Set(
      Array.from(page.querySelectorAll('.ab-line.is-in')).map(l => l.closest('.ab-abs, .ab-contact-strip'))
    );
    page.querySelectorAll(AB_TEXT).forEach(abSplitBlock);

    // Pieces with no text to split (eyebrows, dashes) slide as a single line.
    page.querySelectorAll('.ab-abs, .ab-solo').forEach(abs => {
      if (!abs.querySelector('.ab-line') && !abs.classList.contains('ab-line')) abs.classList.add('ab-line');
    });
    // Anything already revealed before a re-split stays revealed.
    page.querySelectorAll('.ab-abs, .ab-contact-strip').forEach(box => {
      if (!seen.has(box)) return;
      box.classList.contains('ab-line') && box.classList.add('is-in');
      box.querySelectorAll('.ab-line').forEach(l => { l.style.transitionDelay = '0ms'; l.classList.add('is-in'); });
    });
    page.classList.add('ab-js');
    check();
  };

  let ticking = false;
  function check() {
    ticking = false;
    // Hold the reveal while the page-transition loader still covers the page.
    const loader = document.getElementById('page-loader');
    if (loader && loader.classList.contains('show')) return;
    const limit = window.innerHeight * 0.9;
    const pending = Array.from(page.querySelectorAll('.ab-line:not(.is-in)'))
      .filter(l => l.getBoundingClientRect().top < limit);
    pending.forEach((l, i) => {
      l.style.setProperty('--ld', Math.min(i * 90, 900) + 'ms');
      l.classList.add('is-in');
    });
  }
  const queue = () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } };

  if (window._abHandlers) window._abHandlers.forEach(([ev, fn]) => window.removeEventListener(ev, fn));
  const onResize = (() => { let t; return () => { clearTimeout(t); t = setTimeout(build, 200); }; })();
  window._abHandlers = [['scroll', queue], ['wheel', queue], ['touchmove', queue], ['mousemove', queue], ['resize', onResize]];
  window._abHandlers.forEach(([ev, fn]) => window.addEventListener(ev, fn, { passive: true }));

  const ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  ready.then(() => { if (document.querySelector('.about-page') === page) build(); });
}

// CONTACT VIEW (/contact)
const MAP_SHORT_LINK = 'https://maps.app.goo.gl/Jo5euEXq4H44oHDq8';
const MAP_EMBED_SRC = 'https://www.google.com/maps?q=' + encodeURIComponent('Pioneer Building Materials Trading LLC, Dubai, UAE') + '&output=embed';


const CONTACT_CLOCK = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>`;
const CONTACT_PIN = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;

function renderContactView() {
  const tel = (n) => n.replace(/\s+/g, '');
  const field = (label, id, type = 'text', ph = '', required = false) => `
    <div class="cx-field">
      <label for="${id}">${label}${required ? ' <i>*</i>' : ''}</label>
      <input type="${type}" id="${id}" placeholder="${ph || label}" ${required ? 'required' : ''}>
    </div>`;

  return `
    <div class="contact-page">
      <section class="cx-top">
        <div class="cx-info">
          <span class="cx-eyebrow">Get in touch</span>
          <h1 class="cx-title">Pioneer BMT Office</h1>
          <p class="cx-lead">Get in touch with our sales team in Dubai for instant product quotes and site delivery options.</p>

          <div class="cx-card">
            <span class="cx-ico">${CONTACT_PIN}</span>
            <div><h4>Head Office</h4><p>${COMPANY_INFO.name}<br>${COMPANY_INFO.address}</p></div>
          </div>
          <div class="cx-card">
            <span class="cx-ico">${ICONS.mail}</span>
            <div><h4>Email Us</h4><p>${COMPANY_INFO.emails.map(e => `<a href="mailto:${e}">${e}</a>`).join('<br>')}</p></div>
          </div>
          <div class="cx-card">
            <span class="cx-ico">${ICONS.phone}</span>
            <div><h4>Let's Talk</h4><p>${COMPANY_INFO.phones.map(n => `<a href="tel:${tel(n)}">${n}</a>`).join('<br>')}</p></div>
          </div>
          <div class="cx-card">
            <span class="cx-ico">${CONTACT_CLOCK}</span>
            <div><h4>Working Hours</h4>
              <p><b class="cx-lbl">Office Timings</b><br>${COMPANY_INFO.workingHours}<br>${COMPANY_INFO.workingHoursNote}</p>
              <p class="cx-gap"><b class="cx-lbl">Delivery Timings</b><br>${COMPANY_INFO.deliveryHours}</p>
            </div>
          </div>

          <a href="${generateWhatsAppCartUrl()}" target="_blank" rel="noopener" class="btn btn-whatsapp cx-wa">
            ${ICONS.whatsapp} Chat on WhatsApp
          </a>
        </div>

        <div class="cx-form-card">
          <h2>Send Us a Message / Inquiry</h2>
          <form onsubmit="handleContactInquiry(event)">
            <div class="cx-row">
              ${field('Name', 'cx-name', 'text', 'Your name', true)}
              ${field('Company', 'cx-company', 'text', 'Company (optional)')}
            </div>
            <div class="cx-row">
              ${field('Phone', 'cx-phone', 'tel', '+971 50 123 4567', true)}
              ${field('Email', 'cx-email', 'email', 'you@example.com')}
            </div>
            ${field('Subject', 'cx-subject', 'text', 'What is this about?')}
            <div class="cx-field">
              <label for="cx-message">Message / Materials Needed <i>*</i></label>
              <textarea id="cx-message" rows="5" required placeholder="Tell us the materials, quantities and delivery location"></textarea>
            </div>
            <button type="submit" class="cx-submit">Send Message</button>
          </form>
        </div>
      </section>

      <section class="cx-map">
        <div class="cx-map-head">
          <div>
            <span class="cx-eyebrow">Find us</span>
            <h2>Visit Our Office &amp; Get Directions</h2>
          </div>
          <a href="${MAP_SHORT_LINK}" target="_blank" rel="noopener" class="cx-dir-btn">Get Directions →</a>
        </div>
        <div class="cx-map-frame">
          <iframe src="${MAP_EMBED_SRC}" title="Pioneer Building Materials Trading LLC on Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </section>

      <section class="cx-faq">
        <div class="faq-intro">
          <h2>Frequently Asked <span>Questions</span></h2>
          <p>Find answers to common questions about our products, enquiries, availability, and services. This section helps you quickly get the information you need before contacting our team. You can also learn more about product specifications, ordering process, and delivery details. If you still need assistance, our team is always ready to help with your requirements.</p>
        </div>
        <div class="faq-list">
          ${FAQS.map((f, i) => `
            <div class="faq-item" data-faq="${i}">
              <button type="button" class="faq-q" aria-expanded="false" onclick="toggleFaq(${i})">
                <span>${f[0]}</span>
                <span class="faq-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
              </button>
              <div class="faq-a"><div><p>${f[1]}</p></div></div>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

// FAQ accordion: opening one question closes whichever was open.
window.toggleFaq = function(i) {
  document.querySelectorAll('.faq-item').forEach(item => {
    const open = Number(item.dataset.faq) === i && !item.classList.contains('open');
    item.classList.toggle('open', open);
    item.querySelector('.faq-q').setAttribute('aria-expanded', String(open));
  });
};

// SITE FOOTER (PRIMARY MAIN THEME COLOR BACKGROUND)
function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="brand-logo" style="margin-bottom: var(--space-4);">
              <img src="/logo-removebg-preview.webp" alt="Pioneer Logo" class="brand-icon-img">
              <div class="brand-text">
                <span class="brand-title" style="color:#1E293B;">PIONEER</span>
                <span class="brand-subtitle" style="color:#1E293B;">Building Materials Trading LLC</span>
              </div>
            </div>
            <p style="font-size: 14px; color: #1E293B; margin-bottom: var(--space-4); font-weight: 500;">
              Quality building materials and safety equipment for contractors and developers across Dubai and the UAE, delivered on time and at wholesale prices.
            </p>
          </div>

          <div>
            <h4 class="footer-col-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#" onclick="navigateTo('home'); return false;" class="footer-link">Home</a></li>
              <li><a href="#" onclick="navigateTo('categories'); return false;" class="footer-link">Products</a></li>
              <li><a href="#" onclick="navigateTo('cart'); return false;" class="footer-link">Shopping Cart</a></li>
              <li><a href="#" onclick="navigateTo('about'); return false;" class="footer-link">About Us</a></li>
              <li><a href="#" onclick="navigateTo('contact'); return false;" class="footer-link">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">Our Products</h4>
            <ul class="footer-links">
              ${CATEGORIES.slice(0, 5).map(c => `
                <li><a href="#" onclick="navigateTo('category', '${c.slug}'); return false;" class="footer-link">${c.name}</a></li>
              `).join('')}
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">Contact Us</h4>
            <ul class="footer-links" style="display:flex; flex-direction:column; gap: var(--space-3);">
              <li style="display:flex; align-items:center; gap:8px; color:#1E293B; font-size:13px; font-weight:600;">
                <span style="color:#1E293B; display:flex; align-items:center;">${ICONS.location}</span>
                <span>${COMPANY_INFO.address}</span>
              </li>
              <li style="display:flex; align-items:center; gap:8px; font-size:13px;">
                <span style="color:#1E293B; display:flex; align-items:center;">${ICONS.phone}</span>
                <a href="tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}" class="footer-link">${COMPANY_INFO.phones[0]}</a>
              </li>
              <li style="display:flex; align-items:center; gap:8px; font-size:13px;">
                <span style="color:#1E293B; display:flex; align-items:center;">${ICONS.phone}</span>
                <a href="tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}" class="footer-link">${COMPANY_INFO.phones[1]}</a>
              </li>
              ${COMPANY_INFO.emails.map(e => `
              <li style="display:flex; align-items:center; gap:8px; font-size:13px;">
                <span style="color:#1E293B; display:flex; align-items:center;">${ICONS.mail}</span>
                <a href="mailto:${e}" class="footer-link footer-email">${e}</a>
              </li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div>© ${new Date().getFullYear()} Pioneer Building Materials Trading LLC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  `;
}

// Search every word against name, description, spec, brand/badge and category.
// Products whose name matches rank first; the rest follow in catalogue order.
function searchProducts(query) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const scored = [];
  PRODUCTS.forEach(p => {
    const cat = CATEGORIES.find(c => c.id === p.catId);
    const name = p.name.toLowerCase();
    const haystack = [p.name, p.spec, p.desc, p.badge, cat && cat.name].filter(Boolean).join(' ').toLowerCase();
    if (!words.every(w => haystack.includes(w))) return;
    scored.push({ p, score: words.every(w => name.includes(w)) ? 0 : 1 });
  });
  return scored.sort((a, b) => a.score - b.score).map(x => x.p);
}

function renderSearchModal() {
  if (!state.searchModalOpen) return '';

  const q = state.searchQuery.trim();
  const results = q ? searchProducts(q).slice(0, 15) : PRODUCTS.slice(0, 6);

  return `
    <div class="modal-overlay active" onclick="if(event.target === this) closeSearchModal()">
      <div class="search-modal-box">
        <div class="search-input-wrap">
          ${ICONS.search}
          <input type="text" id="search-input-field" placeholder="Search ${PRODUCTS.length}+ products..." value="${state.searchQuery}" oninput="onSearchInput(this.value)" autofocus class="search-input">
          <button onclick="closeSearchModal()" style="background:none; border:none; cursor:pointer;">${ICONS.close}</button>
        </div>

        <div style="max-height: 400px; overflow-y: auto; padding: 12px 0;">
          ${results.map(p => `
            <div style="padding: 12px 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;" onclick="goToProduct('${p.id}')">
              <div>
                <div style="font-weight: 700; font-size: 14px;">${p.name}</div>
                <div style="font-size: 12px; color: var(--color-text-muted);">${p.spec}</div>
              </div>
              <span class="search-go">View <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Search result click: open the product's category and scroll to its card.
window.goToProduct = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const cat = product && CATEGORIES.find(c => c.id === product.catId);
  if (!cat) return;
  state.pendingProduct = productId;
  state.searchModalOpen = false;
  state.searchQuery = '';
  navigateTo('category', cat.slug);
};

function scrollToPendingProduct() {
  const id = state.pendingProduct;
  const el = id && document.getElementById('prod-' + id);
  if (!el) return;
  state.pendingProduct = null;

  const center = () => el.scrollIntoView({ block: 'center', behavior: 'instant' });
  center();
  setTimeout(center, 500);    // images above the card finish loading and shift the layout
  setTimeout(center, 1300);

  const loaderUp = document.getElementById('page-loader')?.classList.contains('show');
  setTimeout(() => {
    el.classList.add('product-flash');
    setTimeout(() => el.classList.remove('product-flash'), 2400);
  }, loaderUp ? 1100 : 150);
}

window.openSearchModal = function() {
  state.searchModalOpen = true;
  renderApp();
  setTimeout(() => {
    const input = document.getElementById('search-input-field');
    if (input) input.focus();
  }, 100);
};

window.closeSearchModal = function() {
  state.searchModalOpen = false;
  state.searchQuery = '';
  renderApp();
};

window.onSearchInput = function(val) {
  state.searchQuery = val;
  renderApp();
  const input = document.getElementById('search-input-field');
  if (input) {
    input.focus();
    input.setSelectionRange(val.length, val.length);
  }
};

function renderFloatingWhatsApp() {
  const text = encodeURIComponent("Hello Pioneer Building Materials, I would like to inquire about building products.");
  const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`;
  return `
    <a href="${url}" target="_blank" rel="noopener" class="floating-whatsapp-btn" title="Chat on WhatsApp">
      ${ICONS.whatsapp}
    </a>
  `;
}

function renderMobileSidebar() {
  const active = state.mobileMenuOpen ? 'active' : '';
  return `
    <div class="mobile-sidebar-overlay ${active}" onclick="closeMobileMenu()">
      <aside class="mobile-sidebar-drawer" onclick="event.stopPropagation()">
        <div class="mobile-sidebar-header">
          <div class="brand-logo">
            <img src="/logo-removebg-preview.webp" alt="Pioneer Logo" class="brand-icon-img">
            <div class="brand-text">
              <span class="brand-title">PIONEER</span>
              <span class="brand-subtitle">Building Materials Trading LLC</span>
            </div>
          </div>
          <button class="icon-btn" onclick="closeMobileMenu()" title="Close Menu">
            ${ICONS.close}
          </button>
        </div>

        <nav class="mobile-sidebar-nav">
          ${[
            ['home', 'Home', state.currentView === 'home', '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'],
            ['categories', 'Products', state.currentView === 'categories' || state.currentView === 'category', '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>'],
            ['about', 'About Us', state.currentView === 'about', '<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="8" x2="12" y2="8.01"/>'],
            ['contact', 'Contact Us', state.currentView === 'contact', '<path d="M4 4h16v12H8l-4 4z"/>'],
            ['cart', 'Cart', state.currentView === 'cart', '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l3 12h11l2-8H6"/>']
          ].map(([view, label, on, icon]) => `
            <a href="#" onclick="navigateTo('${view}'); return false;" class="mobile-nav-link ${on ? 'active' : ''}">
              <svg class="mnl-ico" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
              <span>${label}</span>
              ${view === 'cart' && state.cart.length ? `<em class="mnl-count">${state.cart.length}</em>` : ''}
              <svg class="mnl-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
            </a>`).join('')}
        </nav>

        <div class="mobile-sidebar-footer">
          <span class="msf-label">Talk to our sales team</span>
          <a href="tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}" class="msf-btn msf-call">
            ${ICONS.phone} <span>${COMPANY_INFO.phones[0]}</span>
          </a>
          <a href="https://wa.me/${COMPANY_INFO.whatsapp}" target="_blank" rel="noopener" class="msf-btn msf-wa">
            ${ICONS.whatsapp} <span>WhatsApp Sales Desk</span>
          </a>
        </div>
      </aside>
    </div>
  `;
}

// Master App Renderer
// ---- SEO: keep title, description, canonical, social tags and structured data in step with the page ----
function currentSeoRoute() {
  const cat = state.selectedCategory;
  switch (state.currentView) {
    case 'home': return { path: '/', type: 'home' };
    case 'categories': return { path: '/categories', type: 'categories' };
    case 'category': return cat ? { path: `/category/${cat.slug}`, type: 'category', cat } : { path: '/categories', type: 'categories' };
    case 'about': return { path: '/about', type: 'about' };
    case 'contact': return { path: '/contact', type: 'contact' };
    default: return { path: '/cart', type: 'cart' };
  }
}

function setMeta(selector, attr, value, create) {
  let el = document.head.querySelector(selector);
  if (!el && create) { el = document.createElement(create.tag); Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v)); document.head.appendChild(el); }
  if (el) el.setAttribute(attr, value);
}

function applySeo(route) {
  const seo = getRouteSeo(route);
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  document.title = seo.title;
  setMeta('meta[name="description"]', 'content', seo.description, { tag: 'meta', attrs: { name: 'description' } });
  setMeta('meta[name="robots"]', 'content', seo.robots, { tag: 'meta', attrs: { name: 'robots' } });
  setMeta('link[rel="canonical"]', 'href', url, { tag: 'link', attrs: { rel: 'canonical' } });
  [['og:title', seo.title], ['og:description', seo.description], ['og:url', url], ['og:image', seo.image]].forEach(([k, v]) =>
    setMeta(`meta[property="${k}"]`, 'content', v, { tag: 'meta', attrs: { property: k } }));
  [['twitter:title', seo.title], ['twitter:description', seo.description], ['twitter:image', seo.image]].forEach(([k, v]) =>
    setMeta(`meta[name="${k}"]`, 'content', v, { tag: 'meta', attrs: { name: k } }));

  document.head.querySelectorAll('script[data-seo], script#ld-default').forEach(n => n.remove());
  getJsonLd(route).forEach(block => {
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.setAttribute('data-seo', '');
    tag.textContent = JSON.stringify(block);
    document.head.appendChild(tag);
  });
}

// Give every in-app link a real address so search engines (and "open in new tab") can follow it.
function makeLinksCrawlable() {
  document.querySelectorAll('a[href="#"][onclick*="navigateTo("]').forEach(a => {
    const m = a.getAttribute('onclick').match(/navigateTo\('([a-z]+)'(?:,\s*'([^']+)')?\)/);
    if (!m) return;
    const [, view, slug] = m;
    a.setAttribute('href', slug ? `/category/${slug}` : view === 'home' ? '/' : `/${view}`);
  });
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  let bodyHtml = '';
  switch (state.currentView) {
    case 'home': bodyHtml = renderHomeView(); break;
    case 'categories': bodyHtml = renderCategoriesView(); break;
    case 'category': bodyHtml = renderCategoryView(); break;
    case 'about': bodyHtml = renderAboutView(); break;
    case 'contact': bodyHtml = renderContactView(); break;
    case 'cart': bodyHtml = renderCartView(); break;
    default: bodyHtml = renderHomeView();
  }

  const mainClass = state.currentView === 'home' ? 'main-home' : 'main-inner';

  app.innerHTML = `
    ${renderHeader()}
    <main class="${mainClass}">${(state.currentView === 'home' || state.currentView === 'about') ? `<h1 class="sr-only">${getRouteSeo(currentSeoRoute()).h1}</h1>` : ''}${bodyHtml}</main>
    ${renderFooter()}
    ${renderSearchModal()}
    ${renderFloatingWhatsApp()}
    ${renderMobileSidebar()}
  `;

  // Initialize Swipers after DOM update
  initSwipers();

  if (state.currentView === 'about') initAboutReveal();
  scrollToPendingProduct();
  applySeo(currentSeoRoute());
  makeLinksCrawlable();

  // Scroll-activated sticky nav: only on home view
  if (state.currentView === 'home') {
    initStickyNav();
    initHomeStatsCounter();
  }
}

function initStickyNav() {
  const hero = document.getElementById('immersive-hero');
  const stickyNav = document.getElementById('sticky-nav-bar');
  if (!hero || !stickyNav) return;

  // Cleanup any previous listener
  if (window._stickyNavHandler) {
    window.removeEventListener('scroll', window._stickyNavHandler);
  }

  window._stickyNavHandler = function() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom <= 60) {
      stickyNav.classList.add('visible');
    } else {
      stickyNav.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', window._stickyNavHandler, { passive: true });
}

// HOME STATS ANIMATED NUMBER COUNTER (Smooth count-up effect)
function initHomeStatsCounter() {
  const container = document.getElementById('welcome-stats');
  if (!container) return;

  const circles = container.querySelectorAll('.welcome-stat-circle');
  if (!circles.length) return;

  function runCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const formatComma = el.dataset.format === 'comma';
    const countEl = el.querySelector('.stat-count');
    if (!countEl) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo curve for smooth, premium deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = ease * target;

      let display = decimals > 0 ? currentVal.toFixed(decimals) : Math.round(currentVal).toString();
      if (formatComma) {
        display = Math.round(currentVal).toLocaleString();
      }

      countEl.textContent = display;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        countEl.textContent = formatComma ? target.toLocaleString() : (decimals > 0 ? target.toFixed(decimals) : target);
      }
    }

    requestAnimationFrame(update);
  }

  // Use IntersectionObserver to trigger animation when scrolled into view or immediately on load
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          circles.forEach((c, idx) => {
            setTimeout(() => runCounter(c), idx * 100);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(container);
  } else {
    // Fallback: run immediately
    circles.forEach(c => runCounter(c));
  }
}

function initSwipers() {
  if (typeof window.Swiper === 'undefined') return;

  // 1. Full Screen Categories Hero Swiper
  const catEl = document.querySelector('.full-screen-products-swiper');
  if (catEl && !catEl.swiper) {
    new window.Swiper(catEl, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.full-screen-products-swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.full-screen-products-swiper .swiper-button-next',
        prevEl: '.full-screen-products-swiper .swiper-button-prev'
      }
    });
  }

  // 2. Projects Swiper
  const projEl = document.querySelector('.projects-swiper');
  if (projEl && !projEl.swiper) {
    new window.Swiper(projEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      allowTouchMove: true,
      grabCursor: true,
      touchEventsTarget: 'wrapper',
      simulateTouch: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.projects-swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.projects-swiper .swiper-button-next',
        prevEl: '.projects-swiper .swiper-button-prev'
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 24 },
        992: { slidesPerView: 3, spaceBetween: 24 }
      }
    });
  }
}

// Initial Boot & PushState History Router Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  syncRouteFromPath();
  window.addEventListener('popstate', syncRouteFromPath);
});

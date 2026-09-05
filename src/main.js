import { COMPANY_INFO, CATEGORIES, PRODUCTS } from './data/products.js';

// Target email from environment variable (VITE_TARGET_EMAIL)
const TARGET_EMAIL = import.meta.env.VITE_TARGET_EMAIL || 'info.pioneerbuilds@gmail.com';

// 27 Google Drive Brand Image IDs from user folder
const BRAND_IMAGE_IDS = [
  '1Gk7WePrF9kfbVT5GzCw0th6jgjdXpcOB',
  '1zAm_nQGsl5jrzV_yKfwGZyZXFpDFgTo2',
  '1giLGFs1duXvwO7XE4t7b_7ATYEoeaO-H',
  '17gfGSf8-2SWhon2hU36b0d1XBc8c1ZGh',
  '1qlnMGDJ6ARc1anunONkDVFSQFnUYGDGd',
  '1QlIYIG--spoyIJNrRfTe5MUHIg0KppZw',
  '1FU6KsRqaZ7hBGayjV3j3AsU3SP-sLdda',
  '1q6Q6-gJ-vKoZ2nOpQ9vP8RQL74KNWzIC',
  '1vCzrlKAR2ru8Egeouu-VBF7NJBzWBGse',
  '1xkJU109zsRdLWMa8c_j7ZmtRGgMztoWc',
  '11r0HvNLVgELCI83P-e0a1lPY_R4xzHxz',
  '1cc64FwoSbLkV9xWykAPDmjFta1rBenGl',
  '1FWkU9WZUYZU7Hx4Wz04NFSLnx3ehA5Bg',
  '1ZWkRsbt_duloavcwraU0VOJ05fy-5cO7',
  '1uN0vYbsGeEUqU5J7eq9VJpk6g2a4CYJK',
  '1bWS160R6fj10z63UULVks9vve9ThmeD5',
  '10mbnT9I_xN0BG85ItcqiflTayieCM6qi',
  '1qbCOXO3d71sDZAKTO70a3um2d9ehod80',
  '1gm_6yb2Kxp4O6wPQSQz5aN1xOZKRn3Or',
  '1lNM0oO1afDB2iSQfItb1lyVo341XNh09',
  '1H715MwKjachfFZyENDRx8NE7UqMf4iv-',
  '1S37UG2PeKlu9RY_B95eM_2gReQ5vfPqq',
  '1RmCjQYSCdMO3oOnaB8MSffdRq6i7B7m3',
  '1hECM7ZJiz90JbpHK7qeNpRdIfglYq__j',
  '1_SUxt4NtuuBIBdg60HYEFYfh1nvSkO5p',
  '1uWecWN0n4fYh7CXZ1IIXfJz7CtmsyRcB',
  '1UZ2It-RiGRR3DVEwE3gf6_wnoFhbKyHD'
];

// Fleet Trucks Google Drive Direct IDs
const FLEET_TRUCKS = [
  {
    name: "3 Meter Cubic Tipper",
    spec: "3m³ Compact Tipper Truck with driver for rapid site delivery across Dubai & UAE urban zones.",
    capacity: "3m³ Load Capacity",
    image: "https://lh3.googleusercontent.com/d/1L918lwizbD3OSMSTcHf0dGDrTHopp52X=w1000",
    badge: "Light Fleet"
  },
  {
    name: "5 Meter Cubic Tipper",
    spec: "5m³ Medium Duty Dump Truck engineered for aggregate, dune sand & blockwork site supply.",
    capacity: "5m³ Load Capacity",
    image: "https://lh3.googleusercontent.com/d/1eSa9J74_A7eoHoTHYbShHskMZWimddqj=w1000",
    badge: "Medium Fleet"
  },
  {
    name: "20 Meter Cubic Tipper",
    spec: "20m³ Heavy Duty 10-Wheel Tipper Truck for bulk quarry aggregate, road sub-base & foundation haulage.",
    capacity: "20m³ Load Capacity",
    image: "https://lh3.googleusercontent.com/d/1LyZMfRtRvanbPhbT6FMfIQMxl61oU53h=w1000",
    badge: "Heavy Fleet"
  }
];

// Projects Showcase
const PROJECTS_BUILD = [
  {
    title: "Burj Crown Residential Tower",
    location: "Downtown Dubai",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=800&auto=format&fit=crop&q=80",
    supplied: "Supplied: Portland Cement, Marine Plywood & BRC Welded Mesh"
  },
  {
    title: "Dubai South Logistics Park",
    location: "Jebel Ali Freezone",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
    supplied: "Supplied: Bulk Crushed Aggregates, Sand & 20m³ Tipper Fleet Rental"
  },
  {
    title: "Ras Al Khor Commercial Complex",
    location: "Dubai Industrial Zone",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80",
    supplied: "Supplied: Structural Steel Beams, C-Channels & Heavy Anchor Bolts"
  },
  {
    title: "Dubai Marina Waterfront Towers",
    location: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
    supplied: "Supplied: Waterproofing Bitumen Membrane, DPC & Floor Protection"
  },
  {
    title: "Jumeirah Village Circle Heights",
    location: "JVC Dubai",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
    supplied: "Supplied: Site Safety Gear PPE, Scaffolding Couplers & Whitewood Timber"
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
    existing.qty += quantity;
  } else {
    state.cart.push({ ...product, qty: quantity });
  }
  saveCart();
  showToast(`Added "${product.name}" to your Cart!`);
  renderApp();
};

window.removeFromCart = function(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  showToast('Item removed from Cart');
  renderApp();
};

window.updateCartQty = function(productId, qty) {
  const item = state.cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, parseInt(qty) || 1);
    saveCart();
    renderApp();
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
  const recipient = TARGET_EMAIL;
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
      body += `${index + 1}. ${item.name}\n   Qty: ${item.qty} ${item.unit || ''} | Spec: ${item.spec}\n\n`;
    });
  }

  body += `Please reply with current stock availability, unit pricing & site delivery schedule in UAE.\nThank you!`;
  
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function generateWhatsAppCartUrl(customNotes = '') {
  let text = `*OFFICIAL PIONEER BMT CART ORDER*\n`;
  text += `Pioneer Building Materials Trading LLC\n`;
  text += `Email Target: ${TARGET_EMAIL}\n`;
  text += `------------------------------------\n\n`;
  
  if (state.cart.length === 0) {
    text += `Hello Sales Team, I would like to place a materials inquiry.\n`;
  } else {
    text += `*SELECTED CART ITEMS:*\n`;
    state.cart.forEach((item, index) => {
      text += `${index + 1}. *${item.name}*\n   Qty: ${item.qty} ${item.unit || ''} | Spec: ${item.spec}\n`;
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
    itemsSummary = state.cart.map((item, idx) => 
      `${idx + 1}. ${item.name}\n   • Quantity: ${item.qty} ${item.unit || ''}\n   • Spec: ${item.spec}`
    ).join('\n\n');
  }

  const payload = {
    "_subject": `Pioneer BMT Cart Order - ${name}`,
    "_template": "table",
    "_captcha": "false",
    "Client / Contractor Name": name,
    "Contact Phone / WhatsApp": phone,
    "Delivery Location & Site Notes": notes || "No additional site notes specified",
    "Cart Material Items": itemsSummary
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok || data.success === "true" || data.success === true) {
      showToast(`Order sent directly to ${TARGET_EMAIL}!`);
      state.cart = [];
      saveCart();
      renderApp();
    } else {
      const mailUrl = generateEmailCartUrl(name, phone, notes);
      window.open(mailUrl, '_self');
      showToast(`Order submitted to ${TARGET_EMAIL}!`);
    }
  } catch (err) {
    const mailUrl = generateEmailCartUrl(name, phone, notes);
    window.open(mailUrl, '_self');
    showToast(`Order submitted to ${TARGET_EMAIL}!`);
  } finally {
    if (btnEl) {
      btnEl.disabled = false;
      btnEl.innerHTML = `<span>Submit Cart Order</span>`;
    }
  }
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

  if (window.location.pathname !== targetPath) {
    window.history.pushState({ view, catSlug }, '', targetPath);
  }
  syncRouteFromPath();
};

function syncRouteFromPath() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  if (pathname === '/' || pathname === '') {
    state.currentView = 'home';
    state.selectedCategory = null;
  } else if (pathname.startsWith('/category/')) {
    const catSlug = pathname.replace('/category/', '');
    state.currentView = 'category';
    state.selectedCategory = CATEGORIES.find(c => c.slug === catSlug) || null;
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

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

// HEADER NAVBAR
function renderHeader() {
  const cartTotal = state.cart.reduce((sum, item) => sum + item.qty, 0);

  return `
    <header class="tamba-header-wrap">
      <div class="container">
        <nav class="tamba-navbar">
          <!-- Brand Logo -->
          <a href="#" onclick="navigateTo('home'); return false;" class="brand-logo">
            <div class="brand-icon">P</div>
            <div class="brand-text">
              <span class="brand-title">PIONEER</span>
              <span class="brand-subtitle">Building Materials LLC</span>
            </div>
          </a>

          <!-- Center Navigation Links -->
          <ul class="nav-links-menu">
            <li><a href="#" onclick="navigateTo('home'); return false;" class="nav-item-link ${state.currentView === 'home' ? 'active' : ''}">Home</a></li>
            <li><a href="#" onclick="navigateTo('categories'); return false;" class="nav-item-link ${state.currentView === 'categories' || state.currentView === 'category' ? 'active' : ''}">Categories</a></li>
            <li><a href="#" onclick="navigateTo('about'); return false;" class="nav-item-link ${state.currentView === 'about' ? 'active' : ''}">About Us</a></li>
            <li><a href="#" onclick="navigateTo('contact'); return false;" class="nav-item-link ${state.currentView === 'contact' ? 'active' : ''}">Contact us</a></li>
          </ul>

          <!-- Right Action Utility Group -->
          <div class="nav-actions-group">
            <button class="icon-btn" onclick="openSearchModal()" title="Search 121+ Products">
              ${ICONS.search}
            </button>

            <a href="tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}" class="phone-link-btn">
              ${ICONS.phone}
              <span>${COMPANY_INFO.phones[0]}</span>
            </a>

            <button class="btn btn-primary desktop-rfq-btn" onclick="navigateTo('cart')">
              ${ICONS.cart}
              <span>Cart (${cartTotal})</span>
            </button>

            <button class="mobile-cart-badge-btn" onclick="navigateTo('cart')" title="View Shopping Cart">
              ${ICONS.cart}
              ${cartTotal > 0 ? `<span class="cart-badge">${cartTotal}</span>` : ''}
            </button>

            <button class="mobile-menu-toggle-btn" onclick="toggleMobileMenu()" title="Open Navigation Menu">
              ${ICONS.menu}
            </button>
          </div>
        </nav>
      </div>
    </header>
  `;
}

// 1. TOP MAIN IMAGE & ANIMATED TITLE SECTION
function renderHeroSection() {
  return `
    <section class="hero-main-image-section">
      <div class="hero-main-img-container">
        <img src="/cover.png" alt="Pioneer Building Materials" class="hero-main-standalone-img">
      </div>
      <div class="welcome-title-banner">
        <h1 class="hero-animated-title-standalone">
          <span class="anim-word word-1">Welcome</span>
          <span class="anim-word word-2">to</span>
          <span class="anim-word word-highlight">Pioneer Building Materials</span>
        </h1>
        <div class="welcome-accent-line"></div>
      </div>
    </section>
  `;
}

// 2. OUR PRODUCTS - FULL SCREEN CATEGORY HERO SLIDES WITH 4-PIECE FLIP ANIMATION
function renderOurProductsSlider() {
  return `
    <section class="products-hero-slider-section">
      <div class="container" style="margin-bottom: var(--space-8); text-align: center; max-width: 750px;">
        <span style="font-size: 12px; font-weight: 700; color: var(--color-primary-dark); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 6px;">
          Material Divisions
        </span>
        <h2 style="font-size: var(--font-size-3xl);">Our Products</h2>
        <p style="margin: 8px auto 0;">Explore our 11 full material divisions featuring certified building products.</p>
      </div>

      <div class="swiper full-screen-products-swiper">
        <div class="swiper-wrapper">
          ${CATEGORIES.map((cat, index) => {
            const firstProd = PRODUCTS.find(p => p.catId === cat.id);
            const thumbImg = firstProd ? firstProd.image : '/cover.png';
            const numCurrent = String(index + 1).padStart(2, '0');
            const numTotal = String(CATEGORIES.length).padStart(2, '0');
            return `
              <div class="swiper-slide">
                <div class="category-hero-slide" style="background-image: url('${thumbImg}');">
                  <div class="slide-shatter-grid">
                    <div class="tile-piece tile-tl" style="background-image: url('${thumbImg}');"></div>
                    <div class="tile-piece tile-tr" style="background-image: url('${thumbImg}');"></div>
                    <div class="tile-piece tile-bl" style="background-image: url('${thumbImg}');"></div>
                    <div class="tile-piece tile-br" style="background-image: url('${thumbImg}');"></div>
                  </div>
                  <div class="category-hero-overlay"></div>
                  <div class="category-hero-counter">
                    <span class="slide-num-current">${numCurrent}</span>
                    <span class="slide-num-slash">/</span>
                    <span class="slide-num-total">${numTotal}</span>
                  </div>
                  <div class="category-hero-content">
                    <div class="hero-tag-clip">
                      <span class="category-hero-arch-tag">PIONEER DIVISION ${numCurrent}</span>
                    </div>
                    <div class="hero-title-clip">
                      <h3 class="category-hero-title">${cat.name}</h3>
                    </div>
                  </div>
                  <button onclick="navigateTo('category', '${cat.slug}')" class="btn btn-primary category-explore-btn-br">
                    <span>Explore Now</span>
                    ${ICONS.arrowRight}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </section>
  `;
}

// 3. BRANDS WE OFFER - CONTINUOUS MOVING MARQUEE (PAUSE ON HOVER)
function renderBrandsSection() {
  return `
    <section class="brands-section">
      <div class="container" style="margin-bottom: var(--space-8); text-align: center;">
        <span style="font-size: 12px; font-weight: 700; color: var(--color-primary-dark); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 6px;">
          Global Partnerships
        </span>
        <h2 style="font-size: var(--font-size-3xl);">Brands We Offer</h2>
        <p style="margin: 6px auto 0;">Authorised stockist & distributor of world-class construction brands across the Middle East.</p>
      </div>

      <div class="brands-marquee-wrap">
        <div class="brands-marquee-track">
          ${BRAND_IMAGE_IDS.concat(BRAND_IMAGE_IDS).map((id, index) => `
            <div class="brand-card-logo" title="Authorised Brand Partner">
              <img src="https://lh3.googleusercontent.com/d/${id}=w600" 
                   alt="Brand Logo ${(index % BRAND_IMAGE_IDS.length) + 1}" 
                   loading="lazy" 
                   referrerpolicy="no-referrer"
                   onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='https://drive.google.com/thumbnail?id=${id}&sz=w600';}">
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 4. OUR FLEET SECTION (3 TIPPERS)
function renderFleetSection() {
  return `
    <section class="fleet-section">
      <div class="container">
        <div style="text-align: center; max-width: 700px; margin: 0 auto var(--space-8);">
          <span style="font-size: 12px; font-weight: 700; color: var(--color-primary-dark); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 6px;">
            Logistics & Transport Hire
          </span>
          <h2 style="font-size: var(--font-size-3xl);">Our Fleet</h2>
          <p style="margin: 8px auto 0;">In-house heavy tipper truck fleet available for site material delivery and dump transport rental across Dubai & all UAE Emirates.</p>
        </div>

        <div class="fleet-grid">
          ${FLEET_TRUCKS.map((truck, idx) => `
            <div class="fleet-card">
              <div class="fleet-img-wrap">
                <img src="${truck.image}" alt="${truck.name}" class="fleet-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80'">
                <span class="fleet-badge">${truck.badge}</span>
              </div>
              <div class="fleet-card-body">
                <h3 class="fleet-card-title">${truck.name}</h3>
                <div style="font-size: 12px; font-weight: 700; color: var(--color-primary-dark); margin-bottom: var(--space-3);">
                  🚛 ${truck.capacity}
                </div>
                <p class="fleet-card-desc">${truck.spec}</p>
                <button onclick="addToCartById('pbm-002'); navigateTo('cart');" class="btn btn-primary" style="width: 100%; justify-content: center;">
                  <span>Book / Inquire Fleet</span>
                  ${ICONS.arrowRight}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 5. PROJECTS WE HELP BUILD SECTION (SWIPER ANIMATED SLIDES)
function renderProjectsSection() {
  return `
    <section class="projects-section">
      <div class="container">
        <div style="text-align: center; max-width: 700px; margin: 0 auto var(--space-10);">
          <span style="font-size: 12px; font-weight: 700; color: var(--color-primary-dark); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 6px;">
            Proven Track Record
          </span>
          <h2 style="font-size: var(--font-size-3xl);">Projects We Help Build</h2>
          <p style="margin: 8px auto 0;">Key landmarks, commercial complexes, and infrastructure sites supplied with Pioneer building materials.</p>
        </div>

        <div class="swiper projects-swiper" style="padding-bottom: 50px;">
          <div class="swiper-wrapper">
            ${PROJECTS_BUILD.map(proj => `
              <div class="swiper-slide">
                <div class="project-card">
                  <div class="project-img-wrap">
                    <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy">
                  </div>
                  <div class="project-card-body">
                    <span class="project-location">${proj.location}</span>
                    <h3 class="project-title">${proj.title}</h3>
                    <p style="font-size: 12px; color: var(--color-text-subtle); margin-top: 4px;">${proj.supplied}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  `;
}

// 6. WHY CHOOSE US SECTION (VECTOR ICONS, NO EMOJIS)
function renderWhyChooseUsSection() {
  return `
    <section class="why-section">
      <div class="container">
        <div style="text-align: center; max-width: 700px; margin: 0 auto var(--space-8);">
          <span style="font-size: 12px; font-weight: 700; color: var(--color-primary-dark); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 6px;">
            Why Pioneer BMT
          </span>
          <h2 style="font-size: var(--font-size-3xl);">Why Choose Us</h2>
          <p style="margin: 8px auto 0;">Empowering contractor partners with certified materials, reliable transport, and competitive wholesale terms.</p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon-box">${ICONS.badgeCheck}</div>
            <h3 class="why-card-title">Certified Quality</h3>
            <p class="why-card-desc">All timber, steel, cement & waterproofing items comply with UAE municipality standards & BS EN specifications.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">${ICONS.truckFast}</div>
            <h3 class="why-card-title">In-House Logistics</h3>
            <p class="why-card-desc">Private fleet of 3-ton pickups and 20m³ heavy tipper dump trucks ensuring prompt site delivery across all Emirates.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">${ICONS.tagPercent}</div>
            <h3 class="why-card-title">Wholesale Rates</h3>
            <p class="why-card-desc">Direct factory pricing with transparent volume discounts for commercial contractors and project managers.</p>
          </div>

          <div class="why-card">
            <div class="why-icon-box">${ICONS.headset}</div>
            <h3 class="why-card-title">24/7 Sales Support</h3>
            <p class="why-card-desc">Dedicated engineering sales team providing instant WhatsApp quotes, BOQ estimates, and technical advice.</p>
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
    ${renderOurProductsSlider()}
    ${renderBrandsSection()}
    ${renderFleetSection()}
    ${renderProjectsSection()}
    ${renderWhyChooseUsSection()}
  `;
}

// PRODUCT CARD UTILITY
function renderProductCard(p) {
  const cat = CATEGORIES.find(c => c.id === p.catId);
  return `
    <div class="product-card">
      <div class="product-thumb-wrap">
        <img src="${p.image}" alt="${p.name}" class="product-thumb-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'">
      </div>
      <div class="product-card-body">
        <span class="product-cat-label">${cat ? cat.name : 'Building Material'}</span>
        <h4 class="product-card-title">${p.name}</h4>
        <p class="product-card-spec">${p.spec}</p>
        <div class="product-card-footer">
          <span style="font-size: 11px; font-weight: 600; color: var(--color-text-subtle);">${p.unit || 'Standard Unit'}</span>
          <button onclick="addToCartById('${p.id}')" class="btn btn-primary" style="padding: 6px 14px; font-size: 12px; font-weight: 700;">
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
    <div class="container" style="padding: var(--space-16) 0;">
      <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-8); margin-bottom: var(--space-8);">
        <h1 style="color: var(--color-primary-dark); margin-bottom: var(--space-2);">${cat.name}</h1>
        <p style="font-size: var(--font-size-lg);">${cat.description}</p>
      </div>

      <div class="product-grid">
        ${catProducts.map(p => renderProductCard(p)).join('')}
      </div>
    </div>
  `;
}

// CATEGORIES PAGE VIEW (/categories)
function renderCategoriesView() {
  return `
    <div class="container" style="padding: var(--space-16) 0;">
      <div style="margin-bottom: var(--space-8); text-align: center; max-width: 760px; margin-left: auto; margin-right: auto;">
        <span style="font-size: 12px; font-weight: 700; color: var(--color-primary-dark); text-transform: uppercase; letter-spacing: 0.08em; display: inline-block; margin-bottom: var(--space-2);">
          Building Material Divisions
        </span>
        <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--space-3); color: var(--color-text-main);">
          Product Categories
        </h1>
        <p style="font-size: var(--font-size-lg); color: var(--color-text-muted);">
          Browse our 121+ certified building materials, timber, steel, and safety gear organized by industry division.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--space-6);">
        ${CATEGORIES.map(cat => {
          const catProds = PRODUCTS.filter(p => p.catId === cat.id);
          const firstProd = catProds[0];
          const thumbImg = firstProd ? firstProd.image : '/cover.png';
          return `
            <div class="category-card-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm); transition: transform 200ms ease, box-shadow 200ms ease;">
              <div style="width: 100%; height: 200px; position: relative; overflow: hidden; background: var(--color-bg-alt);">
                <img src="${thumbImg}" alt="${cat.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
              </div>
              <div style="padding: var(--space-6); display: flex; flex-direction: column; flex-grow: 1;">
                <h3 style="font-size: var(--font-size-xl); margin-bottom: var(--space-2); color: var(--color-text-main);">${cat.name}</h3>
                <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin-bottom: var(--space-6); flex-grow: 1; line-height: 1.5;">
                  ${cat.description}
                </p>
                <button onclick="navigateTo('category', '${cat.slug}')" class="btn btn-primary" style="width: 100%; justify-content: center;">
                  <span>Explore ${cat.name}</span>
                  ${ICONS.arrowRight}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// SHOPPING CART VIEW (/cart)
function renderCartView() {
  const isCartEmpty = state.cart.length === 0;

  return `
    <div class="container" style="padding: var(--space-16) 0;">
      <div style="margin-bottom: var(--space-8);">
        <h1>Shopping Cart</h1>
        <p>Review items in your cart and submit your order inquiry directly to <strong>info.pioneerbuilds@gmail.com</strong>.</p>
      </div>

      <div class="rfq-layout-grid">
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-4);">
            <h3 style="margin:0;">Cart Items (${state.cart.length})</h3>
            ${!isCartEmpty ? `<button onclick="state.cart=[]; saveCart(); renderApp();" style="font-size:12px; color:#dc2626; border:none; background:none; cursor:pointer; font-weight:600;">Clear Cart</button>` : ''}
          </div>

          ${isCartEmpty ? `
            <div style="padding: var(--space-12) 0; text-align: center;">
              <p style="margin-bottom: var(--space-4);">Your cart is currently empty.</p>
              <button onclick="navigateTo('categories')" class="btn btn-primary">Browse Categories</button>
            </div>
          ` : `
            <div class="rfq-table-wrapper">
              <table style="width:100%; border-collapse:collapse; margin-top: var(--space-4);">
                <thead>
                  <tr style="border-bottom:1px solid var(--color-border); text-align:left;">
                    <th style="padding:8px;">Item</th>
                    <th style="padding:8px; width:130px;">Quantity</th>
                    <th style="padding:8px; text-align:right;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${state.cart.map(item => `
                    <tr style="border-bottom:1px solid var(--color-border-subtle);">
                      <td style="padding:12px 8px;">
                        <strong style="color:var(--color-text-main); font-size:14px;">${item.name}</strong>
                        <div style="font-size:12px; color:var(--color-text-muted);">${item.spec}</div>
                      </td>
                      <td style="padding:12px 8px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <input type="number" min="1" value="${item.qty}" onchange="updateCartQty('${item.id}', this.value)" style="width:65px; padding:4px 8px; border:1px solid var(--color-border); border-radius:4px; font-weight:700;">
                          <span style="font-size:11px; color:var(--color-text-subtle);">${item.unit || ''}</span>
                        </div>
                      </td>
                      <td style="padding:12px 8px; text-align:right;">
                        <button onclick="removeFromCart('${item.id}')" style="color:#dc2626; border:none; background:none; cursor:pointer; font-weight:600; font-size:13px;">Remove</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6); height: fit-content;">
          <h3>Submit Cart Order</h3>
          <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: var(--space-4);">
            Direct Sales Desk Email: <strong style="color: var(--color-text-main);">${TARGET_EMAIL}</strong>
          </p>

          <form onsubmit="handleSendCartOrderEmail(event)">
            <div style="margin-bottom: var(--space-3);">
              <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Your Name / Company:</label>
              <input type="text" id="cart-client-name" required placeholder="e.g. Al Habtoor Contracting" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px; font-size:13px;">
            </div>

            <div style="margin-bottom: var(--space-3);">
              <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Mobile / WhatsApp Number:</label>
              <input type="tel" id="cart-client-phone" required placeholder="+971 50 123 4567" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px; font-size:13px;">
            </div>

            <div style="margin-bottom: var(--space-4);">
              <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Delivery Location / Project Notes:</label>
              <textarea id="cart-notes" rows="3" placeholder="Enter UAE site address, delivery date, specs..." style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px; font-size:13px;"></textarea>
            </div>

            <button type="submit" id="send-cart-order-btn" class="btn btn-primary" style="width:100%; justify-content:center; margin-bottom: var(--space-3); font-weight:700;">
              <span>Submit Cart Order</span>
            </button>

            <button type="button" onclick="handleSendCartOrderWhatsApp(event)" class="btn btn-whatsapp" style="width:100%; justify-content:center;">
              ${ICONS.whatsapp}
              <span>Send Cart via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
}

// ABOUT VIEW (/about)
function renderAboutView() {
  return `
    <div class="container" style="padding: var(--space-16) 0;">
      <div style="max-width: var(--container-narrow); margin: 0 auto;">
        <h1 style="margin-bottom: var(--space-4);">About Pioneer Building Materials</h1>
        <p style="font-size: var(--font-size-lg); margin-bottom: var(--space-8);">
          Pioneer Building Materials Trading LLC is a leading distributor and stockist of architectural building materials, timber, steel, and safety equipment in Dubai, UAE.
        </p>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6); margin-bottom: var(--space-6);">
          <h3>Official Registration Details</h3>
          <ul style="list-style:none; margin-top:var(--space-4); display:grid; grid-template-columns:1fr 1fr; gap:var(--space-4); font-size:14px;">
            <li><strong>Legal Name:</strong> Pioneer Building Materials Trading LLC</li>
            <li><strong>Headquarters:</strong> Dubai, United Arab Emirates</li>
            <li><strong>Phone Desks:</strong> <a href="tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}" style="color:var(--color-primary-dark); font-weight:600;">${COMPANY_INFO.phones[0]}</a> / <a href="tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}" style="color:var(--color-primary-dark); font-weight:600;">${COMPANY_INFO.phones[1]}</a></li>
            <li><strong>Email:</strong> <a href="mailto:${COMPANY_INFO.emails[0]}" style="color:var(--color-primary-dark); font-weight:600;">${COMPANY_INFO.emails[0]}</a></li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// CONTACT VIEW (/contact)
function renderContactView() {
  return `
    <div class="container" style="padding: var(--space-16) 0;">
      <div style="margin-bottom: var(--space-8);">
        <h1>Contact Us</h1>
        <p>Get in touch with our sales team in Dubai for instant product quotes & site delivery options.</p>
      </div>

      <div class="contact-layout-grid">
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6);">
          <h3>Pioneer BMT Office</h3>
          <p style="margin-bottom: var(--space-4);">Dubai, United Arab Emirates</p>
          
          <div style="display:flex; flex-direction:column; gap:var(--space-3); font-size:14px; margin-bottom:var(--space-6);">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="color:var(--color-primary-dark); display:flex; align-items:center;">${ICONS.phone}</span>
              <a href="tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}" style="color:var(--color-text-main); font-weight:600; text-decoration:underline;">${COMPANY_INFO.phones[0]}</a>
              <span>/</span>
              <a href="tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}" style="color:var(--color-text-main); font-weight:600; text-decoration:underline;">${COMPANY_INFO.phones[1]}</a>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="color:var(--color-primary-dark); display:flex; align-items:center;">${ICONS.mail}</span>
              <a href="mailto:${COMPANY_INFO.emails[0]}" style="color:var(--color-text-main); font-weight:600; text-decoration:underline;">${COMPANY_INFO.emails[0]}</a>
            </div>
          </div>

          <a href="${generateWhatsAppCartUrl()}" target="_blank" class="btn btn-whatsapp">
            ${ICONS.whatsapp} Chat on WhatsApp
          </a>
        </div>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6);">
          <h3>Send Direct Inquiry</h3>
          <form onsubmit="event.preventDefault(); showToast('Inquiry sent! We will get back to you shortly.');">
            <div style="margin-bottom:12px;">
              <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Name:</label>
              <input type="text" required style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px;">
            </div>
            <div style="margin-bottom:12px;">
              <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Mobile / WhatsApp:</label>
              <input type="tel" required style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px;">
            </div>
            <div style="margin-bottom:16px;">
              <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Message / Materials Needed:</label>
              <textarea rows="4" required style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

// SITE FOOTER (PRIMARY MAIN THEME COLOR BACKGROUND)
function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="brand-logo" style="margin-bottom: var(--space-4);">
              <div class="brand-icon" style="background:#1E293B; color:#ffffff;">P</div>
              <div class="brand-text">
                <span class="brand-title" style="color:#1E293B;">PIONEER</span>
                <span class="brand-subtitle" style="color:#1E293B;">Building Materials LLC</span>
              </div>
            </div>
            <p style="font-size: 14px; color: #1E293B; margin-bottom: var(--space-4); font-weight: 500;">
              Premier wholesale distributor of building materials, timber, steel, safety gear, and heavy dump trucks across Dubai & UAE.
            </p>
          </div>

          <div>
            <h4 class="footer-col-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#" onclick="navigateTo('home'); return false;" class="footer-link">Home</a></li>
              <li><a href="#" onclick="navigateTo('categories'); return false;" class="footer-link">Categories</a></li>
              <li><a href="#" onclick="navigateTo('cart'); return false;" class="footer-link">Shopping Cart</a></li>
              <li><a href="#" onclick="navigateTo('about'); return false;" class="footer-link">About Us</a></li>
              <li><a href="#" onclick="navigateTo('contact'); return false;" class="footer-link">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">Top Solutions</h4>
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
              <li style="display:flex; align-items:center; gap:8px; font-size:13px;">
                <span style="color:#1E293B; display:flex; align-items:center;">${ICONS.mail}</span>
                <a href="mailto:${COMPANY_INFO.emails[0]}" class="footer-link">${COMPANY_INFO.emails[0]}</a>
              </li>
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

function renderSearchModal() {
  if (!state.searchModalOpen) return '';

  const q = state.searchQuery.toLowerCase().trim();
  const results = q ? PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.spec.toLowerCase().includes(q)).slice(0, 15) : PRODUCTS.slice(0, 6);

  return `
    <div class="modal-overlay active" onclick="if(event.target === this) closeSearchModal()">
      <div class="search-modal-box">
        <div class="search-input-wrap">
          ${ICONS.search}
          <input type="text" id="search-input-field" placeholder="Search 121+ products..." value="${state.searchQuery}" oninput="onSearchInput(this.value)" autofocus class="search-input">
          <button onclick="closeSearchModal()" style="background:none; border:none; cursor:pointer;">${ICONS.close}</button>
        </div>

        <div style="max-height: 400px; overflow-y: auto; padding: 12px 0;">
          ${results.map(p => `
            <div style="padding: 12px 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;" onclick="closeSearchModal(); addToCartById('${p.id}'); navigateTo('cart');">
              <div>
                <div style="font-weight: 700; font-size: 14px;">${p.name}</div>
                <div style="font-size: 12px; color: var(--color-text-muted);">${p.spec}</div>
              </div>
              <button class="btn btn-primary" style="font-size: 11px; padding: 4px 8px;">+ Add to Cart</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
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
            <div class="brand-icon">P</div>
            <div class="brand-text">
              <span class="brand-title">PIONEER</span>
              <span class="brand-subtitle">Building Materials</span>
            </div>
          </div>
          <button class="icon-btn" onclick="closeMobileMenu()" title="Close Menu">
            ${ICONS.close}
          </button>
        </div>

        <nav class="mobile-sidebar-nav">
          <a href="#" onclick="navigateTo('home'); return false;" class="mobile-nav-link ${state.currentView === 'home' ? 'active' : ''}">
            <span>Home</span>
          </a>
          <a href="#" onclick="navigateTo('categories'); return false;" class="mobile-nav-link ${state.currentView === 'categories' || state.currentView === 'category' ? 'active' : ''}">
            <span>Material Categories</span>
          </a>
          <a href="#" onclick="navigateTo('cart'); return false;" class="mobile-nav-link ${state.currentView === 'cart' ? 'active' : ''}">
            <span>Shopping Cart</span>
          </a>
          <a href="#" onclick="navigateTo('about'); return false;" class="mobile-nav-link ${state.currentView === 'about' ? 'active' : ''}">
            <span>About Pioneer BMT</span>
          </a>
          <a href="#" onclick="navigateTo('contact'); return false;" class="mobile-nav-link ${state.currentView === 'contact' ? 'active' : ''}">
            <span>Contact & Location</span>
          </a>
        </nav>

        <div class="mobile-sidebar-footer">
          <a href="tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}" class="btn btn-primary" style="width: 100%; justify-content: center;">
            ${ICONS.phone} Call ${COMPANY_INFO.phones[0]}
          </a>
          <a href="https://wa.me/${COMPANY_INFO.whatsapp}" target="_blank" class="btn btn-whatsapp" style="width: 100%; justify-content: center;">
            ${ICONS.whatsapp} WhatsApp Sales Desk
          </a>
        </div>
      </aside>
    </div>
  `;
}

// Master App Renderer
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
    <main class="${mainClass}">${bodyHtml}</main>
    ${renderFooter()}
    ${renderSearchModal()}
    ${renderFloatingWhatsApp()}
    ${renderMobileSidebar()}
  `;

  // Initialize Swipers after DOM update
  initSwipers();
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
      spaceBetween: 24,
      loop: true,
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
        640: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      }
    });
  }
}

// Initial Boot & PushState History Router Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  syncRouteFromPath();
  window.addEventListener('popstate', syncRouteFromPath);
});

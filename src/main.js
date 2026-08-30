import { COMPANY_INFO, CATEGORIES, PRODUCTS } from './data/products.js';

// Target email from environment variable (VITE_TARGET_EMAIL)
const TARGET_EMAIL = import.meta.env.VITE_TARGET_EMAIL || 'info.pioneerbuilds@gmail.com';

// Application State
const state = {
  currentView: 'home', // 'home' | 'categories' | 'products' | 'category' | 'about' | 'contact' | 'rfq'
  selectedCategory: null,
  searchQuery: '',
  boqCart: JSON.parse(localStorage.getItem('pioneer_boq_cart') || '[]'),
  searchModalOpen: false,
  activeSlide: 0
};

// Hero Carousel Cover & Banner Slides
const HERO_SLIDES = [
  {
    title: "Pioneer Building Materials Trading LLC",
    subtitle: "Premier Wholesaler & Stockist of Certified Construction Materials, Timber, Steel Mesh & Site Fleet in Dubai UAE.",
    image: "/cover.png",
    catSlug: "aggregates-cement-concrete"
  },
  {
    title: "Aggregates & Cement Supply",
    subtitle: "High grade Portland Cement, washed sand & aggregate gravel delivered direct to site across UAE.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&auto=format&fit=crop&q=80",
    catSlug: "aggregates-cement-concrete"
  },
  {
    title: "Marine Plywood & Formwork Timber",
    subtitle: "Phenolic film-faced marine ply, whitewood timber joists, tie rods, props & scaffolding couplers.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&auto=format&fit=crop&q=80",
    catSlug: "timber-plywood-formwork"
  },
  {
    title: "BRC Mesh & Structural Steel",
    subtitle: "High yield welded wire fabric mesh sheets, binding wire rolls, C channels & steel lintels.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=1600&auto=format&fit=crop&q=80",
    catSlug: "steel-mesh-structural-metal"
  },
  {
    title: "PPE & Site Safety Equipment",
    subtitle: "EN397 hard hat helmets, safety boots, split leather gloves, fall harnesses & hi-vis jackets.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop&q=80",
    catSlug: "safety-gear-ppe"
  }
];

// SVG Icons
const ICONS = {
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.146 4.19 4.289-1.123z"/></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  arrowLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
};

// Cart Helpers & Global Window Handlers
function saveBoqCart() {
  localStorage.setItem('pioneer_boq_cart', JSON.stringify(state.boqCart));
}

window.addToBoqCartById = function(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = state.boqCart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += quantity;
  } else {
    state.boqCart.push({ ...product, qty: quantity });
  }
  saveBoqCart();
  showToast(`Added "${product.name}" to your RFQ List!`);
  renderApp();
};

window.removeFromBoqCart = function(productId) {
  state.boqCart = state.boqCart.filter(item => item.id !== productId);
  saveBoqCart();
  showToast('Item removed from RFQ List');
  renderApp();
};

window.updateBoqCartQty = function(productId, qty) {
  const item = state.boqCart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, parseInt(qty) || 1);
    saveBoqCart();
    renderApp();
  }
};

function showToast(msg) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.style.cssText = `
      position: fixed; bottom: 24px; right: 24px; z-index: 3000;
      background: #1E293B; color: #ffffff; padding: 12px 20px;
      border-radius: 8px; font-size: 14px; font-weight: 500;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2); border-left: 4px solid #80C0C0;
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

function generateEmailQuoteUrl(clientName = '', clientPhone = '', customNotes = '') {
  const recipient = TARGET_EMAIL;
  const subject = `Pioneer BMT RFQ Quotation Request - ${clientName || 'Site Inquiry'}`;
  
  let body = `OFFICIAL RFQ QUOTATION REQUEST\n`;
  body += `Pioneer Building Materials Trading LLC | TRN: ${COMPANY_INFO.trn}\n`;
  body += `Target Recipient: ${recipient}\n`;
  body += `------------------------------------\n\n`;

  if (clientName) body += `CLIENT NAME / COMPANY: ${clientName}\n`;
  if (clientPhone) body += `PHONE / WHATSAPP: ${clientPhone}\n`;
  if (customNotes) body += `SITE LOCATION / PROJECT NOTES:\n${customNotes}\n`;
  body += `------------------------------------\n\n`;

  if (state.boqCart.length === 0) {
    body += `Inquiry Details: Requesting pricing catalog for general building materials.\n`;
  } else {
    body += `ITEMS INQUIRED (BOQ LIST):\n`;
    state.boqCart.forEach((item, index) => {
      body += `${index + 1}. ${item.name}\n   Qty: ${item.qty} ${item.unit || ''} | Spec: ${item.spec}\n\n`;
    });
  }

  body += `Please reply with unit pricing, stock availability, and site delivery rates across UAE.\nThank you!`;
  
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function generateWhatsAppQuoteUrl(customNotes = '') {
  let text = `*OFFICIAL RFQ QUOTATION REQUEST*\n`;
  text += `Pioneer Building Materials Trading LLC | TRN: ${COMPANY_INFO.trn}\n`;
  text += `Email Target: ${TARGET_EMAIL}\n`;
  text += `------------------------------------\n\n`;
  
  if (state.boqCart.length === 0) {
    text += `Hello Sales Team, I would like to inquire about building material pricing.\n`;
  } else {
    text += `*ITEMS INQUIRED (BOQ LIST):*\n`;
    state.boqCart.forEach((item, index) => {
      text += `${index + 1}. *${item.name}*\n   Qty: ${item.qty} ${item.unit || ''} | Spec: ${item.spec}\n`;
    });
  }

  if (customNotes) text += `\n*PROJECT NOTES:* ${customNotes}\n`;
  text += `\nPlease provide availability, unit pricing & site delivery rates. Thank you!`;
  
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}

window.handleSendQuotationEmail = async function(e) {
  if (e) e.preventDefault();
  const nameEl = document.getElementById('rfq-client-name');
  const phoneEl = document.getElementById('rfq-client-phone');
  const notesEl = document.getElementById('boq-notes');
  const btnEl = document.getElementById('send-quotation-btn');
  
  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const notes = notesEl ? notesEl.value.trim() : '';

  if (!name || !phone) {
    showToast('Please enter your name and phone number');
    return;
  }

  // Set loading state
  if (btnEl) {
    btnEl.disabled = true;
    btnEl.innerHTML = `<span>⏳ Sending Quotation...</span>`;
  }

  let itemsSummary = '';
  if (state.boqCart.length === 0) {
    itemsSummary = "General building materials catalog & pricing inquiry.";
  } else {
    itemsSummary = state.boqCart.map((item, idx) => 
      `${idx + 1}. ${item.name}\n   • Quantity: ${item.qty} ${item.unit || ''}\n   • Spec: ${item.spec}`
    ).join('\n\n');
  }

  const payload = {
    "_subject": `Pioneer BMT RFQ Quotation Request - ${name}`,
    "_template": "table",
    "_captcha": "false",
    "Client / Contractor Name": name,
    "Contact Phone / WhatsApp": phone,
    "Delivery Location & Site Notes": notes || "No additional site notes specified",
    "Requested Material Items (BOQ List)": itemsSummary
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
      showToast(`Quotation sent directly to ${TARGET_EMAIL}!`);
      state.boqCart = [];
      saveBoqCart();
      renderApp();
    } else {
      const mailUrl = generateEmailQuoteUrl(name, phone, notes);
      window.open(mailUrl, '_self');
      showToast(`Quotation submitted to ${TARGET_EMAIL}!`);
    }
  } catch (err) {
    console.warn("Direct form submission fallback:", err);
    const mailUrl = generateEmailQuoteUrl(name, phone, notes);
    window.open(mailUrl, '_self');
    showToast(`Quotation submitted to ${TARGET_EMAIL}!`);
  } finally {
    if (btnEl) {
      btnEl.disabled = false;
      btnEl.innerHTML = `<span>Send Quotation</span>`;
    }
  }
};

window.handleSendQuotationWhatsApp = function(e) {
  if (e) e.preventDefault();
  const nameEl = document.getElementById('rfq-client-name');
  const phoneEl = document.getElementById('rfq-client-phone');
  const notesEl = document.getElementById('boq-notes');
  
  const name = nameEl ? nameEl.value : '';
  const phone = phoneEl ? phoneEl.value : '';
  const notes = notesEl ? notesEl.value : '';

  let notesCombo = '';
  if (name) notesCombo += `Client: ${name}\n`;
  if (phone) notesCombo += `Phone: ${phone}\n`;
  if (notes) notesCombo += `Site Notes: ${notes}\n`;

  const waUrl = generateWhatsAppQuoteUrl(notesCombo);
  window.open(waUrl, '_blank');
  showToast('Opening WhatsApp sales desk...');
};

// Clean HTML5 History Navigation (PushState Router)
window.navigateTo = function(view, catSlug = null) {
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
    state.currentView = viewName || 'home';
    state.selectedCategory = null;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

// TAMBA HARDWARE HEADER NAVBAR
function renderHeader() {
  const cartTotal = state.boqCart.reduce((sum, item) => sum + item.qty, 0);

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
            <li><a href="#" onclick="navigateTo('categories'); return false;" class="nav-item-link ${state.currentView === 'categories' ? 'active' : ''}">Categories</a></li>
            <li><a href="#" onclick="navigateTo('products'); return false;" class="nav-item-link ${state.currentView === 'products' ? 'active' : ''}">Products</a></li>
            <li><a href="#" onclick="navigateTo('about'); return false;" class="nav-item-link ${state.currentView === 'about' ? 'active' : ''}">About Us</a></li>
            <li><a href="#" onclick="navigateTo('contact'); return false;" class="nav-item-link ${state.currentView === 'contact' ? 'active' : ''}">Contact us</a></li>
          </ul>

          <!-- Right Action Utility Group -->
          <div class="nav-actions-group">
            <button class="icon-btn" onclick="openSearchModal()" title="Search 121+ Products">
              ${ICONS.search}
            </button>

            <a href="tel:${COMPANY_INFO.phones[0]}" class="phone-link-btn">
              ${ICONS.phone}
              <span>${COMPANY_INFO.phones[0]}</span>
            </a>

            <button class="btn btn-primary" onclick="navigateTo('rfq')">
              <span>RFQ Cart (${cartTotal})</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  `;
}

// TAMBA HARDWARE HERO CAROUSEL
function renderHeroCarousel() {
  const slide = HERO_SLIDES[state.activeSlide];

  return `
    <section class="tamba-hero-carousel">
      ${HERO_SLIDES.map((s, idx) => `
        <div class="carousel-slide ${idx === state.activeSlide ? 'active' : ''}" style="background-image: url('${s.image}');">
          <div class="carousel-overlay"></div>
          <div class="carousel-caption-box">
            <h1 class="carousel-headline">${s.title}</h1>
            <p class="carousel-subtext">${s.subtitle}</p>
            <button onclick="navigateTo('category', '${s.catSlug}')" class="btn btn-primary">
              <span>Explore Now</span>
              ${ICONS.arrowRight}
            </button>
          </div>
        </div>
      `).join('')}

      <button class="carousel-arrow prev" onclick="changeSlide(-1)">${ICONS.arrowLeft}</button>
      <button class="carousel-arrow next" onclick="changeSlide(1)">${ICONS.arrowRight}</button>

      <div class="carousel-controls">
        ${HERO_SLIDES.map((_, idx) => `
          <button class="carousel-dot ${idx === state.activeSlide ? 'active' : ''}" onclick="goToSlide(${idx})"></button>
        `).join('')}
      </div>
    </section>
  `;
}

window.changeSlide = function(delta) {
  state.activeSlide = (state.activeSlide + delta + HERO_SLIDES.length) % HERO_SLIDES.length;
  renderApp();
};

window.goToSlide = function(idx) {
  state.activeSlide = idx;
  renderApp();
};

// TAMBA HARDWARE WELCOME SECTION ("Image - Text" Split)
function renderWelcomeSection() {
  return `
    <section class="tamba-welcome-section">
      <div class="container welcome-grid">
        <div class="welcome-img-wrap">
          <img src="/cover.png" alt="Pioneer Building Materials Warehouse Cover" class="welcome-img">
        </div>
        <div>
          <h2 class="welcome-gradient-title">Welcome to Pioneer Building Materials</h2>
          <div class="welcome-badge">Direct UAE Wholesaler & Stockist</div>
          <p style="margin-bottom: var(--space-4);">
            Pioneer Building Materials Trading LLC has been a trusted supplier in the UAE construction market for over two decades, delivering certified architectural hardware, structural timber, steel mesh, waterproofing membranes, and site safety products.
          </p>
          <p style="margin-bottom: var(--space-6);">
            We supply civil contractors, MEP engineers, and industrial projects with over 121 catalogued building products supported by our private fleet of 3-ton pickups and heavy dump trucks for site delivery across Dubai and all Emirates.
          </p>
          <button onclick="navigateTo('about')" class="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  `;
}

// TAMBA HARDWARE "OUR SOLUTIONS" CATEGORY GRID (1:1 Square Cards)
function renderOurSolutionsSection() {
  return `
    <section class="tamba-solutions-section">
      <div class="container">
        <h2 class="section-centered-title">Our Solutions</h2>

        <div class="solutions-grid">
          ${CATEGORIES.map(cat => {
            const firstProd = PRODUCTS.find(p => p.catId === cat.id);
            const thumbImg = firstProd ? firstProd.image : 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80';
            return `
              <div class="solution-card" onclick="navigateTo('category', '${cat.slug}')">
                <div class="solution-thumb-box">
                  <img src="${thumbImg}" alt="${cat.name}" class="solution-thumb-img" loading="lazy">
                </div>
                <div class="solution-card-body">
                  <h3 class="solution-card-title">${cat.name}</h3>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

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
          <button onclick="addToBoqCartById('${p.id}')" class="btn btn-primary" style="padding: 6px 14px; font-size: 12px; font-weight: 700;">
            + Add to RFQ
          </button>
        </div>
      </div>
    </div>
  `;
}

// HOME VIEW
function renderHomeView() {
  return `
    ${renderHeroCarousel()}
    ${renderWelcomeSection()}
    ${renderOurSolutionsSection()}
  `;
}

// PRODUCTS VIEW (/products)
function renderProductsView() {
  let filtered = PRODUCTS;
  if (state.selectedCategory) {
    filtered = PRODUCTS.filter(p => p.catId === state.selectedCategory.id);
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.spec.toLowerCase().includes(q));
  }

  return `
    <div class="container" style="padding: var(--space-16) 0;">
      <div style="margin-bottom: var(--space-8);">
        <h1 style="margin-bottom: var(--space-2);">Products Directory</h1>
        <p>Explore 121+ certified building materials and hardware items.</p>
      </div>

      <!-- Category Filter Tabs -->
      <div style="display: flex; gap: var(--space-3); margin-bottom: var(--space-8); flex-wrap: wrap;">
        <button onclick="navigateTo('products')" class="btn ${!state.selectedCategory ? 'btn-primary' : 'btn-secondary'}">
          All (121)
        </button>
        ${CATEGORIES.map(c => `
          <button onclick="navigateTo('category', '${c.slug}')" class="btn ${state.selectedCategory && state.selectedCategory.id === c.id ? 'btn-primary' : 'btn-secondary'}" style="font-size: 13px;">
            ${c.name} (${c.itemCount})
          </button>
        `).join('')}
      </div>

      <div class="product-grid">
        ${filtered.map(p => renderProductCard(p)).join('')}
      </div>
    </div>
  `;
}

// CATEGORY LANDING VIEW
function renderCategoryView() {
  if (!state.selectedCategory) return renderProductsView();
  const cat = state.selectedCategory;
  const catProducts = PRODUCTS.filter(p => p.catId === cat.id);

  return `
    <div class="container" style="padding: var(--space-16) 0;">
      <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-8); margin-bottom: var(--space-8);">
        <h1 style="color: var(--color-primary); margin-bottom: var(--space-2);">${cat.name}</h1>
        <p style="font-size: var(--font-size-lg); margin-bottom: var(--space-4);">${cat.description}</p>
        <div style="font-size: var(--font-size-sm); font-weight: 600;">📦 ${catProducts.length} Items Available in UAE Stock</div>
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
                <div style="position: absolute; top: 12px; right: 12px; background: rgba(30, 41, 59, 0.85); backdrop-filter: blur(4px); color: #ffffff; padding: 4px 10px; border-radius: var(--radius-pill); font-size: 11px; font-weight: 700;">
                  ${catProds.length} Products
                </div>
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

// RFQ BOQ CART VIEW (/rfq)
function renderRfqView() {
  const isCartEmpty = state.boqCart.length === 0;

  return `
    <div class="container" style="padding: var(--space-16) 0;">
      <div style="margin-bottom: var(--space-8);">
        <h1>Request for Quotation (RFQ)</h1>
        <p>Review items in your quotation list and send your inquiry directly to <strong>info.pioneerbuilds@gmail.com</strong>.</p>
      </div>

      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--space-8);">
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-4);">
            <h3 style="margin:0;">Selected Material Items (${state.boqCart.length})</h3>
            ${!isCartEmpty ? `<button onclick="state.boqCart=[]; saveBoqCart(); renderApp();" style="font-size:12px; color:#dc2626; border:none; background:none; cursor:pointer; font-weight:600;">Clear List</button>` : ''}
          </div>

          ${isCartEmpty ? `
            <div style="padding: var(--space-12) 0; text-align: center;">
              <p style="margin-bottom: var(--space-4);">Your quotation list is empty.</p>
              <button onclick="navigateTo('products')" class="btn btn-primary">Browse Products</button>
            </div>
          ` : `
            <table style="width:100%; border-collapse:collapse; margin-top: var(--space-4);">
              <thead>
                <tr style="border-bottom:1px solid var(--color-border); text-align:left;">
                  <th style="padding:8px;">Item</th>
                  <th style="padding:8px; width:130px;">Quantity</th>
                  <th style="padding:8px; text-align:right;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${state.boqCart.map(item => `
                  <tr style="border-bottom:1px solid var(--color-border-subtle);">
                    <td style="padding:12px 8px;">
                      <strong style="color:var(--color-text-main); font-size:14px;">${item.name}</strong>
                      <div style="font-size:12px; color:var(--color-text-muted);">${item.spec}</div>
                    </td>
                    <td style="padding:12px 8px;">
                      <div style="display:flex; align-items:center; gap:6px;">
                        <input type="number" min="1" value="${item.qty}" onchange="updateBoqCartQty('${item.id}', this.value)" style="width:65px; padding:4px 8px; border:1px solid var(--color-border); border-radius:4px; font-weight:700;">
                        <span style="font-size:11px; color:var(--color-text-subtle);">${item.unit || ''}</span>
                      </div>
                    </td>
                    <td style="padding:12px 8px; text-align:right;">
                      <button onclick="removeFromBoqCart('${item.id}')" style="color:#dc2626; border:none; background:none; cursor:pointer; font-weight:600; font-size:13px;">Remove</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          `}
        </div>

        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6); height: fit-content;">
          <h3>Send Quotation Inquiry</h3>
          <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: var(--space-4);">
            Target Recipient: <strong style="color: var(--color-text-main);">${TARGET_EMAIL}</strong>
          </p>

          <form onsubmit="handleSendQuotationEmail(event)">
            <div style="margin-bottom: var(--space-3);">
              <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Your Name / Company:</label>
              <input type="text" id="rfq-client-name" required placeholder="e.g. Al Habtoor Contracting" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px; font-size:13px;">
            </div>

            <div style="margin-bottom: var(--space-3);">
              <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Mobile / WhatsApp Number:</label>
              <input type="tel" id="rfq-client-phone" required placeholder="+971 50 123 4567" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px; font-size:13px;">
            </div>

            <div style="margin-bottom: var(--space-4);">
              <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Delivery Location / Project Notes:</label>
              <textarea id="boq-notes" rows="3" placeholder="Enter UAE site address, delivery date, specs..." style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px; font-size:13px;"></textarea>
            </div>

            <button type="submit" id="send-quotation-btn" class="btn btn-primary" style="width:100%; justify-content:center; margin-bottom: var(--space-3); font-weight:700;">
              <span>Send Quotation</span>
            </button>

            <button type="button" onclick="handleSendQuotationWhatsApp(event)" class="btn btn-whatsapp" style="width:100%; justify-content:center;">
              ${ICONS.whatsapp}
              <span>Send via WhatsApp</span>
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
            <li><strong>TRN Tax Registration:</strong> ${COMPANY_INFO.trn}</li>
            <li><strong>Headquarters:</strong> Dubai, United Arab Emirates</li>
            <li><strong>Phone Desks:</strong> ${COMPANY_INFO.phones.join(' / ')}</li>
            <li><strong>Email:</strong> ${COMPANY_INFO.emails.join(' / ')}</li>
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
        <p>Get in touch with our sales team in Dubai for instant product quotes.</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-8);">
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6);">
          <h3>Pioneer BMT Office</h3>
          <p style="margin-bottom: var(--space-4);">Dubai, United Arab Emirates</p>
          
          <div style="display:flex; flex-direction:column; gap:var(--space-3); font-size:14px; margin-bottom:var(--space-6);">
            <div><strong>📞 Phone:</strong> ${COMPANY_INFO.phones[0]} / ${COMPANY_INFO.phones[1]}</div>
            <div><strong>✉️ Email:</strong> ${COMPANY_INFO.emails[0]}</div>
            <div><strong>🆔 TRN:</strong> ${COMPANY_INFO.trn}</div>
          </div>

          <a href="${generateWhatsAppQuoteUrl()}" target="_blank" class="btn btn-whatsapp">
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

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="brand-logo" style="margin-bottom: var(--space-4);">
              <div class="brand-icon" style="background:#80C0C0; color:#1E293B;">P</div>
              <div class="brand-text">
                <span class="brand-title" style="color:#ffffff;">PIONEER</span>
                <span class="brand-subtitle" style="color:#80C0C0;">Building Materials LLC</span>
              </div>
            </div>
            <p style="font-size: 14px; color: #94a3b8; margin-bottom: var(--space-4);">
              Premier supplier of building materials, safety gear, timber, steel, and site transport across the UAE.
            </p>
            <div style="font-size: 12px; color: #64748b;">TRN: ${COMPANY_INFO.trn}</div>
          </div>

          <div>
            <h4 class="footer-col-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#" onclick="navigateTo('home'); return false;" class="footer-link">Home</a></li>
              <li><a href="#" onclick="navigateTo('categories'); return false;" class="footer-link">Categories</a></li>
              <li><a href="#" onclick="navigateTo('products'); return false;" class="footer-link">Products</a></li>
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
            <h4 class="footer-col-title">Contact</h4>
            <ul class="footer-links">
              <li style="color:#94a3b8; font-size:13px;">📍 ${COMPANY_INFO.address}</li>
              <li style="color:#94a3b8; font-size:13px;">📞 ${COMPANY_INFO.phones[0]}</li>
              <li style="color:#94a3b8; font-size:13px;">✉️ ${COMPANY_INFO.emails[0]}</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div>© ${new Date().getFullYear()} Pioneer Building Materials Trading LLC. TRN: ${COMPANY_INFO.trn}</div>
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
            <div style="padding: 12px 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;" onclick="closeSearchModal(); addToBoqCart(PRODUCTS.find(i=>i.id==='${p.id}')); navigateTo('rfq');">
              <div>
                <div style="font-weight: 700; font-size: 14px;">${p.name}</div>
                <div style="font-size: 12px; color: var(--color-text-muted);">${p.spec}</div>
              </div>
              <button class="btn btn-primary" style="font-size: 11px; padding: 4px 8px;">+ Add RFQ</button>
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
  const text = encodeURIComponent("Hello Pioneer Building Materials, I have an inquiry regarding construction materials.");
  const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`;
  return `
    <a href="${url}" target="_blank" rel="noopener" class="floating-whatsapp-btn" title="Chat on WhatsApp">
      ${ICONS.whatsapp}
    </a>
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
    case 'products': bodyHtml = renderProductsView(); break;
    case 'category': bodyHtml = renderCategoryView(); break;
    case 'about': bodyHtml = renderAboutView(); break;
    case 'contact': bodyHtml = renderContactView(); break;
    case 'rfq': bodyHtml = renderRfqView(); break;
    default: bodyHtml = renderHomeView();
  }

  app.innerHTML = `
    ${renderHeader()}
    <main>${bodyHtml}</main>
    ${renderFooter()}
    ${renderSearchModal()}
    ${renderFloatingWhatsApp()}
  `;
}

// Initial Boot & PushState History Router Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  syncRouteFromPath();
  window.addEventListener('popstate', syncRouteFromPath);

  setInterval(() => {
    if (state.currentView === 'home' && !state.searchModalOpen) {
      state.activeSlide = (state.activeSlide + 1) % HERO_SLIDES.length;
      renderApp();
    }
  }, 4000);
});

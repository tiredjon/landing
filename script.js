// ─────────────────────────────────────────
//  MENU DATA
//  Замени фото и цены на реальные
// ─────────────────────────────────────────
// tab → массив ключей из menuData, которые показываются
const tabCategories = {
  all:     ['soups', 'burgers', 'asian', 'hotsnacks', 'coldsnacks', 'steaks'],
  drinks:  ['drinks'],
  alcohol: ['alcohol'],
  hookah:  ['hookah'],
};

const menuData = {
  // ── ОСНОВНОЕ МЕНЮ ──
  soups: {
    title: 'Супы', tab: 'all',
    items: [
      { id: 1,  name: 'Том Ям',               desc: 'Кокосовое молоко, креветки, грибы',   price: 65000,  img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=200&q=60' },
      { id: 2,  name: 'Солянка',              desc: 'Мясная сборная с оливками',            price: 55000,  img: 'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=200&q=60' },
      { id: 3,  name: 'Суп-пюре из тыквы',   desc: 'Сливки, тыква, имбирь',               price: 48000,  img: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=200&q=60' },
    ],
  },
  burgers: {
    title: 'Бургеры и Сэндвич', tab: 'all',
    items: [
      { id: 4,  name: 'Смоки Бургер',         desc: 'Говядина, бекон, чеддер, соус BBQ',   price: 89000,  img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=60' },
      { id: 5,  name: 'Чикен Бургер',         desc: 'Куриное филе, салат, томат',           price: 72000,  img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=60' },
      { id: 6,  name: 'Клаб Сэндвич',         desc: 'Тост, ветчина, сыр, яйцо',            price: 60000,  img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&q=60' },
    ],
  },
  asian: {
    title: 'Паназиатское', tab: 'all',
    items: [
      { id: 7,  name: 'Суши-сет "Дракон"',   desc: '8 роллов, соевый соус, васаби',        price: 145000, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&q=60' },
      { id: 8,  name: 'Пад Тай',              desc: 'Рисовая лапша, креветки, арахис',      price: 78000,  img: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=200&q=60' },
      { id: 9,  name: 'Вок с говядиной',      desc: 'Овощи, соус терияки, рис',             price: 82000,  img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&q=60' },
    ],
  },
  hotsnacks: {
    title: 'Горячие закуски', tab: 'all',
    items: [
      { id: 10, name: 'Куриные крылышки',     desc: 'Острые, соус ранч',                    price: 68000,  img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=200&q=60' },
      { id: 11, name: 'Сырные шарики',        desc: 'Моцарелла в панировке',                price: 52000,  img: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=200&q=60' },
      { id: 12, name: 'Картофель фри',        desc: 'Хрустящий, с соусом',                  price: 35000,  img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&q=60' },
    ],
  },
  coldsnacks: {
    title: 'Холодные закуски', tab: 'all',
    items: [
      { id: 13, name: 'Сырная тарелка',       desc: 'Ассорти сыров, мёд, орехи',            price: 95000,  img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=60' },
      { id: 14, name: 'Брускетты с лососем',  desc: 'Крем-сыр, укроп',                      price: 72000,  img: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=200&q=60' },
      { id: 15, name: 'Карпаччо',             desc: 'Говядина, пармезан, руккола',           price: 110000, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=60' },
    ],
  },
  steaks: {
    title: 'Стейки', tab: 'all',
    items: [
      { id: 16, name: 'Рибай',                desc: '300г, соус перечный, гарнир',           price: 260000, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=60' },
      { id: 17, name: 'Нью-Йорк Стрип',       desc: '250г, соус грибной, салат',             price: 220000, img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=200&q=60' },
      { id: 18, name: 'Медальоны из телятины', desc: '200г, овощи гриль',                    price: 195000, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=60' },
    ],
  },

  // ── НАПИТКИ ──
  drinks: {
    title: 'Напитки', tab: 'drinks',
    items: [
      { id: 19, name: 'Свежевыжатый апельсин', desc: '300мл',                               price: 32000,  img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&q=60' },
      { id: 20, name: 'Лимонад Мята-Лайм',     desc: '500мл, авторский',                    price: 38000,  img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&q=60' },
      { id: 21, name: 'Матча Латте',            desc: '300мл, миндальное молоко',             price: 42000,  img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=200&q=60' },
      { id: 22, name: 'Американо',              desc: '200мл',                               price: 22000,  img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200&q=60' },
      { id: 23, name: 'Капучино',               desc: '300мл',                               price: 28000,  img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&q=60' },
    ],
  },

  // ── АЛКОГОЛЬ ──
  alcohol: {
    title: 'Алкоголь', tab: 'alcohol',
    items: [
      { id: 24, name: 'Пиво Heineken',          desc: '500мл, бутылка',                      price: 45000,  img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=200&q=60' },
      { id: 25, name: 'Пиво Hoegaarden',        desc: '500мл, бутылка',                      price: 52000,  img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=200&q=60' },
      { id: 26, name: 'Вино красное бокал',      desc: 'Каберне Совиньон, 150мл',             price: 65000,  img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&q=60' },
      { id: 27, name: 'Вино белое бокал',        desc: 'Совиньон Блан, 150мл',                price: 60000,  img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=200&q=60' },
      { id: 28, name: 'Виски Cola',              desc: 'Jack Daniel\'s, 50мл + cola',         price: 85000,  img: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=200&q=60' },
    ],
  },

  // ── КАЛЬЯНЫ ──
  hookah: {
    title: 'Кальяны', tab: 'hookah',
    items: [
      { id: 29, name: 'Классический кальян',    desc: 'Одинарный, любой табак',               price: 150000, img: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=200&q=60' },
      { id: 30, name: 'Двойной кальян',         desc: 'Два шланга, два вкуса',                price: 220000, img: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=200&q=60' },
      { id: 31, name: 'Кальян с фруктом',       desc: 'Чаша в апельсине или ананасе',         price: 180000, img: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=200&q=60' },
      { id: 32, name: 'Табак Darkside',         desc: 'за порцию, выбор вкуса',              price: 25000,  img: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=200&q=60' },
    ],
  },
};

// ─────────────────────────────────────────
//  CART STATE
// ─────────────────────────────────────────
// Structure: { [itemId]: { name, price, qty } }
const cart = {};

// ─────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  window.scrollTo(0, 0);

  if (id === 'menu') {
    currentTab = 'all';
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.cat-tab').classList.add('active');
    renderCatGrid(tabCategories['all']);
    document.getElementById('items-view').classList.remove('active');
  }
}

// ─────────────────────────────────────────
//  MENU — CATEGORY TABS
// ─────────────────────────────────────────
let currentTab = 'all';

function filterCat(tab, btn) {
  currentTab = tab;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.getElementById('items-view').classList.remove('active');

  const keys = tabCategories[tab] || tabCategories['all'];

  // Если в табе одна категория — сразу показываем список позиций
  if (keys.length === 1) {
    const cat = menuData[keys[0]];
    renderItems(cat.title, cat.items);
    return;
  }

  // Иначе рендерим карточки категорий
  renderCatGrid(keys);
}

function renderCatGrid(keys) {
  const grid = document.getElementById('cat-grid');
  grid.style.display = 'grid';
  grid.innerHTML = keys.map(key => {
    const cat = menuData[key];
    const img = cat.items[0]?.img || '';
    return `
      <div class="cat-card" onclick="showItems('${key}')">
        <img src="${img}" alt="${cat.title}" loading="lazy">
        <div class="cat-card-overlay">
          <span class="cat-card-title">${cat.title}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────
//  MENU — SEARCH
// ─────────────────────────────────────────
function searchMenu(query) {
  const val = query.trim().toLowerCase();

  if (!val) {
    const keys = tabCategories[currentTab] || tabCategories['all'];
    if (keys.length === 1) {
      const cat = menuData[keys[0]];
      renderItems(cat.title, cat.items);
    } else {
      document.getElementById('items-view').classList.remove('active');
      renderCatGrid(keys);
    }
    return;
  }

  const results = [];
  for (const key in menuData) {
    menuData[key].items.forEach(item => {
      if (item.name.toLowerCase().includes(val) || item.desc.toLowerCase().includes(val)) {
        results.push(item);
      }
    });
  }

  renderItems('Результаты поиска', results);
}

// ─────────────────────────────────────────
//  MENU — RENDER ITEMS
// ─────────────────────────────────────────
function showItems(catKey) {
  const cat = menuData[catKey];
  renderItems(cat.title, cat.items);
}

function renderItems(title, items) {
  document.getElementById('cat-grid').style.display = 'none';
  document.getElementById('items-view').classList.add('active');
  document.getElementById('items-view-title').textContent = title;

  const list = document.getElementById('items-list');

  if (!items.length) {
    list.innerHTML = '<div style="padding:30px;text-align:center;color:rgba(255,255,255,0.35);font-size:14px;">Ничего не найдено</div>';
    return;
  }

  list.innerHTML = items.map(item => `
    <div class="menu-item">
      <img class="item-img" src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
        <div class="item-price">${item.price.toLocaleString('ru-RU')} сум</div>
      </div>
      <button class="add-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price})" aria-label="Добавить ${item.name}">+</button>
    </div>
  `).join('');
}

function backToCats() {
  document.getElementById('items-view').classList.remove('active');
  const keys = tabCategories[currentTab] || tabCategories['all'];
  if (keys.length === 1) {
    // Таб с одной категорией — некуда возвращаться, идём на all
    currentTab = 'all';
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.cat-tab').classList.add('active');
    renderCatGrid(tabCategories['all']);
  } else {
    renderCatGrid(keys);
  }
}

// ─────────────────────────────────────────
//  CART — ADD / UPDATE
// ─────────────────────────────────────────
function addToCart(id, name, price) {
  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { name, price, qty: 1 };
  }
  updateCartBar();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartBar();
  renderCartModal();
}

// ─────────────────────────────────────────
//  CART — BAR
// ─────────────────────────────────────────
function updateCartBar() {
  const total = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count').textContent = total;

  const bar = document.getElementById('cart-bar');
  bar.classList.toggle('visible', total > 0);
}

// ─────────────────────────────────────────
//  CART — MODAL
// ─────────────────────────────────────────
function openCart() {
  renderCartModal();
  document.getElementById('cart-modal').classList.add('open');
}

function closeCart() {
  document.getElementById('cart-modal').classList.remove('open');
}

function closeCartIfOverlay(event) {
  if (event.target === document.getElementById('cart-modal')) {
    closeCart();
  }
}

function renderCartModal() {
  const container = document.getElementById('cart-items-container');
  const totalRow  = document.getElementById('cart-total-row');
  const keys      = Object.keys(cart);

  if (!keys.length) {
    container.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
    totalRow.style.display = 'none';
    return;
  }

  let total = 0;

  container.innerHTML = keys.map(id => {
    const item    = cart[id];
    const subtotal = item.price * item.qty;
    total += subtotal;

    return `
      <div class="cart-item">
        <span class="cart-item-name">${item.name}</span>
        <div class="cart-qty-wrap">
          <button class="qty-btn" onclick="changeQty(${id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${id}, 1)">+</button>
        </div>
        <span class="cart-item-price">${subtotal.toLocaleString('ru-RU')} сум</span>
      </div>
    `;
  }).join('');

  totalRow.style.display = 'flex';
  document.getElementById('cart-total-amount').textContent = total.toLocaleString('ru-RU') + ' сум';
}
// ========== DADOS DO CARDÁPIO ==========
const menuData = {
  entradas: [
    {
      id: 1,
      name: "Bruschetta di Pomodoro",
      description: "Pães artesanais tostados com tomates frescos, manjericão orgânico, alho e azeite extra virgem.",
      price: 32.90,
      image: "https://i.pinimg.com/1200x/75/4a/51/754a5189b78d548d4ace20ab92b90ac5.jpg"
    },
    {
      id: 2,
      name: "Carpaccio de Camarão",
      description: "Camarões frescos marinados com limão siciliano, azeite, raspas de gengibre e flor de sal.",
      price: 48.90,
      image: "https://i.pinimg.com/736x/ac/a7/5d/aca75de824a8a3e483f8efe3e8aeda47.jpg"
    },
    {
      id: 3,
      name: "Pastéis de Queijo Canastra",
      description: "Pastéis crocantes recheados com queijo canastra e goiabada artesanal, acompanha geleia de pimenta.",
      price: 28.90,
      image: "https://i.pinimg.com/1200x/47/53/7e/47537e0480a2c3322e23a7972eda4985.jpg"
    }
  ],
  principais: [
    {
      id: 4,
      name: "Filé ao Molho Madeira",
      description: "Filé mignon grelhado ao molho madeira, purê de batata trufado e legumes grelhados no azeite.",
      price: 78.90,
      image: "https://i.pinimg.com/736x/ce/8d/34/ce8d34b418ac5e92a6d12300deb68854.jpg"
    },
    {
      id: 5,
      name: "Salmão com Crosta de Gergelim",
      description: "Salmão grelhado com crosta de gergelim preto e branco, risoto de limão siciliano.",
      price: 82.90,
      image: "https://i.pinimg.com/736x/4d/43/1b/4d431b0b59c2a153c6e763a8b5c66960.jpg"
    },
    {
      id: 6,
      name: "Risoto de Cogumelos Selvagens",
      description: "Risoto cremoso com cogumelos shimeji, shiitake e paris, finalizado com parmesão e salsinha.",
      price: 62.90,
      image: "https://i.pinimg.com/1200x/52/64/b5/5264b5825e9a047f8397b84152ace0e8.jpg"
    },
    {
      id: 7,
      name: "Frango à Parmegiana",
      description: "Filé de frango empanado, molho pomarola caseiro, mussarela gratinada e acompanhamentos.",
      price: 54.90,
      image: "https://i.pinimg.com/1200x/31/06/5b/31065bd9b7166b43f140f6f08752fa39.jpg"
    }
  ],
  sobremesas: [
    {
      id: 8,
      name: "Pudim de Leite Condensado",
      description: "Pudim cremoso com calda de caramelo artesanal, finalizado com cereja.",
      price: 18.90,
      image: "http://images.unsplash.com/photo-1646068182766-fe213f3f08d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxQdWRpbSUyMGRlJTIwTGVpdGUlMjBDb25kZW5zYWRvfGVufDB8fDB8fHww"
    },
    {
      id: 9,
      name: "Tartelette de Limão",
      description: "Massa amanteigada, mousse de limão siciliano e merengue italiano queimado.",
      price: 22.90,
      image: "https://plus.unsplash.com/premium_photo-1716480452525-0c7ccaed7bef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGFydGVsZXR0ZSUyMGRlJTIwTGltJUMzJUEzb3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 10,
      name: "Brownie Affogato",
      description: "Brownie quente de chocolate belga com sorvete de creme e calda de café espresso.",
      price: 26.90,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJvd25pZSUyMEFmZm9nYXRvfGVufDB8fDB8fHww"
    }
  ],
  bebidas: [
    {
      id: 11,
      name: "Suco Natural da Estação",
      description: "Laranja, limão, melancia, kiwi, abacaxi com hortelã ou couve (escolha sua combinação).",
      price: 14.90,
      image: "https://i.pinimg.com/736x/ec/d0/d1/ecd0d19bf34ae071e2f7865d2ae005e1.jpg"
    },
    {
      id: 12,
      name: "Caipirinha Premium",
      description: "Cachaça envelhecida, limão siciliano, açúcar orgânico e gelo de coco.",
      price: 22.90,
      image: "https://i.pinimg.com/1200x/13/cf/93/13cf93133c9b2921bf15195de80d97aa.jpg"
    },
    {
      id: 13,
      name: "Vinho da Casa",
      description: "Taça de vinho tinto Malbec ou branco Chardonnay da vinícola exclusiva.",
      price: 28.90,
      image: "https://i.pinimg.com/736x/e4/8c/94/e48c9435f083ae496994bcdb0cc3b238.jpg"
    },
    {
      id: 14,
      name: "Coquetel Sem Álcool",
      description: "Mocktail de frutas vermelhas com hortelã, gengibre e água com gás.",
      price: 16.90,
      image: "https://i.pinimg.com/736x/92/5a/9c/925a9ccbb90e23f0f1123ca97d5bc63f.jpg"
    }
  ]
};

// ========== CARRINHO DE COMPRAS ==========
let cart = [];
let currentCategory = 'entradas';

function addToCart(item) {
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  }
  
  updateCartCount();
  showToast(`${item.name} adicionado ao carrinho!`);
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCartCount();
  renderCartItems();
  showToast('Item removido do carrinho');
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  if (cartModal) {
    cartModal.classList.toggle('active');
    if (cartModal.classList.contains('active')) {
      renderCartItems();
    }
  }
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  
  if (!cartItemsContainer) return;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="cart-empty">Seu carrinho está vazio</div>';
    if (cartTotalElement) cartTotalElement.textContent = 'R$ 0,00';
    return;
  }
  
  cartItemsContainer.innerHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    const cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    cartItemDiv.innerHTML = `
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
      </div>
      <div class="cart-item-actions">
        <span class="cart-quantity">${item.quantity}x</span>
        <button class="cart-remove" onclick="removeFromCart(${item.id})">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItemDiv);
  });
  
  if (cartTotalElement) {
    cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
  }
}

// ========== RENDERIZAR CARDÁPIO ==========
function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  const items = menuData[category];
  const title = document.getElementById('category-title');
  const desc = document.querySelector('.menu-description');
  
  if (!grid) return;
  
  const titles = {
    entradas: { name: 'Entradas', desc: 'Pequenas criações para começar sua experiência' },
    principais: { name: 'Pratos Principais', desc: 'Elaborados com ingredientes selecionados' },
    sobremesas: { name: 'Sobremesas', desc: 'O doce final que você merece' },
    bebidas: { name: 'Bebidas', desc: 'Seleção especial para harmonizar seu momento' }
  };
  
  if (title) title.textContent = titles[category].name;
  if (desc) desc.textContent = titles[category].desc;
  
  grid.innerHTML = '';
  
  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
    card.style.opacity = '0';
    
    card.innerHTML = `
      <div class="menu-card-image" style="background-image: url('${item.image}');"></div>
      <div class="menu-card-info">
        <div class="menu-card-header">
          <h3>${item.name}</h3>
          <span class="price">R$ ${item.price.toFixed(2)}</span>
        </div>
        <p>${item.description}</p>
        <button class="btn-add-cart" onclick="addToCart({
          id: ${item.id},
          name: '${item.name.replace(/'/g, "\\'")}',
          price: ${item.price}
        })">
          <i class="fas fa-cart-plus"></i> Adicionar ao carrinho
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      const category = item.getAttribute('data-category');
      currentCategory = category;
      renderMenu(category);
      
      const menuMain = document.querySelector('.menu-main');
      if (menuMain) {
        setTimeout(() => {
          menuMain.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  });
}

// ========== INICIALIZAR ==========
document.addEventListener('DOMContentLoaded', () => {
  console.log('🍽️ Âme - Cardápio carregado com sucesso!');
  renderMenu('entradas');
  setupNavigation();
});
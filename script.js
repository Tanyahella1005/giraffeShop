// =============================================
// Основні функції для роботи з DOM
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    initSidebar();
    initModals();
    initAuthTabs();
    initWishlist();
    initCitySelection();
    initCategoryNavigation();
    initProductButtons();
});

// =============================================
// Бокове меню
// =============================================
function initSidebar() {
    const burgerMenu = document.getElementById('burgerMenu');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.getElementById('closeSidebar');

    if (burgerMenu && sidebar && sidebarOverlay && closeSidebar) {
        burgerMenu.addEventListener('click', () => {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

// =============================================
// Модальні вікна
// =============================================
function initModals() {
    // Елементи модальних вікон
    const locationBtn = document.getElementById('locationBtn');
    const locationModal = document.getElementById('locationModal');
    const profileBtn = document.getElementById('profileBtn');
    const authModal = document.getElementById('authModal');
    const wishlistBtn = document.getElementById('wishlistBtn');
    const wishlistModal = document.getElementById('wishlistModal');
    const notificationsBtn = document.getElementById('notificationsBtn');
    const notificationsModal = document.getElementById('notificationsModal');
    const addAdBtn = document.getElementById('addAdBtn');
    const addAdModal = document.getElementById('addAdModal');
    const closeModals = document.querySelectorAll('.close-modal');

    // Відкриття модальних вікон
    if (locationBtn && locationModal) {
        locationBtn.addEventListener('click', () => locationModal.classList.add('active'));
    }
    if (profileBtn && authModal) {
        profileBtn.addEventListener('click', () => authModal.classList.add('active'));
    }
    if (wishlistBtn && wishlistModal) {
        wishlistBtn.addEventListener('click', () => wishlistModal.classList.add('active'));
    }
    if (notificationsBtn && notificationsModal) {
        notificationsBtn.addEventListener('click', () => notificationsModal.classList.add('active'));
    }
    if (addAdBtn && addAdModal) {
        addAdBtn.addEventListener('click', () => addAdModal.classList.add('active'));
    }

    // Закриття модальних вікон
    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });

    // Закриття при кліку на затемнення
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
}

// =============================================
// Авторизація/Реєстрація
// =============================================
function initAuthTabs() {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginTab && registerTab && loginForm && registerForm) {
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        });

        registerTab.addEventListener('click', () => {
            registerTab.classList.add('active');
            loginTab.classList.remove('active');
            registerForm.style.display = 'block';
            loginForm.style.display = 'none';
        });
    }
}

// =============================================
// Обране (Wishlist)
// =============================================
function initWishlist() {
    const wishlistItems = document.querySelectorAll('.wishlist-remove');

    wishlistItems.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = e.target.closest('.wishlist-item');
            item.style.opacity = '0';
            setTimeout(() => {
                item.remove();
                updateWishlistCounter(-1);
            }, 300);
        });
    });
}

function updateWishlistCounter(change) {
    const badge = document.querySelector('#wishlistBtn .icon-badge');
    if (badge) {
        const count = parseInt(badge.textContent) + change;
        badge.textContent = count > 0 ? count : '';
        if (count <= 0) badge.remove();
    } else if (change > 0) {
        const newBadge = document.createElement('span');
        newBadge.className = 'icon-badge';
        newBadge.textContent = change;
        document.querySelector('#wishlistBtn').appendChild(newBadge);
    }
}

// =============================================
// Вибір міста
// =============================================
function initCitySelection() {
    const cityItems = document.querySelectorAll('.city-item');
    const citySearch = document.getElementById('citySearch');

    cityItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.city-item').forEach(city => {
                city.classList.remove('selected');
            });
            item.classList.add('selected');

            const city = item.textContent;
            document.querySelector('.location span').textContent = city;

            setTimeout(() => {
                document.getElementById('locationModal').classList.remove('active');
            }, 500);
        });
    });

    if (citySearch) {
        citySearch.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            document.querySelectorAll('.city-item').forEach(item => {
                const cityName = item.textContent.toLowerCase();
                item.style.display = cityName.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }
}

// =============================================
// Навігація по категоріям
// =============================================
function initCategoryNavigation() {
    // Відкриття/закриття підкатегорій
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', function (e) {
            const categoryItem = this.closest('.category-item');
            const subcategories = categoryItem.querySelector('.subcategories-container');

            // Закриваємо всі інші підкатегорії
            document.querySelectorAll('.subcategories-container').forEach(sub => {
                if (sub !== subcategories) sub.classList.remove('active');
            });

            document.querySelectorAll('.category-item').forEach(item => {
                if (item !== categoryItem) item.classList.remove('active');
            });

            // Відкриваємо/закриваємо поточну
            if (subcategories.classList.contains('active')) {
                subcategories.classList.remove('active');
                categoryItem.classList.remove('active');
            } else {
                subcategories.classList.add('active');
                categoryItem.classList.add('active');
            }
        });
    });

    // Кнопка "Назад" в підкатегоріях
    document.querySelectorAll('.back-button').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const category = this.getAttribute('data-back');
            const categoryItem = document.querySelector(`.category-item[data-category="${category}"]`);
            const subcategories = categoryItem.querySelector('.subcategories-container');

            subcategories.classList.remove('active');
            categoryItem.classList.remove('active');
        });
    });
}

// =============================================
// Робота з товарами
// =============================================
function initProductButtons() {
    document.querySelectorAll('.product-btn-secondary').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const productCard = this.closest('.product-card');
            const title = productCard.querySelector('.product-title').textContent;

            updateWishlistCounter(1);
            showNotification(`Товар "${title}" додано до обраного`);
        });
    });
}

function showNotification(message) {
    // Тут можна реалізувати показ красивих сповіщень
    console.log(message); // Тимчасове рішення
    alert(message); // Або використовувати alert для демонстрації
}
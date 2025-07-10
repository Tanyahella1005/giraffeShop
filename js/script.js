//Лого

const helpToggle = document.querySelector('.help-toggle');
const helpDropdown = document.querySelector('.help-dropdown');

helpToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    helpToggle.classList.toggle('active');
});

document.addEventListener('click', () => {
    helpToggle.classList.remove('active');
});


document.addEventListener('DOMContentLoaded', () => {
    lottie.loadAnimation({
        container: document.getElementById('logo-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animations/Animation - 1751889128007.json' // або перейменуй на logo.json
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Завантаження правої анімації для банера
    const rightBannerAnimation = lottie.loadAnimation({
        container: document.getElementById('banner-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animations/Animation - 1751649172192.json'

    });

    // Додаємо новий контейнер для лівої анімації
    const banner = document.querySelector('.banner');
    const leftAnimationContainer = document.createElement('div');
    leftAnimationContainer.id = 'left-banner-animation';
    leftAnimationContainer.style.position = 'absolute';
    leftAnimationContainer.style.left = '15%';
    leftAnimationContainer.style.zIndex = '1';
    leftAnimationContainer.style.width = '300px';
    leftAnimationContainer.style.height = '200px';
    banner.prepend(leftAnimationContainer);

    // Завантаження лівої анімації
    const leftBannerAnimation = lottie.loadAnimation({
        container: document.getElementById('left-banner-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animations/Animation - 1751911064870.json'
    });


    const langBtn = document.getElementById('current-lang');
    const langDropdown = document.getElementById('lang-dropdown');
    const selector = document.querySelector('.language-selector');

    langBtn.addEventListener('click', () => {
        selector.classList.toggle('open');
    });

    langDropdown.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            const selectedLang = item.getAttribute('data-lang');
            langBtn.textContent = item.textContent + ' ▼';
            selector.classList.remove('open');

            // ТУТ МОЖНА ДОДАТИ ЛОГІКУ ЗМІНИ МОВИ
            console.log('Мова змінена на:', selectedLang);
        });
    });

    // Закриття при кліку поза меню
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
            selector.classList.remove('open');
        }
    });



    // Створення анімації листочків
    function createLeaves() {
        const leafTypes = [
            'https://i.imgur.com/QYHvQJb.png', // Листок 1
            'https://i.imgur.com/9JZvQJb.png', // Листок 2
            'https://i.imgur.com/8JXvQJb.png'  // Листок 3
        ];

        for (let i = 0; i < 15; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';

            // Випадковий тип листка
            const randomType = leafTypes[Math.floor(Math.random() * leafTypes.length)];
            leaf.style.backgroundImage = `url(${randomType})`;

            // Випадковий розмір
            const size = Math.random() * 30 + 20;
            leaf.style.width = `${size}px`;
            leaf.style.height = `${size}px`;

            // Випадкова позиція
            leaf.style.left = `${Math.random() * 100}vw`;

            // Випадкова тривалість анімації
            const duration = Math.random() * 10 + 10;
            leaf.style.animationDuration = `${duration}s`;

            // Випадковий delay
            leaf.style.animationDelay = `${Math.random() * 5}s`;

            // Випадковий напрямок падіння
            leaf.style.setProperty('--random-x', Math.random() > 0.5 ? 1 : -1);

            document.body.appendChild(leaf);
        }
    }

    createLeaves();

    // Бургер-меню
    const burgerMenu = document.getElementById('burgerMenu');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.getElementById('closeSidebar');
    const subcategoryContainers = document.querySelectorAll('.subcategories-container');
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    // ➤ Додаємо функцію для отримання ширини скролбару
    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    burgerMenu.addEventListener('click', () => {
        const isOpen = sidebar.classList.contains('active');
        const header = document.getElementById('mainHeader');
        const headerHeight = header.offsetHeight;

        if (isOpen) {
            // Закриття меню
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');

            const scrollY = parseInt(document.body.style.top || '0') * -1;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollY);
        } else {
            // Відкриття меню
            const scrollY = window.pageYOffset;
            sidebar.style.height = `calc(100vh - ${headerHeight}px)`;
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
            document.body.style.width = '100%';
        }
        
    });
    
    
    

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.body.classList.remove('menu-open');

        subcategoryContainers.forEach(container => {
            container.classList.remove('active');
        });

        const categoryItems = document.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            item.classList.remove('active');
        });
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.body.classList.remove('menu-open');

        subcategoryContainers.forEach(container => {
            container.classList.remove('active');
        });

        const categoryItems = document.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            item.classList.remove('active');
        });
    });

    // Закрити підкатегорії (на старті)
    subcategoryContainers.forEach(container => {
        container.classList.remove('active');
    });


    // Модальні вікна
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

    locationBtn.addEventListener('click', () => {
        locationModal.classList.add('active');
    });

    profileBtn.addEventListener('click', () => {
        authModal.classList.add('active');
    });

    wishlistBtn.addEventListener('click', () => {
        wishlistModal.classList.add('active');
    });

    notificationsBtn.addEventListener('click', () => {
        notificationsModal.classList.add('active');
    });

    addAdBtn.addEventListener('click', () => {
        addAdModal.classList.add('active');
    });

    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });

    // Закриття модалок при кліку на затемнення
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });

    // Переключення вкладок авторизації
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

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

    // Видалення з обраного
    document.querySelectorAll('.wishlist-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = e.target.closest('.wishlist-item');
            item.style.opacity = '0';
            setTimeout(() => {
                item.remove();
                // Оновлюємо лічильник
                const badge = document.querySelector('#wishlistBtn .icon-badge');
                if (badge) {
                    const count = parseInt(badge.textContent) - 1;
                    badge.textContent = count > 0 ? count : '';
                    if (count <= 0) badge.remove();
                }
            }, 300);
        });
    });

    // твій код відкриття/закриття модалок

    document.addEventListener('click', function (e) {
        if (
            e.target.classList.contains('fa-times') ||
            e.target.closest('.notification-remove')
        ) {
            const notification = e.target.closest('.notification-item');
            if (notification) {
                notification.remove();

                const badge = document.querySelector('#notificationsBtn .icon-badge');
                if (badge) {
                    setTimeout(() => {
                        const count = document.querySelectorAll('.notification-item').length;
                        if (count > 0) {
                            badge.textContent = count;
                            badge.style.display = 'inline-block';
                        } else {
                            badge.textContent = '';
                            badge.style.display = 'none';
                        }
                    }, 300);
                }
            }
        }
    });
      

    // Вибір міста
    document.querySelectorAll('.city-item').forEach(item => {
        item.addEventListener('click', () => {
            // Видаляємо виділення з усіх елементів
            document.querySelectorAll('.city-item').forEach(city => {
                city.classList.remove('selected');
            });

            // Додаємо виділення до вибраного елемента
            item.classList.add('selected');

            const city = item.textContent;
            document.querySelector('.location span').textContent = city;

            // Закриваємо модальне вікно через 0.5 секунди
            setTimeout(() => {
                locationModal.classList.remove('active');
            }, 500);
        });
    });

    // Пошук міст
    const citySearch = document.getElementById('citySearch');
    if (citySearch) {
        citySearch.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            document.querySelectorAll('.city-item').forEach(item => {
                const cityName = item.textContent.toLowerCase();
                if (cityName.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Відкриття/закриття підкатегорій
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', function (e) {
            const categoryItem = this.closest('.category-item');
            const subcategories = categoryItem.querySelector('.subcategories-container');

            // Закриваємо всі інші підкатегорії
            document.querySelectorAll('.subcategories-container').forEach(sub => {
                if (sub !== subcategories) {
                    sub.classList.remove('active');
                }
            });

            document.querySelectorAll('.category-item').forEach(item => {
                if (item !== categoryItem) {
                    item.classList.remove('active');
                }
            });

            // Відкриваємо/закриваємо поточну підкатегорію
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

    // Додавання товарів до обраного
    document.querySelectorAll('.product-btn-secondary').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const productCard = this.closest('.product-card');
            const title = productCard.querySelector('.product-title').textContent;
            const price = productCard.querySelector('.product-price').textContent;

            // Оновлюємо лічильник обраного
            const wishlistBadge = document.querySelector('#wishlistBtn .icon-badge');
            if (wishlistBadge) {
                const count = parseInt(wishlistBadge.textContent) + 1;
                wishlistBadge.textContent = count;
            } else {
                const newBadge = document.createElement('span');
                newBadge.className = 'icon-badge';
                newBadge.textContent = '1';
                document.querySelector('#wishlistBtn').appendChild(newBadge);
            }

            // Показуємо сповіщення про додавання
            alert(`Товар "${title}" додано до обраного`);
        });
    });
    // Завантаження анімації Lottie
    const chatLottie = lottie.loadAnimation({
        container: document.getElementById('chat-lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animations/Animation - 1751889554813.json'
    });

    const chatPopup = document.getElementById('chat-popup');
    const chatLottieContainer = document.getElementById('chat-lottie');
    const chatCloseBtn = document.getElementById('chatCloseBtn');

    chatLottieContainer.addEventListener('click', () => {
        if (chatPopup.style.display === 'block') {
            chatPopup.style.display = 'none';
        } else {
            chatPopup.style.display = 'block';
        }
    });

    if (chatCloseBtn) {
        chatCloseBtn.addEventListener('click', () => {
            chatPopup.style.display = 'none';
        });
    }

    chatPopup.addEventListener('click', (e) => {
        if (e.target === chatPopup) {
            chatPopup.style.display = 'none';
        }
    });
    const chatSendBtn = document.getElementById('chat-send');
    const chatTextarea = document.querySelector('#chat-popup textarea');
    
    chatSendBtn.addEventListener('click', () => {
        const message = chatTextarea.value.trim();
    
        if (message !== '') {
            console.log('Надіслано повідомлення:', message);
    
            // Очистити поле після надсилання
            chatTextarea.value = '';
        } else {
            alert('Введіть повідомлення перед надсиланням.');
        }
    });

});
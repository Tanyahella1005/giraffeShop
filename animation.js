// =============================================
// Анімація листочків
// =============================================
function createLeaves() {
    const leafTypes = [
        'https://i.imgur.com/QYHvQJb.png',
        'https://i.imgur.com/9JZvQJb.png',
        'https://i.imgur.com/8JXvQJb.png'
    ];

    for (let i = 0; i < 15; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.style.backgroundImage = `url(${leafTypes[Math.floor(Math.random() * leafTypes.length)]})`;

        // Випадкові параметри
        const size = Math.random() * 30 + 20;
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 10 + 10}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leaf.style.setProperty('--random-x', Math.random() > 0.5 ? 1 : -1);

        document.body.appendChild(leaf);
    }
}

// =============================================
// Анімація банера
// =============================================
function initBannerAnimation() {
    if (document.getElementById('banner-animation')) {
        const bannerAnimation = lottie.loadAnimation({
            container: document.getElementById('banner-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'animations/Animation - 1751650909158.json'
        });
    }
}

// =============================================
// Ініціалізація всіх анімацій
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    createLeaves();
    initBannerAnimation();
});
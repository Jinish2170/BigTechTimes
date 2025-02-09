document.addEventListener('DOMContentLoaded', function() {
    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#0A192F';
        } else {
            header.style.backgroundColor = 'rgba(10, 25, 47, 0.8)';
        }
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');

    hamburger.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});

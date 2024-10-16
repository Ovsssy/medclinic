const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');
const phoneMenu = document.getElementById('phoneMenu');
const body = document.body;

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('burger-menu--active');
    navMenu.classList.toggle('header__navigation--active');
    phoneMenu.classList.toggle('header__phone-link--active')
    body.classList.toggle('no-scroll');
});

const navLinks = navMenu.querySelectorAll('a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        burgerMenu.classList.remove('burger-menu--active');
        navMenu.classList.remove('header__navigation--active');
        phoneMenu.classList.remove('header__phone-link--active')
        body.classList.remove('no-scroll');
    });
});

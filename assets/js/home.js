//      HOME PAGE

// DISPLAY NAVBAR WHEN LOWER THAN 1 PAGE
window.addEventListener('scroll', function(e) {
    if (window.pageYOffset >= window.innerHeight-45) {
        document.querySelector('nav').style.transform = 'scaleY(1)';
    } else {
        document.querySelector('nav').style.transform = 'scaleY(0)';
        navMenu.classList.remove('navMenuToggle');
        navBurger.classList.remove('navBurgerToggle');
    }
});
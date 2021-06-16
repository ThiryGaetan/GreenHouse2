//      HOME PAGE

let scrollY;
// DISPLAY NAVBAR WHEN LOWER THAN 1 PAGE
window.addEventListener('scroll', function(e) {
    scrollY = window.pageYOffset;
    if (scrollY >= window.innerHeight-45) {
        document.querySelector('nav').style.transform = 'scaleY(1)';
    } else {
        document.querySelector('nav').style.transform = 'scaleY(0)';
        navMenu.classList.remove('navMenuToggle');
        navBurger.classList.remove('navBurgerToggle');
    }
});
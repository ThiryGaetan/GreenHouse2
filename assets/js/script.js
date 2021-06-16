//      COMMON SCRIPT

const navPages = document.getElementsByClassName('navAnchor'),
navBurger = document.getElementById('navListBurger'),
navMenu = document.getElementById('navMenuList');

// UNDERLINES CURRENT PAGE IN NAVBAR AND DISPLAY NAVBAR OUTSIDE OF HOMEPAGE
window.addEventListener('load', function() {
    for(let i = 0; i < navPages.length; i++) {
        if('GreenHouse | '+navPages[i].textContent == document.title) {
            navPages[i].classList.add('currentPage');
        } else {
            navPages[i].classList.remove('currentPage');
        }
    }
    if(!(document.title == 'GreenHouse | '+navPages[1].textContent)) {
        document.querySelector('nav').style.transition = '0s';
        document.querySelector('nav').style.transform = 'scaleY(1)';
    }
});

window.addEventListener('click', function(e) {
    if(e.path.some((e) => e == navListBurger)) {
        navMenu.classList.toggle('navMenuToggle');
        navBurger.classList.toggle('navBurgerToggle');
    } else if(!(e.path.some((e) => e == navMenuList) ||
              e.path.some((e) => e == navList))) {
                navMenu.classList.remove('navMenuToggle');
                navBurger.classList.remove('navBurgerToggle');
              }
});
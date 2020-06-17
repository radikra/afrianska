var menuBlock = document.querySelector('.header__menu');
var menuIcon = document.querySelector('.header__burger');
var menuItems = menuBlock.querySelectorAll('a');

// menu icon in header
menuIcon.addEventListener('click', () => {
    menuBlock.classList.toggle('show-menu');
    if (window.outerWidth <= 500) {
        document.querySelector('body').classList.toggle('lock');
    }
    menuIcon.classList.toggle('active');
});

// menu links
for (let item of menuItems) {
    item.addEventListener('click', () => {
        menuBlock.classList.remove('show-menu');
        if (window.outerWidth <= 500) {
            document.querySelector('body').classList.remove('lock');
        }
        menuIcon.classList.toggle('active');
    });
}
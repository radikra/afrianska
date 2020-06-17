var menus = document.querySelectorAll('.fmenu__title');
for (let menu of menus) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('active');
        menu.nextElementSibling.classList.toggle('active');
    });
}
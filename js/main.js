var menuBlock = document.querySelector('.header__menu');

var menuIcon = document.querySelector('.header__burger');
menuIcon.addEventListener('click', () => {
    menuBlock.classList.toggle('show-menu');
    if (window.outerWidth <= 500) {
        document.querySelector('body').classList.toggle('lock');
    }
    menuIcon.classList.toggle('active');
});

var menuItems = menuBlock.querySelectorAll('a');
for (let item of menuItems) {
    item.addEventListener('click', function() {
        menuBlock.classList.toggle('show-menu');
        if (window.outerWidth <= 500) {
            document.querySelector('body').classList.toggle('lock');
        }
        menuIcon.classList.toggle('active');
    });
}

var menus = document.querySelectorAll('.fmenu__title');
for (let menu of menus) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('active');
        menu.nextElementSibling.classList.toggle('active');
    });
}

var modalWindow = document.getElementById('talkModal');

// open modal
var openModal = document.getElementById('talk');
openModal.addEventListener('click', function(e) {
    e.preventDefault;
    modalWindow.classList.add('show-modal');
    document.querySelector('body').classList.add('lock');
});

// close modal
var resBtn = modalWindow.querySelector('input[type=reset]');
resBtn.addEventListener('click', () => {
    modalWindow.classList.remove('show-modal');
    document.querySelector('body').classList.remove('lock');
});

var userName = modalWindow.querySelector('input[name=userName]');
var userEmail = modalWindow.querySelector('input[name=userEmail]');
var userMessage = modalWindow.querySelector('textarea[name=userMessage]');

var subBtn = modalWindow.querySelector('input[type=submit]');

// checking the valid value of user name input
userName.addEventListener('input', () => {
    if (userName.validity.valid) {
        userEmail.removeAttribute('disabled');
    } else {
        userEmail.setAttribute('disabled', '');
        userMessage.setAttribute('disabled', '');        
    }
});

userEmail.addEventListener('input', () => {
    if (userEmail.validity.valid) {
        userMessage.removeAttribute('disabled');
    } else {
        userMessage.setAttribute('disabled', '');
    }
});

userMessage.addEventListener('input', () => {
    if (userMessage.validity.valid) {
        subBtn.classList.add('show-btn');
        resBtn.classList.remove('show-btn');
    } else {
        subBtn.classList.remove('show-btn');
        resBtn.classList.add('show-btn');
    }
});

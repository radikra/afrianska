var openModal = document.getElementById('talk');
var modalWindow = document.getElementById('talkModal');
var userName = modalWindow.querySelector('input[name=userName]');
var userEmail = modalWindow.querySelector('input[name=userEmail]');
var userMessage = modalWindow.querySelector('textarea[name=userMessage]');
var subBtn = modalWindow.querySelector('input[type=submit]');

// open modal
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

// checking the valid value of user name input
// (after html validation by input pattern)
// if invalid - email input stay disabled
userName.addEventListener('input', () => {
    if (userName.validity.valid) {
        userEmail.removeAttribute('disabled');
    } else {
        userEmail.setAttribute('disabled', '');
    }
});

// checking the valid value of user email input
// (after html validation)
// if invalid - message input stay disabled
userEmail.addEventListener('input', () => {
    if (userEmail.validity.valid) {
        userMessage.removeAttribute('disabled');
    } else {
        userMessage.setAttribute('disabled', '');
    }
});

// checking the valid value of user message input
// (after html validation by input pattern)
// if invalid - submit button stay hidden
userMessage.addEventListener('input', () => {
    if (userMessage.validity.valid) {
        subBtn.classList.add('show-btn');
        resBtn.classList.remove('show-btn');
    } else {
        subBtn.classList.remove('show-btn');
        resBtn.classList.add('show-btn');
    }
});
const menuBtn = document.getElementById('menubtn');
const mobileMenu = document.getElementById('mobilemenu');
const closeBtn = document.getElementById('close');

menuBtn.addEventListener('click', function() {
    mobileMenu.style.right = '0';
});

closeBtn.addEventListener('click', function() {
    mobileMenu.style.right = '-50%';
});
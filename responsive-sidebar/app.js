const hamburger = document.querySelector('.menu-toggle');
const menu = document.querySelector('.sidebar');
hamburger.addEventListener('click', function() {
    menu.classList.toggle('show-sidebar');
    console.log(menu.classList);
})
const hamburger = document.querySelector('.hamburger');

const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function(event){
    var close = 'fas fa-times';
    var open = 'fas fa-bars';
    if (event.target.className == open){
        event.target.className = close;
    }
    else {
        event.target.className = open;
    }
    menu.classList.toggle('show-links');
    
} );
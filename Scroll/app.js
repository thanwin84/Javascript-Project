// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0){
        // inline style
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
});
// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (navHeight < scrollHeight){
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }
    // if we went down, show top link at the bottom
    if (scrollHeight > 500){
        topLink.classList.add('show-link');
    }
    else {
        topLink.classList.remove('show-link');
    }
    
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
for (let i = 0; i < scrollLinks.length; i++){
    scrollLinks[i].addEventListener('click', function(event){
        // prevent default action
       event.preventDefault();
       const id = event.currentTarget.getAttribute("href").slice(1);
       const element = document.getElementById(id);
       // calculate the heights
       const navHeight = navbar.getBoundingClientRect().height;
       const containerHeight = linksContainer.getBoundingClientRect().height;
       const fixedNav = navbar.classList.contains('fixed-nav')
       let position = element.offsetTop - navHeight;
       // if navbar is   fixed, the navbar will be out of the normal flow
       // that's why navbar height will be different from when the navbar is not fixed
    //    console.log(position);
       if (!fixedNav){
           position = position - navHeight;
       }
       // it means we already opened the nav link
    //    console.log(position);
       if (navHeight > 82){
           position += containerHeight;
       }
    //    console.log(position);
       
       window.scrollTo({
           left: 0,
           top: position,
       });
       // close the links container when we go to specific section by clicking the link
       linksContainer.style.height = 0;
    });
}
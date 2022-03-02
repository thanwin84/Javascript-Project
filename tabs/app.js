const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');
 
about.addEventListener('click', function(event){
    const id = event.target.dataset.id;
    if (id){
        // remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            event.target.classList.add("active");
        });
        // hide all contents
        articles.forEach(function(article){
            article.classList.remove('active');
        });
        // show the content
        articles.forEach(function(article){
            if (article.id === id){
                article.classList.add('active');
            }
        });
    }
} );
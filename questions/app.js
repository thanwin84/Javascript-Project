//using selectors inside the element
// traversing the dom
let questions = document.querySelectorAll('.question');
// listen for all the buttons
for (let question = 0; question < questions.length; question++){
    var btn = questions[question].querySelector('.question-btn');
    // listen for open 
    btn.addEventListener('click', function(){
        // before clicking check if any question is open
        // if open, close it
        for (let i = 0; i < questions.length; i++){
            if (question != questions[i]){
                questions[i].classList.remove('show-text');
            }
        }
        questions[question].classList.toggle('show-text');
    });
}

 
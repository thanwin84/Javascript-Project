var increase = document.querySelector('.increase');
var decrease = document.querySelector('.decrease');
var reset = document.querySelector('.reset');
var value = document.getElementById('value');

let count = 0;
increase.addEventListener('click', function(){
    count += 1;
    value.textContent = count;
})
decrease.addEventListener('click', ()=>{
    count -= 1;
    value.textContent = count;
})
reset.addEventListener('click', ()=>{
    count = 0;
    value.textContent = count;
})
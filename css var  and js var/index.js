const inputs = document.querySelectorAll('.controls input');
function handleUpdate(){
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    
}
for (let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('change', handleUpdate);
}
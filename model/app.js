// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const openModel = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-btn');

openModel.addEventListener('click', function(){
    modalOverlay.classList.toggle('open-modal');
});
closeModal.addEventListener('click', function(){
    modalOverlay.classList.toggle('open-modal');
});

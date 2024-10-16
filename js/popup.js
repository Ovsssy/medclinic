const popup = document.getElementById('popup');
const openPopupBtns = document.querySelectorAll('.open-popup');
const closeBtn = document.querySelector('.popup__close');

openPopupBtns.forEach(button => {
  button.onclick = function() {
      popup.classList.add('popup--active');
  }
});

closeBtn.onclick = function() {
  popup.classList.remove('popup--active'); 
}

window.onclick = function(event) {
  if (event.target === popup) {
      popup.classList.remove('popup--active');
  }
}

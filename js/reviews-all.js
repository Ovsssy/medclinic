document.querySelectorAll('.reviews-list__item-button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.reviews-list__item');
    const text = item.querySelector('.reviews-list__item-text');
    const buttonText = button.querySelector('.reviews-list__item-button-text');
    const arrowIcon = button.querySelector('.reviews-list__item-button-image');

    // Переключаем классы для текста и кнопки
    text.classList.toggle('reviews-list__item-text--expanded');
    const isExpanded = text.classList.contains('reviews-list__item-text--expanded');

    if (text.style.maxHeight) {
      text.style.maxHeight = null;
      buttonText.textContent = 'Развернуть отзыв';
      arrowIcon.classList.remove('reviews-list__item-button-image--rotate');
    } else {
      // Иначе разворачиваем текст, динамически задав его высоту
      text.style.maxHeight = text.scrollHeight + 'px';
      buttonText.textContent = 'Свернуть отзыв';
      arrowIcon.classList.add('reviews-list__item-button-image--rotate');
    }
  });
});

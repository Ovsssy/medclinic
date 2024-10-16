document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('headerScrolll');
  var headerContainer = document.querySelector('.header__container');

  window.addEventListener('scroll', function () {
    if (header) {
      var scrollY = window.scrollY;
      var headerHeight = header.offsetHeight;

      // Если количество прокрученных пикселей больше, чем высота хедера
      if (scrollY > headerHeight) {
        headerContainer.classList.add('header__container--fixed');
      } else {
        headerContainer.classList.remove('header__container--fixed');
      }
    }
  });
});

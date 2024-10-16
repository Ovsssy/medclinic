document.querySelectorAll('.questions-accordion__item').forEach((accordionItem) => {
  accordionItem.addEventListener('click', function () {
    const description = this.querySelector('.questions-accordion__item-description');
    const title = this.querySelector('.questions-accordion__item-title'); // Находим заголовок
    const wrapper = this.querySelector('.questions-accordion__item-wrapper'); // Находим обёртку

    // Закрыть все открытые элементы перед открытием нового
    document.querySelectorAll('.questions-accordion__item').forEach((item) => {
      const desc = item.querySelector('.questions-accordion__item-description');
      const itemTitle = item.querySelector('.questions-accordion__item-title');
      const itemWrapper = item.querySelector('.questions-accordion__item-wrapper');

      if (desc !== description) {
        // Закрываем другие описания
        desc.style.maxHeight = null;
        desc.classList.remove('questions-accordion__item-description--visible');

        // Убираем класс --indent у заголовка
        itemTitle.classList.remove('questions-accordion__item-title--indent');

        // Убираем класс --active у других элементов и их оберток
        item.classList.remove('questions-accordion__item--active');
        if (itemWrapper) {
          itemWrapper.classList.remove('questions-accordion__item-wrapper--active');
        }
      }
    });

    // Проверка, открыт ли текущий элемент
    if (description.style.maxHeight) {
      // Если открыт, закрываем
      description.style.maxHeight = null;
      description.classList.remove('questions-accordion__item-description--visible');

      // Убираем класс у заголовка и обёртки
      title.classList.remove('questions-accordion__item-title--indent');
      if (wrapper) {
        wrapper.classList.remove('questions-accordion__item-wrapper--active');
      }

      // Убираем класс --active у текущего элемента
      this.classList.remove('questions-accordion__item--active');
    } else {
      // Открываем текущий элемент, задаем динамическую высоту
      description.style.maxHeight = description.scrollHeight + 'px';
      description.classList.add('questions-accordion__item-description--visible');

      // Добавляем класс к заголовку и обёртке
      title.classList.add('questions-accordion__item-title--indent');
      if (wrapper) {
        wrapper.classList.add('questions-accordion__item-wrapper--active');
      }

      // Добавляем класс --active к текущему элементу
      this.classList.add('questions-accordion__item--active');
    }
  });
});

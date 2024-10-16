function formatPhoneInput(inputElement) {
  inputElement.addEventListener('input', function () {
    // Получаем текущее значение поля ввода
    let value = this.value.replace(/\D/g, ''); // Убираем все нецифровые символы

    // Проверка на начальный код +7
    if (value.startsWith('7')) {
      value = value.slice(1); // Убираем начальный 7, если он есть
    }

    // Форматируем номер телефона
    let formattedValue = '+7 ('; // Начинаем с +7 (
    if (value.length > 0) {
      formattedValue += value.slice(0, 3); // Добавляем первые три цифры
    }
    formattedValue += ')'; // Закрываем скобку

    if (value.length > 3) {
      formattedValue += ' ' + value.slice(3, 6); // Добавляем следующие три цифры
    }
    if (value.length > 6) {
      formattedValue += ' ' + value.slice(6, 8); // Добавляем две цифры
    }
    if (value.length > 8) {
      formattedValue += '-' + value.slice(8, 10); // Добавляем дефис и две последние цифры
    }

    // Обновляем значение в поле ввода
    this.value = formattedValue;
  });
}

// Получаем элементы по ID
const phoneInput = document.getElementById('phoneForm');
const phonePopupInput = document.getElementById('phonePopup');
const phoneQuizInput = document.getElementById('phoneQuiz');

// Применяем форматирование к обоим полям
formatPhoneInput(phoneInput);
formatPhoneInput(phonePopupInput);
formatPhoneInput(phoneQuizInput);

// Регулярное выражение для проверки
const phoneMask = /^\+7 \((\d){3}\) (\d){3} (\d){2}-(\d){2}$/; // +7 (999) 999 99-99

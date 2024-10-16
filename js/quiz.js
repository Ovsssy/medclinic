let currentQuestion = 1; // Текущий шаг
const $steps = document.querySelectorAll('.quiz-block__content'); // Все шаги квиза
const maxSteps = $steps.length; // Общее количество шагов

// Контейнер для линий индикатора шагов
const stepLinesContainer = document.querySelector('.quiz-block__steps');

// Функция для динамического создания линий шагов
function initializeSteps() {
    stepLinesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением шагов

    for (let i = 1; i <= maxSteps; i++) {
        const stepLine = document.createElement('div');
        stepLine.classList.add('quiz-block__steps-line');
        if (i === 1) {
            stepLine.classList.add('quiz-block__steps-line--active'); // Первый шаг сразу активен
        }
        stepLinesContainer.appendChild(stepLine);
    }
}

// Получаем все линии индикатора шагов после их создания
let $stepLines = stepLinesContainer.querySelectorAll('.quiz-block__steps-line');

function setStep(stepId) {
    $steps.forEach($step => {
        if ($step.id === stepId) {
            $step.style.display = 'block'; // Показываем текущий шаг
        } else {
            $step.style.display = 'none'; // Скрываем остальные шаги
        }
    });

    // Обновляем индикатор шагов
    updateStepIndicator(currentQuestion);
}

// Кнопка "Далее"
const button_next = document.querySelector('[data-button="next"]');

// Обновляем активный шаг в индикаторе
function updateStepIndicator(currentStep) {
    $stepLines.forEach((line, index) => {
        if (index < currentStep) {
            line.classList.add('quiz-block__steps-line--active'); // Добавляем активный класс для пройденных шагов
        } else {
            line.classList.remove('quiz-block__steps-line--active'); // Убираем активный класс для непройденных шагов
        }
    });
}

// Функция для обновления активного класса на элементах списка
function updateActiveClass() {
    const currentStepSelector = '#step-' + currentQuestion;
    const radioButtons = document.querySelectorAll(currentStepSelector + ' input[type="radio"]');

    radioButtons.forEach(radio => {
        const listItem = radio.closest('.quiz-block-list__item');
        const imageContainer = listItem.querySelector('.quiz-block-list__image');

        // Проверяем, выбран ли текущий радио-кнопка
        if (radio.checked) {
            imageContainer.classList.add('quiz-block-list__image--active'); // Добавляем активный класс
        } else {
            imageContainer.classList.remove('quiz-block-list__image--active'); // Убираем активный класс
        }
    });
}

// Добавляем обработчик событий к радио-кнопкам
const radioButtons = document.querySelectorAll('.quiz-block-list input[type="radio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', updateActiveClass); // Обновляем класс при изменении
});

// Создаем span для текста кнопки
const buttonTextSpan = document.createElement('span');
button_next.appendChild(buttonTextSpan); // Вставляем span в кнопку

button_next.addEventListener('click', function () {
    // Проверяем, выбран ли какой-то вариант на текущем шаге
    const currentStepSelector = '#step-' + currentQuestion;
    const selectedOption = document.querySelector(currentStepSelector + ' input[type="radio"]:checked');

    if (!selectedOption) {
        alert('Пожалуйста, выберите вариант перед тем, как продолжить.');
        return; // Если ничего не выбрано, прекращаем выполнение функции
    }

    if (currentQuestion < maxSteps) {
        currentQuestion++; // Переходим к следующему шагу
        setStep('step-' + currentQuestion);
    }

    // Скрываем кнопку "Далее" на последнем шаге
    if (currentQuestion === maxSteps) {
        button_next.style.display = 'none'; // Скрываем кнопку "Далее"
    }
});

// Инициализируем шаги, первый шаг и класс активного элемента
initializeSteps(); // Создаем линии для шагов
$stepLines = stepLinesContainer.querySelectorAll('.quiz-block__steps-line'); // Обновляем список линий после инициализации
setStep('step-1');
updateActiveClass(); // Инициализируем активные классы на первом шаге
updateStepIndicator(currentQuestion); // Инициализируем индикатор шагов на первом шаге




// let currentQuestion = 1; // Текущий шаг
// let totalPrice = 0; // Общая стоимость выбранных услуг
// const $steps = document.querySelectorAll('.quiz-block__content'); // Все шаги квиза
// const maxSteps = $steps.length; // Общее количество шагов

// // Контейнер для линий индикатора шагов
// const stepLinesContainer = document.querySelector('.quiz-block__steps');

// // Функция для динамического создания линий шагов
// function initializeSteps() {
//     stepLinesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением шагов

//     for (let i = 1; i <= maxSteps; i++) {
//         const stepLine = document.createElement('div');
//         stepLine.classList.add('quiz-block__steps-line');
//         if (i === 1) {
//             stepLine.classList.add('quiz-block__steps-line--active'); // Первый шаг сразу активен
//         }
//         stepLinesContainer.appendChild(stepLine);
//     }
// }

// // Получаем все линии индикатора шагов после их создания
// let $stepLines = stepLinesContainer.querySelectorAll('.quiz-block__steps-line');

// function setStep(stepId) {
//     $steps.forEach($step => {
//         if ($step.id === stepId) {
//             $step.style.display = 'block'; // Показываем текущий шаг
//         } else {
//             $step.style.display = 'none'; // Скрываем остальные шаги
//         }
//     });

//     // Обновляем индикатор шагов
//     updateStepIndicator(currentQuestion);
// }

// // Кнопки
// const button_next = document.querySelector('[data-button="next"]'); // Кнопка "Далее"
// const button_prev = document.querySelector('[data-button="prev"]'); // Кнопка "Назад"
// const totalPriceElement = document.getElementById('total-price'); // Элемент для отображения итоговой суммы

// // Обновляем активный шаг в индикаторе
// function updateStepIndicator(currentStep) {
//     $stepLines.forEach((line, index) => {
//         if (index < currentStep) {
//             line.classList.add('quiz-block__steps-line--active'); // Добавляем активный класс для пройденных шагов
//         } else {
//             line.classList.remove('quiz-block__steps-line--active'); // Убираем активный класс для непройденных шагов
//         }
//     });
// }

// // Функция для обновления активного класса на элементах списка
// function updateActiveClass() {
//     const currentStepSelector = '#step-' + currentQuestion;
//     const radioButtons = document.querySelectorAll(currentStepSelector + ' input[type="radio"]');

//     radioButtons.forEach(radio => {
//         const listItem = radio.closest('.quiz-block-list__item');
//         const imageContainer = listItem.querySelector('.quiz-block-list__image');

//         // Проверяем, выбран ли текущий радио-кнопка
//         if (radio.checked) {
//             imageContainer.classList.add('quiz-block-list__image--active'); // Добавляем активный класс
//         } else {
//             imageContainer.classList.remove('quiz-block-list__image--active'); // Убираем активный класс
//         }
//     });
// }

// // Добавляем обработчик событий к радио-кнопкам
// const radioButtons = document.querySelectorAll('.quiz-block-list input[type="radio"]');
// radioButtons.forEach(radio => {
//     radio.addEventListener('change', updateActiveClass); // Обновляем класс при изменении
// });

// // Создаем span для текста кнопки
// const buttonTextSpan = document.createElement('span');
// button_next.appendChild(buttonTextSpan); // Вставляем span в кнопку

// button_next.addEventListener('click', function () {
//     // Проверяем, выбран ли какой-то вариант на текущем шаге
//     const currentStepSelector = '#step-' + currentQuestion;
//     const selectedOption = document.querySelector(currentStepSelector + ' input[type="radio"]:checked');

//     if (!selectedOption) {
//         alert('Пожалуйста, выберите вариант перед тем, как продолжить.');
//         return; // Если ничего не выбрано, прекращаем выполнение функции
//     }

//     // Добавляем стоимость выбранной опции к общей сумме
//     const selectedPrice = parseInt(selectedOption.getAttribute('data-price'), 10); // Получаем цену выбранного варианта
//     totalPrice += selectedPrice; // Увеличиваем общую сумму
//     totalPriceElement.textContent = totalPrice; // Обновляем отображение общей суммы

//     if (currentQuestion < maxSteps) {
//         currentQuestion++; // Переходим к следующему шагу
//         setStep('step-' + currentQuestion);
//     } else {
//         // Здесь мы обрабатываем последний шаг
//         button_next.setAttribute('disabled', true); // Деактивируем кнопку "Далее" на последнем шаге
//         document.querySelector('.quiz-block__total').style.display = 'block'; // Показываем итог
//     }

//     if (currentQuestion > 1) {
//         button_prev.classList.add('quiz-block__button-prev--active'); // Добавляем активный класс к кнопке "Назад"
//     }

//     // Изменяем текст кнопки "Далее" на "Закончить" на последнем шаге
//     if (currentQuestion === maxSteps) {
//         buttonTextSpan.textContent = 'Закончить'; // Меняем текст на "Закончить"
//     } else {
//         buttonTextSpan.textContent = 'Далее'; // Устанавливаем текст на "Далее" для остальных шагов
//     }
// });

// button_prev.addEventListener('click', function () {
//     if (currentQuestion > 1) {
//         const currentStepSelector = '#step-' + currentQuestion;
//         const selectedOption = document.querySelector(currentStepSelector + ' input[type="radio"]:checked');
        
//         // Удаляем стоимость выбранной опции
//         if (selectedOption) {
//             const selectedPrice = parseInt(selectedOption.getAttribute('data-price'), 10); // Получаем цену выбранного варианта
//             totalPrice -= selectedPrice; // Уменьшаем общую сумму
//             totalPriceElement.textContent = totalPrice; // Обновляем отображение общей суммы
//         }

//         currentQuestion--; // Переходим к предыдущему шагу
//         setStep('step-' + currentQuestion);
//         updateActiveClass(); // Обновляем класс активного элемента на предыдущем шаге
//     }

//     // Если текущий вопрос - первый, убираем активный класс
//     if (currentQuestion === 1) {
//         button_prev.classList.remove('quiz-block__button-prev--active'); // Убираем активный класс, если на первом шаге
//     } else {
//         button_prev.classList.add('quiz-block__button-prev--active'); // Добавляем активный класс, если не на первом шаге
//     }

//     if (currentQuestion < maxSteps) {
//         button_next.removeAttribute('disabled'); // Активируем кнопку "Далее", если мы не на последнем шаге
//         buttonTextSpan.textContent = 'Далее'; // Устанавливаем текст на "Далее" для остальных шагов
//     }
// });

// // Инициализируем шаги, первый шаг и класс активного элемента
// initializeSteps(); // Создаем линии для шагов
// $stepLines = stepLinesContainer.querySelectorAll('.quiz-block__steps-line'); // Обновляем список линий после инициализации
// setStep('step-1');
// updateActiveClass(); // Инициализируем активные классы на первом шаге
// buttonTextSpan.textContent = 'Далее'; // Устанавливаем начальный текст кнопки
// updateStepIndicator(currentQuestion); // Инициализируем индикатор шагов на первом шаге

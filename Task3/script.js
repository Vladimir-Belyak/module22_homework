const status = document.querySelector('#status');
const sizeMonitor = document.querySelector('#size-monitor');
const btn = document.querySelector('.j-btn-test');

// Функция, выводящая текст об ошибке
const error = () => {
    status.textContent = 'Информация о местоположении недоступна';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {

    status.textContent = `Широта: ${position.coords.latitude} °, Долгота: ${position.coords.longitude} °`;
}

btn.addEventListener('click', () => {

    sizeMonitor.textContent = `Ширина Вашего монитора составляет: ${window.screen.width}, а высота: ${window.screen.height}`;

    if (!navigator.geolocation) {
        status.textContent = 'Информация о местоположении недоступна';
    } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
});


/* Задание 3.
Сверстайте кнопку, клик на которую будет выводить на экран следующие данные:
Размеры экрана пользователя (ширина и высота).
Координаты местонахождения пользователя. Если пользователь отказался дать доступ к местоположению или данная функция недоступна в бразуере, 
вывести вместо координат сообщение «Информация о местоположении недоступна». */
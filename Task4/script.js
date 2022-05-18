const status = document.querySelector('#status');
const btn = document.querySelector('.j-btn-test');

// Функция, выводящая текст об ошибке
const error = () => {
    status.textContent = 'Информация о местоположении недоступна';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {

    ;
}

btn.addEventListener('click', () => {

    if (!navigator.geolocation) {
        status.textContent = 'Информация о местоположении недоступна';
    } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
});








/* Задание 4.
Сверстайте кнопку, по клику на которую будет отправляться запрос к Timezone API. В запросе нужно отправить координаты местоположения пользователя,
полученные с помощью Geolocation API. В ответ на запрос придёт объект, из которого нужно вывести на экран следующую информацию:
временная зона, в которой находится пользователь: параметр timezone;
местные дата и время: параметр date_time_txt.
Строка запроса к API выглядит следующим образом:
https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=latitude&long=longitude.
Вместо latitude и longitude нужно подставить широту и долготу. */
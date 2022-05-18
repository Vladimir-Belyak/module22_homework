const fi = document.querySelector('.fi');
const ch = document.querySelector('.ch');
const jp = document.querySelector('.jp');

/* Точности в пропорциях флагов нет
Финляндия */
fi.innerHTML = `
<svg width="180" heigth="120">
    <rect x="0" y="0" width="180" height="120" style="fill:white;" />
    <polygon points="0,45 0,75 50,75 50,120 80,120 80,120 80,75 180,75 180,45 80,45 80,0 50,0 50,45"  style="fill:darkblue;" />
</svg>
`;

// Швейцария
ch.innerHTML = `
<svg width="180" heigth="120">
<rect x="0" y="0" width="180" height="120" style="fill:red;" />
<polygon points="60,50 60,70 80,70 80,90 100,90 100,70 120,70 120,50 100,50 100,30 80,30 80,50"  style="fill:white;" />
</svg>
`;

// Япония
jp.innerHTML = `
<svg width="180" heigth="120">
    <rect x="0" y="0" width="180" height="120" style="fill:white;" />
    <circle cx="90" cy="60" r="38" style="fill:red;" />
</svg>
`;



/* Задание 1.
Изобразить с помощью элементов SVG флаги пяти стран: Россия, Франция, Финляндия, Швейцария, Япония.
Каждый SVG-элемент с флагом должен иметь размер 180 на 120 пикселей. */
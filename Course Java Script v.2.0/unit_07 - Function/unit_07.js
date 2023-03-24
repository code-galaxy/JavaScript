// Task 1
// Напишите функцию t1, которая при нажатии кнопки выводит в .out-1 переменную a1.

let a1 = 8;
let out = document.querySelector('.out-1');

function t1() {
    out.innerHTML = a1;
}
document.querySelector('.b-1').onclick = t1;


// Task 2.

// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает (return) переменную a2.Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения. Обратите внимание, как изменяется вызов функции теперь.

let a2 = 8;
function t2() {
    return a2;
}

document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2();
    // а зачем? А вот
    console.log(5 + t2()); // тут выведет 13
    console.log(6 * t2()); // тут 48
    console.log(t2() * t2() * t2()); // 512
}

// Task 3.
// Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 аргумента и возвращает (return) их произведение. Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве аргументов a, b. Протестируем функцию на двух примерах, с помощью кнопок .b-3-1 и .b-3-2.

function t3(a, b) {
    return a * b;
}

document.querySelector('.b-3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4);
    // как видите мы можем внутрь засунуть любые числа и t3 их перемножит и вернет.
}
document.querySelector('.b-3-2').onclick = function () {
    document.querySelector('.out-3-2').textContent = t3(5, 6);
}

// Task 4
// Напишите функцию t4 которая принимает ваш год рождения  и вычисляет (возвращает) ваш возраст. 

function t4(year) {
    return 2022 - year;
}

document.querySelector('.b-4').onclick = function () {
    document.querySelector('.out-4').textContent = t4(1980);
}


// Task 5
// Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает (return) число символов в нем, где name - принятое в качестве параметра имя. Длину (число символов) можно посчитать используя свойство .length.


function t5(yourName) {
    return yourName.length;
}

document.querySelector('.b-5').onclick = function () {
    document.querySelector('.out-5').textContent = t5('Alex');
}



// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра. 
//Внимание, это первая задача, решение которой нужно найти в google. Не пишите решение сами!

function t6(a, b) {
    let randomInteger = a + Math.random() * (b + 1 - a);
    return Math.floor(randomInteger);
}

document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(100, 107);
}


// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x,y,z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

function t7(min, max) {
    // итак, одна из сложных задач. Нам нужно
    // сделать такую строку
    // rgb(33,123,255) - числа могут быть любые от 0 до 255
    // без пробелов, через запятые 33,123,255
    // у вас есть функция t6, которая может генерировать случайные целые числа в нужном диапазоне. 
    // давайте воспользуемся ней. Просто запустим ее три раза внутри строки ниже
    //return `rgb(${t6(0,255)}....допишите сами

    return `rgb(${t6(min, max)},${t6(min, max)},${t6(min, max)})`;
}

document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').style.background = t7(0, 255);
}


// Task 8
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки. Т.е.принимает _hello_(где знак _ символизирует пробел), а возвращает hello. Для удаления пробелов - используйте trim.

function t8(str) {
    return str.trim();
}

document.querySelector('.b-8').onclick = function () {
    let s = "            Hello                ";
    console.log(s);
    console.log(t8(s));
}


// Task 9
// Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное. 

function t9(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(15);
}


// Task 10
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них.В случае равенства - первое.

function t10(x, y) {
    if (x > y) {
        return x;
    }
    else if (x = y) {
        return x;
    }
    else {
        return y;
    }
}

document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(3, 9);
}

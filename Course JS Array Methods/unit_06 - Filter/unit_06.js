// TASK 01
// По нажатию b-1 выполняется функция f1. Функция применяет к массиву a1 метод filter и создает новый массив z1 куда входят только четные элементы массива a1. Результат выводится в консоль.


let a1 = [5, 6, 7, 8, 44, 21, 43, 26, 78, 100, -2, 0, 17];
let z1 = [];

const f1 = () => {

    z1 = a1.filter(item => (item % 2 === 0));
    console.log(z1);
}

// TASK 02
//По нажатию b-2 выполняется функция f2. Функция применяет к массиву a2 метод filter и создает новый массив z2 куда входят только элементы массива a2 с четным индексом. Результат выводится в консоль.

let a2 = [22, 33, 44, 55, 66, 77, 88, 99];
let z2 = [];

const f2 = () => {
    z2 = a2.filter((item, index) => (index % 2 === 0));
    console.log(z2);
}

// TASK 03
//По нажатию b-3 выполняется функция f3. Функция применяет к массиву a3 метод filter и создает новый массив z3 куда выводит индексы тех элементов, значение которых больше 4. Результат выводится в консоль.


let a3 = [2, 3, 4, 5, -6, 55, 1, 12, -3, 7, 4, 5, 2];
let z3 = [];

const f3 = () => {
    z3 = [];
    a3.filter((item, index) => {
        if (item > 4) {
            z3.push(index);
        }
    })
    console.log(z3);
}

// TASK 04
//По нажатию b-4 выполняется функция f4. Функция применяет к массиву a4 метод filter и создает новый массив z4
// куда выводит те значения массива которые не числа. Результат выводится в консоль.


let a4 = [3, -2, 4, 1, '9', -3, '0', true, 2, -8, undefined];
let z4 = [];

const f4 = () => {
    z4 = a4.filter(item => {
        if (typeof item !== 'number')
            return true;
    })
    console.log(z4);
}

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция перебирает с помощью filter массив a5 и добавляет в z5 те вложенные массивы, в которых есть число 5. 
// Результат выводится в консоль.

let a5 = [[4, 5], [6, 7, 8], [12, 5], [47, 3, 54, 62], [5]]; // ожидаю [[4,5], [12, 5], [5]]
let z5 = [];

const f5 = () => {
    z5 = a5.filter(item => {
        if (item.includes(5))
            return true;
    })
    console.log(z5);
}

// TASK 06
//По нажатию b-6 выполняется функция f6. Функция перебирает с помощью filter массив a6 и добавляет в z6 те вложенные массивы, cумма элементов которых - четная.  Результат выводится в консоль.

let a6 = [[4, 5], [6, 7, 3], [12, 5], [47, 3, 54, 62], [5]]; // ожидаю [[6,7,3], [47, 3, 54, 62]]
let z6 = [];

const f6 = () => {

    z6 = a6.filter(item => {

        let sum = item[0];
        for (let i = 1; i < item.length; i++)  sum = sum + item[i];

        item = sum;
        if (item % 2 === 0) return true;

    })
    console.log(z6);
}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция перебирает с помощью filter массив a7 и добавляет в z7 те объекты, 
// пароль которых меньше или равен 6 символов. Результат выводится в консоль.

let a7 = [
    { "user": "poprik", "pass": "a8b5442b9c" },
    { "user": "dobrik", "pass": "9665" },
    { "user": "kovrik", "pass": "DA06aA" },
    { "user": "shurik", "pass": "71b" },
    { "user": "zorik", "pass": "362617b302" }
];
let z7 = [];

const f7 = () => {

    z7 = a7.filter(item => {
        if (item.pass.length <= 6) return true;
    })
    console.log(z7);
}

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция применяет к массиву a8 метод filter и создает новый массив z8 куда входят только четные элементы массива a8. Остальные элементы добавляет в z8_2. Результат выводится в консоль.

let a8 = [5, 6, 7, 8, 44, 21, 43, 26, 78, 100, -2, 0, 17];
let z8 = [];
let z8_2 = [];

const f8 = () => {
    z8 = [];
    z8_2 = [];

    a8.filter(item => {
        if (item % 2 === 0) z8.push(item);
        else z8_2.push(item);
    })
    console.log(z8);
    console.log(z8_2);
}

// TASK 09
// Задача на повторение. По нажатию b-9 выполняется функция f9. Функция на основе массива a9 должна сделать объект z9 где ключи - такие же как и значения. Вывести результат в консоль.

let a9 = [6, 7, 9];
let z9 = {}; // {6 : 6, 7: 7, 9: 9}

const f9 = () => {

    for (let i = 0; i < a9.length; i++) {
        z9[a9[i]] = a9[i];
    }

    console.log(z9)
}

// TASK 10
// // По нажатию b-10 выполняется функция f10. Функция перебирает объект a10 и создает новый объект z10 со значениямия которые по модулю больше 5. Связка ключ - значение сохраняется. Вывести результат в консоль.

let a10 = { "hi": 5, "test": 2, "best": 12, "quest": -6 };
let z10 = {}; // ожидаю {"best" : 12, "quest" : -6};

const f10 = () => {

    for (let key in a10) {
        elem = a10[key];

        if (callback10(elem))
            z10[key] = elem;
    }
    console.log(z10);
}

function callback10(elem) {

    if (Math.abs(elem) > 5) return true;
}


document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', f4);
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', f7);
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', f10);
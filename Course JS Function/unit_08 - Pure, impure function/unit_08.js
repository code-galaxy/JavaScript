// Task 1
// Напишите pure функцию t1, которая принимает два аргумента и выводит в .out-1 cумму всех целых чисел от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. 

function t1(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
document.querySelector('.b-1').addEventListener('click', function () {
    document.querySelector('.out-1').textContent = t1(2, 4);
})


// Task 2
// Напишите pure функцию t2, которая принимает два аргумента и выводит в .out-2 больше число. Используйте Math.max. Функция запускается по кнопке .b-2. 

function t2(num1, num2) {
    return Math.max(num1,num2);
    // return (num1 > num2) ? num1 : num2;
}
document.querySelector('.b-2').addEventListener('click', () => {
    document.querySelector('.out-2').textContent = t2(2, 4);
})


// Task 3.
// Напишите pure функцию t3 ( принимает 3 аргумента), которая делит число a на b и результат выводит в out-3. Если b равно нулю, то в out-3 выводится аргумент c. Функция запускается по кнопке .b-3. 

function t3(a, b, c) {
    return (b === 0) ? c : a / b;
}
document.querySelector('.b-3').addEventListener('click', () => {
    document.querySelector('.out-3').textContent = t3(1, 2, 3);
})


// Task 4
// Давайте напишем pure функцию t4, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Функция запускается по кнопке .b-4. 

function t4(arr, block) {
    return block.innerHTML = arr.join(' ');
}
document.querySelector('.b-4').addEventListener('click', ()=>{
    let out = document.querySelector('.out-4');
    t4([1,2,3,4,5], out);
})


// Task 5
// Давайте напишем pure функцию t5, которая проверяет наличие элемента класс которой передан ей как аргумент (например '.out-5') на странице и возвращает true или false. Функция запускается по кнопке .b-5. 


function t5(elem) {
    let out = document.querySelector(elem);
    //console.log(out);
    return (out) ? true : false;
}


document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').textContent = t5('.out-5');
})

// Task 6
// Давайте напишем pure функцию t6, которая получает массив и возвращает его развернутым на 180 градусов ( чистый аналог reverse ). Функция запускается по кнопке .b-6. Для проверки - выводите результат на страницу, через пробел.

function t6(arr) {
    return arr.reverse();
}
document.querySelector('.b-6').addEventListener('click', () => {
    document.querySelector('.out-6').textContent = t6([11, 22, 33]).join(' ');

})

// Task 7
// Давайте напишем функцию t7, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Ваша задача модицифировать функцию и запуск так, чтобы она стала pure.

const out7 = document.querySelector('.out-7');

function t7(text) {
    return (text.trim().toLowerCase())
}

document.querySelector('.b-7').addEventListener('click', function () {
    let block = document.querySelector('.out-7');
    block.textContent = t7(' HelLO wORLd       ');
})


// Task 8
// Давайте напишем pure функцию t8, которая получает массив a8 и год year и проверяет что все года массива больше или равны year - возвращает true, false. Запускатеся при нажатии t8. Результат работы должен быть виден в out-8.

let a8 = [1998, 2000, 1999, 2002, 2005];
let year = 1998;

function t8(arr, year) {
    let res = arr.every(item => {
        return (item >= year) ? true : false;
    })
    return res;
}

document.querySelector('.b-8').addEventListener('click', () => {
    document.querySelector('.out-8').textContent = t8(a8, year);
})

// Task 9
// Метод push мутирует массив. Давайте напишем pure функцию t9 которая принимает массив и число в качестве аргумента и возвращает новый массив равный исходному с добавленным в него числом ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-9. Для проверки - выводите результат на страницу через пробел.
function t9(arr, num) {
    arr.push(num);
    return arr;
}

document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').textContent = t9([99, 88, 77, 66], 5).join(' ');
})

// Task 10
// Метод push мутирует массив. Давайте напишем pure функцию t10 которая принимает массив и любое количество чисел в качестве аргументов и возвращает новый массив равный исходному с добавленными в него числами ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-10. Для проверки - выводите результат на страницу через пробел. 

function t10(arr, ...num) {
    for (let i = 0; i < num.length; i++) {
        arr.push(num[i])
    }
    return arr;
}

document.querySelector('.b-10').addEventListener('click', () => {
    document.querySelector('.out-10').textContent = t10([22, 44, 66], 88, 100).join(' ');
})

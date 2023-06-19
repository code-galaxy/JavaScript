// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью unShift добавляет полученную из input строку в массив a1.
// Функция выводит массив a1 в консоль и возращает массив a1.

let a1 = ['hello', 't'];
let i1 = document.querySelector('.i-1');

const f1 = () => {
    let data = i1.value;
    a1.unshift(data);
    console.log(a1);
    return a1;
}
document.querySelector('.b-1').addEventListener('click', f1);


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция считывает значение из i-2 (число). С помощью unShift число и его третью степень (куб) добавляются в массив a2.
// Обратите внимание, что добавление двух чисел нужно выполнить с помощью одного unShift. Функция выводит a2 в консоль и возвращает массив a2.

let a2 = ['b', 'c', 12, 34, 'dh', 17];

const f2 = () => {
    let i2 = +document.querySelector('.i-2').value;
    a2.unshift(i2, i2 ** 3);
    console.log(a2);
    document.querySelector('.i-2').value = '';
    return a2;
}
document.querySelector('.b-2').addEventListener('click', f2);

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция считывает значение из i-3 и с помощью unShift добавляет значение в массив a3.
// Изучите вывод в консоль. Разберитесь, что возвращает метод unShift.

let a3 = ['a', 'b'];

const f3 = () => {
    // ваш код
    let i3 = document.querySelector('.i-3').value;
    a3.unshift(i3);
    console.log(a3.unshift(i3));
    console.log(a3);

    document.querySelector('.i-3').value = '';
}
document.querySelector('.b-3').addEventListener('click', f3);

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция удаляет из массива первое значение с помощью shift. Выводит a4 в консоль. Изучите результат.


let a4 = [14, 15, 16, 17, 18];

const f4 = () => {
    a4.shift();
    console.log(a4);
    // console.log(a4.shift());
}
document.querySelector('.b-4').addEventListener('click', f4);

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция удаляет из массива нулевое значение с помощью shift и возвращает результат операции. Выводит a5 в консоль. Изучите решение.

let a5 = [55, 66, 77, 88, 99, 129];

const f5 = () => {
    console.log(a5);
    return a5.shift();
}
document.querySelector('.b-5').addEventListener('click', () => {
    console.log(f5());
    console.log(a5);
});

// TASK 06
// Давайте сделаем функцию, которая полностью будет эмулировать работу unShift без применения unShift ( push можно использовать).
// Функция принимает - элемент, и добавляет его в начало массива a6. Функция должна возвращать новую длину массива a6.


let a6 = ['a', 'b', 'c', 'd', 'e', 'f'];

const f6 = (elem) => {
    arr = [];
    arr.push(elem);

    for (let i = 0; i < a6.length; i++) {
        arr.push(a6[i]);
    }
    a6 = arr;
    console.log(a6);
    return a6.length;
}

document.querySelector('.b-6').addEventListener('click', () => {
    let elem = document.querySelector('.i-6').value;
    console.log(f6(elem));
});


// TASK 07
// По нажатию b-7 выполняется функция f7. Функция применяет метод shift к массиву a7, выводит массив в консоль и возврщает новую длину массива a7.

let a7 = [21, 22, 23, 24, 25, 26, 27];

const f7 = () => {
    a7.shift();
    console.log(a7);
    return a7.length;
}
document.querySelector('.b-7').addEventListener('click', () => {
    console.log(f7());
});
// TASK 08
// По нажатию b-8 выполняется функция f8. Функция должна применить slice с параметрами (1,4) к массиву a8 и вывести массив в консоль.


let a8 = [44, 45, 46, 47, 48, 49];

const f8 = () => {

    console.log(a8.slice(1, 4));
}
document.querySelector('.b-8').addEventListener('click', f8);

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна применить slice с параметрами (2) к массиву a9 и вывести массив в консоль.

let a9 = ['A', 2, 43, 12, 13, 14, 15, 16];

const f9 = () => {
    let arr = a9.slice(2);
    console.log(arr);
}
document.querySelector('.b-9').addEventListener('click', f9);

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция должна применить slice с параметрами (2, -2) к массиву a10 и вывести массив в консоль.

let a10 = [100, 2, 43, 12, 13, 14, 15, 16];

const f10 = () => {

    let arr = a10.slice(2, -2);
    console.log(arr);

}

document.querySelector('.b-10').addEventListener('click', f10());

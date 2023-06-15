// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью push добавляет полученную из input строку в массив a1.
// Функция выводит массив a1 в консоль.

let a1 = ['hello', 't'];
let i1 = document.querySelector('.i-1');

const f1 = () => {
    let data = i1.value;
    a1.push(data);
    console.log(a1);
    i1.value = '';
}
document.querySelector('.b-1').addEventListener('click', f1);


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция считывает значение из i-2 (число). 
// С помощью push число и его третья степень ( куб) добавляются в массив a2. 
// Обратите внимание, что добавление двух чисел нужно выполнить с помощью одного push. Функция выводит a2 в консоль.

let a2 = ['b', 'c', 12, 34, 'dh', 17];
let i2 = document.querySelector('.i-2');

const f2 = () => {
    let data = +i2.value;
    a2.push(data, Math.pow(data, 3));
    i2.value = '';
    console.log(a2);
}
document.querySelector('.b-2').addEventListener('click', f2);


// TASK 03
// По нажатию b-3 выполняется функция f3. Функция считывает значение из i-3 и с помощью push добавляет значение в массив a3.
// Изучите вывод в консоль. Разберитесь, что возвращает метод push.

let a3 = ['a', 'b'];
let i3 = document.querySelector('.i-3');

const f3 = () => {
    let data = i3.value;
    a3.push(data);
    // console.log(a3.push(data));
    // console.log(a3.length);
    console.log(a3);
    i3.value = '';
}
document.querySelector('.b-3').addEventListener('click', f3);


// TASK 04
// По нажатию b-4 выполняется функция f4. Функция добавляет в массив a4 переменную a4_1. Выводит a4 в консоль. Изучите результат.

let a4 = [1, 2];
let a4_1 = [5, 6];

const f4 = () => {
    a4.push(a4_1);
    console.log(a4);
}
document.querySelector('.b-4').addEventListener('click', f4);


// TASK 05
// По нажатию b-5 выполняется функция f5. Функция считывает значение из i-5 и добавляет это значение в конец массива a5. 
// Обратите внимание, в данном задании запрещено использовать push, мы должны выполнить присвоение через явное указание индекса последнего элемента + 1.
// В этом нам поможет знание длины массива a5. Таким образом, мы выполняем частичную эмуляцию метода push. После добавления массив выводится в консоль. 
// Внимание! Полученное из input переводите в число!

let a5 = [55, 66, 77];
let i5 = document.querySelector('.i-5');

const f5 = () => {
    let data = +i5.value;
    a5[a5.length] = data;
    
    // or other variant
    // a5[(a5.length - 1) + 1] = data;
    
    console.log(a5);
}
document.querySelector('.b-5').addEventListener('click', f5);


// TASK 06
// Давайте сделаем функцию, которая полностью будет эмулировать работу push без применения push. Функция принимает 2 аргумента, первый - массив, второй элемент. Добавляет элемент в конец массива, и возвращает новую длину массива.

let a6 = ['a', 'b'];

const f6 = (arr, elem) => {
    arr[(arr.length - 1) + 1] = elem;

// or other variant
// arr[arr.length] = elem;
    console.log(arr);
    return arr.length;
}
document.querySelector('.b-6').addEventListener('click', () => {
    let elem = document.querySelector('.i-6').value;
    console.log(f6(a6, elem));
});


// TASK 07
// По нажатию b-7 выполняется функция f7. Функция применяет метод pop к массиву a7 и выводит массив в консоль.

let a7 = [21, 22, 23, 24, 25, 26, 27];

const f7 = () => {
    a7.pop();
    console.log(a7);
}
document.querySelector('.b-7').addEventListener('click', f7);

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция должна применить pop к массиву a8 и возвратить результат данной операции.
// Нажимая кнопку удалите все элементы. Изучите что возвращает операция когда есть элементы доступные для удаления и когда массив пуст.


let a8 = [99, 98, 97, 96];

const f8 = () => {
    //console.log(a8);
    return a8.pop();
}
document.querySelector('.b-8').addEventListener('click', () => {
    console.log(f8());
});

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна применить pop() к массиву a9. После применения массив выведите в консоль.

let a9 = ['A', 2, true, function () { console.log(2) }, [2, 3, 4], { "test": 1 }];

const f9 = () => {
    a9.pop();
    console.log(a9);
}
document.querySelector('.b-9').addEventListener('click', f9);

// TASK 10
// Ну и на прокачку ваших скиллов. Напишем функцию, которая эмулирует работу pop - удаляет последний элемент массива a10 и возвращает удаленный элемент.

let a10 = [67, '55', 2, 5, '4', '8', 8, '66', '54', 11];

const f10 = () => {
    //console.log(a10);

    if (!a10.length) return undefined;

    let elem = a10[a10.length - 1];
    let index = a10.length - 1;

    a10.length = index;

    return elem;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});



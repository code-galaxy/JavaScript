// Task 1
// Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. 
//После чего выводит массив в .out-1.
//Поскольку мы будем выводить массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией showArr. 

function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}

let d1 = [33, 'best', 66, 'best'];
let i1 = document.querySelector('.i-1');
function f1() {
    d1[d1.length] = i1.value
    //d1.push(i1.value);
    showArr('.out-1', d1);
}
document.querySelector('.b-1').onclick = f1;


// Task 2
//Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2
// функция выполняется при нажатии кнопки b-2

function f2() {
    d1.pop();
    showArr('.out-2', d1);
}
document.querySelector('.b-2').onclick = f2;


// Task 3
// Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3
// функция выполняется при нажатии кнопки b-3

function f3() {
    d1.shift();
    showArr('.out-3', d1);
}

document.querySelector('.b-3').onclick = f3;

// Task 4
// Напишите функцию f4, которая применяет метод push к массиву d1, данные для массива берите из i-4, а затем выводит его (showArr) в .out-4
// функция выполняется при нажатии кнопки b-4

let i4 = document.querySelector('.i-4');
function f4() {
    let a = i4.value;
    d1.push(a);
    showArr('.out-4', d1);
}
document.querySelector('.b-4').onclick = f4;


// Task 5
// Напишите функцию f5, которая применяет метод unshift к массиву d1, данные для массива берите из i-5, а затем выводит его (showArr) в .out-5
// функция выполняется при нажатии кнопки b-5

let i5 = document.querySelector('.i-5');
function f5() {
    let a = i5.value;
    d1.unshift(a);
    showArr('.out-5', d1);
}
document.querySelector('.b-5').onclick = f5;

// Task 6
// Напишите функцию f6, которая эмулирует работу метода push применительно к массиву d6. 
// Т.е. добавляет значение из i-6 как последний элемент в массив d6.
// Эмуляция, значит, что мы получим результат аналогичный методу push без применения его. 
// Эмуляция заключается в присвоение значения как последнего элемента массива. 
// Как вычислить индекс последнего элемента используя длину массива - вы знаете из предыдущего урока.
// Повторный запуск функции должен также приводить к добавлению элемента.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

let d6 = ['test', 5, 12];
let i6 = document.querySelector('.i-6');
function f6() {
    let a = i6.value;
    d6[(d6.length - 1) + 1] = a;
    showArr('.out-6', d6);
}
document.querySelector('.b-6').onclick = f6;

// Task 7
// Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7. 
// Эмулировать - получать результат аналогичный pop, но без применения pop. 
// Функция может быть вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
function f7() {
    d7.splice([d7.length - 1], 1);
// d7.length = d7.length-1;
    showArr('.out-7', d7);
}
document.querySelector('.b-7').onclick = f7;


// Task 8
// Напишите функцию f8, которая эмулирует работу метода unshift - добавляем значение из i-8 в начало массива d8.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let d8 = [2, '4', 12, 67, 'hello'];
let i8 = document.querySelector('.i-8');

function f8() {
    let a = +i8.value;
    let out = [];
    out[0] = a;
    for (let i = 0; i < d8.length; i++) {
        out[out.length] = d8[i];
    }
    d8 = out;
    showArr('.out-8', d8);
}
document.querySelector('.b-8').onclick = f8;


// Task 9
// Напишите функцию f8, которая эмулирует работу метода shift - на примере массива d9.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let d9 = [100, 200, 300, 400, 700, 121];
function f9() {
    let out = [];
    for (let i = 1; i < d9.length; i++) {  // WARNING i=1;
        out[out.length] = d9[i];
    }
    d9 = out;
    
    // other approach 
    //d9.splice(0, 1); 
    showArr('.out-9', d9);
}
document.querySelector('.b-9').onclick = f9;


// Task 10
// Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let d10 = [3, 14, 15, 92, 6];
function f10() {
    d10.reverse();
    showArr('.out-10', d10);
}
document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишите функцию, которая получает число из input i-11, переводит в число, и с помощью метода indexOf проверяет наличие в массиве d11. 
// Функция выводит в out-11 -1 если такого числа нет в массиве, либо его индекс в массиве.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let d11 = [2, 3, 4, 5, 6, 7];
const i11 = document.querySelector('.i-11');
const out11 = document.querySelector('.out-11');
function f11() {
    let a = +i11.value;
    out11.innerHTML = d11.indexOf(a);
}
document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишите функцию f12, которая эмулирует работу метода indexOf - ищет введенное число в массиве d12 (перебором). 
// Если числа нет - выводит -1, если есть - его позицию в массиве.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let d12 = [6, 62, 60, 70, 1, 5, 6];
let i12 = document.querySelector('.i-12');
let out12 = document.querySelector('.out-12');
function f12() {
    let out = '';
    let a = +i12.value;
    for (let i = 0; i < d12.length; i++) {
        if (a == d12[i]) {
            out = i;
            break;
        }
        else {
            out = -1;
        }
    }
    out12.innerHTML = out;
}
document.querySelector('.b-12').onclick = f12;


// Task 13
// Напишите функцию f13, которая эмулирует работу метода reverse. 
// Т.е. создает новый массив на основе d13 с обратным порядком элементов и выводит в out-13.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13

let d13 = [6, 0, 22, 1, 4, 76];
function f13() {
    let out = [];
    for (let i = 0; i < d13.length; i++) {
        out.unshift(d13[i]);
    }
    d13=out;
    
// other approach
// for (let i = d13.length - 1; i >= 0; i--) {
//     out.push(d13[i]);
// }
// d13 = out;
   
    showArr('.out-13', d13);
}
document.querySelector('.b-13').onclick = f13;


// Task 14
// Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, что количество элементов равно введенному числу, и каждый элемент равен 1. Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let d14 = [];
let i14 = document.querySelector('.i-14');
function f14() {
    let a = i14.value;
    d14.length = a;

    for (let i = 0; i < d14.length; i++) {
        d14[i] = 1;
    }
    showArr('.out-14', d14);
}
document.querySelector('.b-14').onclick = f14;

// Task 15
// Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15  (переводим в число), а потом - если нет - добавляет его в массив.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let i15 = document.querySelector('.i-15');

function f15() {
    let a = +i15.value;
    let out = d15.indexOf(a);
    if (out == -1) {
        d15.push(a);
    }

    showArr('.out-15', d15);
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {

    d16 = d161.concat(d162);

    showArr('.out-16', d16);
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Напишите функцию f17, которая эмулирует работу метода concat. Функция должна объедиять массивы d171 и d172 и записывать результат в d17. Для эмуляции используйт цикл.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let d17 = [];
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1, 2, 3, 4, 5];

function f17() {
    for (let i = 0; i < d172.length; i++) {
        d171.push(d172[i]);
    }
    d17 = d171;
    showArr('.out-17', d17);
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Напишите функцию f18, которая получает значение из i-18 и проверяет есть ли такое значение в массиве d18 c использованием метода include. 
//Результат применения метода - выводится в .out-18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];
let i18 = document.querySelector('.i-18');
let out18 = document.querySelector('.out-18');

function f18() {
    let a = i18.value;
    out18.innerHTML = d18.includes(a);

}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Напишите фукнцию f19, которая выводит самую длинную строку maxString из массива d19 в out-19.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19
let out19 = document.querySelector('.out-19');
let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
let maxString = d19[0];

function f19() {

    for (let i = 1; i < d19.length; i++) {
        if (d19[i].length > maxString.length) {
            maxString = d19[i];
        }
    }
    out19.innerHTML = maxString;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Напишите функцию f20, которая применяет к массиву d20 метод join с параметрами и соединяет элементы массива в одну строку. Результат выводит в .out-20. Укажите мето так d20.join(''). Обратите внимание  - между апострофами нет пробела!!!.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let d20 = [4, 5, 6, 7, 8, 9, 10];
let out20 = document.querySelector('.out-20');
function f20() {
    out20.innerHTML = d20.join('');
}

document.querySelector('.b-20').onclick = f20;

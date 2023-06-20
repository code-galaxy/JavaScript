// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью concat объединяет массивы a1 и a1_1 в массив a1_res. Результирующий массив выводится в out-1 ( каждый элемент через пробел).


let a1 = [5, 6, 7];
let a1_1 = [55, 66, 77];
let a1_res;

const f1 = () => {
    a1_res = a1.concat(a1_1);
    document.querySelector('.out-1').innerHTML = a1_res.join(' ');
}
document.querySelector('.b-1').addEventListener('click', f1);


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью concat объединяет строки a2 и a2_1 в строку a2_res. Результирующая строка выводится в out-2.

let a2 = 'test'
let a2_1 = 'best';
let a2_res;

const f2 = () => {
    a2_res = a2.concat(a2_1);
    document.querySelector('.out-2').innerHTML = a2_res;
}
document.querySelector('.b-2').addEventListener('click', f2);


// TASK 03
//По нажатию b-3 выполняется функция f3. Функция с помощью concat объединяет строки a3 и массив a3_1 с помощью метода concat. Результат поместите в строку a3_res. Результирующая строка выводится в out-3.


let a3 = 'some_text';
let a3_1 = [5, 7];
let a3_res;

const f3 = () => {
    a3_res = a3.concat(a3_1);
    document.querySelector('.out-3').innerHTML = a3_res;
}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция с помощью concat объединяет массив a4 и строку a4_1 с помощью метода concat. Результат поместите в a4_res. Результат выведите в out-4 через пробел.


let a4 = [5, 7];
let a4_1 = 'prime';
let a4_res;

let out4 = document.querySelector('.out-4');

const f4 = () => {
    let out = '';
    a4_res = a4.concat(a4_1);

    for (let i = 0; i < a4_res.length; i++) {
        out += a4_res[i] + ' ';
    }
    out4.innerHTML = out;
}

// TASK 05
// Напишите функцию f5 эмулятор concat. Функция должна принимать два аргумента массива и возвращать новый массив объединенный из этих двух. 

const f5 = (ar1, ar2) => {
    let res = [];
    for (let i = 0; i < ar2.length; i++) {
        ar1.push(ar2[i]);
    }
    res = ar1;
    console.log(res);
    return res;
}

// TASK 06
// Напишите функцию f6 эмулятор concat. Функция должна принимать любое количество массивов как аргументы и возвращать новый массив объединенный из принятых. 


// для примера я написал 1, но тестировать буду с любым количеством

const f6 = (...arg1) => {
    let res = [];

    for (let k = 0; k < arg1.length; k++) {
        for (let i = 0; i < arg1[k].length; i++) {
            res.push(arg1[k][i])
        }
    }
    console.log(res);
    return res;
}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция удалить 3 элемента из a7 начиная со второго индекса с помощью splice. Выведите a7 в out-7 через пробел.

let a7 = [3, -4, 5, -6, 7, 45, 67];
let out7 = document.querySelector('.out-7');

const f7 = () => {
    let out = '';
    a7.splice(2, 3);

    for (let i = 0; i < a7.length; i++) {
        out += a7[i] + ' ';
    }
    out7.innerHTML = out;
}

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция удалить n8 элементoв из a8 начиная со k8 индекса с помощью splice. Выведите a8 в out-8 через пробел.

let a8 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 1];
n8 = 4;
k8 = 3;

let out8 = document.querySelector('.out-8');

const f8 = () => {
    let out = '';
    a8.splice(k8, n8);

    for (let i = 0; i < a8.length; i++)
        out += a8[i] + ' ';
    out8.innerHTML = out;
}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция перебирает удаляет 3 элемента с начала массива a9 и добавляет элементы 7 и 8 (числа) вместо удаленных. 

let a9 = [-2, 3, -4, 5, -6, 7]; // 105
let out9 = document.querySelector('.out-9');

const f9 = () => {
    let out = '';
    a9.splice(0, 3, 7, 8);
    for (let i = 0; i < a9.length; i++)
        out += a9[i] + ' ';
    out9.innerHTML = out;
}

// TASK 10
// Напишите функцию эмуляцию splice. Функция принимает 4 параметра - исходный массив, индекс с которого удалять, количество удаляемых элементов,
// и массив с новыми элементами, которые нужно добавить. Возвращает НОВЫЙ массив на основе исходного и условий.

let a10 = [-2, 3, -4, 5, -6, 7];
let from = 2;
let num = 3;
let add = [999, 1000]

// что хочу получить в результате работы функции - [-2, 3, 999,1000,  7]
const f10 = (arr, from, num, add) => {

    let arr_start = arr.slice(0, from);
    let arr_end = arr.slice(num + from);
    let res = arr_start.concat(add, arr_end);
    console.log(res);

    return res;
}



document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', f4);
document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').innerHTML = f5([3, 4, 5], [6, 7, 8]);
});
document.querySelector('.b-6').addEventListener('click', () => {
    document.querySelector('.out-6').innerHTML = f6([2, 3], ['hi'], [6, 7, 8], [23, 5]);
});
document.querySelector('.b-7').addEventListener('click', f7);
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', () => {
    document.querySelector('.out-10').innerHTML = f10(a10, from, num, add);
});

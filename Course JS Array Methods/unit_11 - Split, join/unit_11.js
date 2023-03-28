// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью join должна объединить элементы массива a1 в строку. Разделитель не указывать. Результат вывести в out-1.


let a1 = [13, 15, 22, 23, 26, 35, 72];

const f1 = () => {
    let a1_res = a1.join();
    document.querySelector('.out-1').innerHTML = a1_res;
}


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью join должна объединить элементы массива a2 в строку. Разделитель - пустая строка. Результат вывести в out-2.

let a2 = [13, 15, 22, 23, 26, 35, 72];

const f2 = () => {
    let a2_res = a2.join('');
    document.querySelector('.out-2').innerHTML = a2_res;
}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью join должна объединить элементы массива a3 в строку. Разделитель - знак равно. Результат вывести в out-3.

let a3 = [13, 15, 22, 23, 26, 35, 72];

const f3 = () => {
    let a3_res = a3.join('=');
    document.querySelector('.out-3').innerHTML = a3_res;
}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция принимает два параметра - массив arr, и разделитель delimiter. Функция должна с помощью цикла эмулировать работу метода join и возвратить строку из элементов массива arr разделенных символом delimiter. Обратите внимание на конец строки!!! Функция должна возвратить строку. 

let a4 = [66, 77, 88];
let delimiter = '-';

const f4 = (arr, delimiter) => {
    let res = arr.join(delimiter);
    return res;
}

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция с помощью join должна объединить элементы массива a5 в строку. Разделитель - знак равно. Результат вывести в out-5.


let a5 = [100];
a5[56] = 56;
a5[57] = 56;

const f5 = () => {
    let a5_res = a5.join('=');
    document.querySelector('.out-5').innerHTML = a5_res;
}

// TASK 06 
// По нажатию b-6 выполняется функция f6. Функция с помощью split разделить строку s6 на массив a6_res по элементам. Один элемент - один символ. Результат вывести в out-6.


let s6 = 'hello';
let a6_res = [];

const f6 = () => {
    a6_res = [];
    a6_res = s6.split('');

    console.log(a6_res);
    document.querySelector('.out-6').innerHTML = a6_res;
}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция с помощью split разделить строку s7 на массив a7_res по элементам. Получать из строки только 3 первых элемента. Один элемент - один символ. Результат вывести в out-7.


let s7 = 'hello';
let a7_res = [];

const f7 = () => {
    a7_res = [];
    a7_res = s7.split('', 3);

    document.querySelector('.out-7').innerHTML = a7_res;
}

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция должна развернуть строку.
// Поскольку reverse не работает со строками то мы должны сделать массив из строки s8, а потом развернуть его, а потом слепить обратно. 
// Результат - строку, записать в a8_res и вывести в out-8.

let s8 = 'abrikos';
let a8_res = '';

const f8 = () => {
    let res = s8.split('').reverse();
    a8_res = res.join('');

    console.log(a8_res);
    document.querySelector('.out-8').innerHTML = a8_res;
}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция с помощью spread должна на основе строки s9 создать массив a9_res.
// Результат - через пробел вывести массив в out-9.  

let s9 = 'hiall';
let a9_res = [];

const f9 = () => {
    a9_res = [...s9];
    console.log(a9_res);

    let out = '';
    for (let i = 0; i < a9_res.length; i++)
        out += a9_res[i] + ' ';

    document.querySelector('.out-9').innerHTML = out;
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция с помощью spread должна на основе строки s10 создать массив a10_res.
// Затем, с помощью filter удалить все символы из массива меньше l. Результат, через пробел вывести в out-10.


let s10 = 'fghijklmnoprsq';
let a10_res = [];

const f10 = () => {
    a10_res = [...s10];
    let res = a10_res.filter(item => {
        if (item > 'l')
            return true;
    })

    let out = '';
    for (let i=0; i < res.length; i++ )
    out += res[i]+ ' ';
    document.querySelector('.out-10').innerHTML = out;

}


document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', () => {
    document.querySelector('.out-4').innerHTML = f4(a4, delimiter);
});
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', f7);
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', f10);
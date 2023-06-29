// Task 1
// Напишите функцию t1, которая возвращает сумму переданных ей аргументов a и b.

function t1(a, b) {
    return a + b;
}
document.querySelector('.b-1').addEventListener('click', function () {
    document.querySelector('.out-1').textContent = t1(120, 140);
})


// Task 2.
//Напишите функцию t2, которая принимает 2 аргумента и возвращает больший из них. 

function t2(a, b) {
    if (a > b) return a;
    else return b;
}
document.querySelector('.b-2').addEventListener('click', function () {
    document.querySelector('.out-2').textContent = t2(120, 140);
})


// Task 3.
// На странице есть checkbox .ch-3. Напишите функцию, которая возвращает его value если он выбран и false если не выбран. 

function t3() {
    let checkBox = document.querySelector('.ch-3');
    if (checkBox.checked) return checkBox.value;
    return false;
}
document.querySelector('.b-3').addEventListener('click', function () {
    document.querySelector('.out-3').textContent = t3();
})

// Task 4
// На странице есть radiobutton .r-4. Напишите функцию, которая возвращет value выбранного radiobutton. 


function t4() {
    let r4 = document.querySelectorAll('.r-4');
    let res = '';
    for (let i = 0; i < r4.length; i++) {
        if (r4[i].checked)
            res = r4[i].value;
    }
    return res;
}


document.querySelector('.b-4').addEventListener('click', function () {
    document.querySelector('.out-4').textContent = t4();
})


// Task 5
// Напишите функцию t5, которая получает из s51 число, из s52 знак и из s53 число и возвращает результат математической операции над этими числами с этим знаком. Т.е. возвращает или сумму чисел, или произведение, или разность или деление.

function t5() {
    let s51 = +document.querySelector('.s51').value;
    let operator = document.querySelector('.s52').value;
    let s53 = +document.querySelector('.s53').value;

    switch (operator) {
        case '-': return s51 - s53;
        case '+': return s51 + s53;
        case '*': return s51 * s53;
        case '/': return s51 / s53;
    }
}

document.querySelector('.b-5').addEventListener('click', function () {
    document.querySelector('.out-5').textContent = t5();
})



// Task 6
// Напишите функцию, которая принимает три аргумента: num1, num2 - числа и sign - строку знак операции. sign может быть равен '+', '-', '/', '*'. В зависимости от знака функция должна возвращать результат выбранной операции над числами. Например передали числа 10 и 5 и знак '/'. Функция должна возвратить 2.

function t6(num1, num2, sign) {

    switch (sign) {
        case '-': return num1 - num2;
        case '+': return num1 + num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
    }
}

document.querySelector('.b-6').addEventListener('click', function () {
    document.querySelector('.out-6').textContent = t6(100, 2, '*');
})



// Task 7
// Напишите функцию, которая принимает аргумент и возвращает true если аргумент число и false во всех остальных случаях

function t7(arg) {
    if (typeof arg === 'number') return true;
    return false;
}

document.querySelector('.b-7').addEventListener('click', function () {
    document.querySelector('.out-7').textContent = t7(100);
})



// Task 8
// Напишите функцию, которая принимает число дробь (например 23.34) и параметр 'floor' или 'ceil' и возвращает число с соответствующим округлением ( либо floor либо ceil).


function t8(num, method) {
    return Math[method](num);
}

document.querySelector('.b-8').addEventListener('click', function () {
    document.querySelector('.out-8').textContent = 10 + t8(100.11, 'ceil');
})




// Task 9
// Напишите функцию, которая принимает число и степень в которую нужно возвести число. Возвращает true если число возведенное в степень четное и false если не четное.

function t9(n, p) {
    if ((n ** p) % 2 === 0) return true;
    return false;

}

document.querySelector('.b-9').addEventListener('click', function () {
    document.querySelector('.out-9').textContent = t9(3, 3);
})




// Task 10
// Напишите функцию, t10, которая возвращает количество переданных ей аргументов (число).


function t10() {
    return arguments.length;
}

document.querySelector('.b-10').addEventListener('click', function () {
    document.querySelector('.out-10').textContent = t10(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 11
// Напишите функцию, t11, которая возвращает cумму переданных ей аргументов (число). Используем arguments.

function t11() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

document.querySelector('.b-11').addEventListener('click', function () {
    document.querySelector('.out-11').textContent = t11(33, 22, 44, 11, 55, 66, 11, 66);
})

// Task 12
// Напишите функцию, t12, которая возвращает cумму переданных ей аргументов (число). Используем rest.

function t12(...args) {
    return args.reduce((accum, item) => accum += item);
}

document.querySelector('.b-12').addEventListener('click', function () {
    document.querySelector('.out-12').textContent = t12(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 13
// Напишите функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

function t13(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.b-13').addEventListener('click', function () {
    document.querySelector('.out-13').textContent = t13(100, 120);
})


// Task 14
// Напишите функцию, которая возвращает строку в виде rgb(xxx,yyy,zzz) где xxx, yyy, zzz случайные целые числа в диапазонах от 0 до 255. В строке не должно быть пробелов. Для генерации случайных чисел используйте функцию t13.

function t14() {
    return `rgb(${t13(0, 255)},${t13(0, 255)},${t13(0, 255)})`;

}

document.querySelector('.b-14').addEventListener('click', function () {
    document.querySelector('.out-14').style.background = t14();
})


// Task 15
// Напишите функцию, которая получает строку как аргумент и возвращает строку очищенную от пробелов ( с начала и конца) или false если строка содержит только пробелы. 


function t15(str) {
    if (str.trim() == '') return false;
    return str.trim();
}

document.querySelector('.b-15').addEventListener('click', function () {
    console.log(t15('           hi              '));
})

// Task 16
// Напишите функцию, которая получает строку как аргумент и возвращает строку приведенную к нижнему регистру. 

function t16(str) {
    return str.toLowerCase();
}

document.querySelector('.b-16').addEventListener('click', function () {
    document.querySelector('.out-16').textContent = t16('HelLO wORLd');
})

// Task 17
// Напишите функцию, которая получает value выбранного option select.s-171 и возвращает его.

function t17() {
    return document.querySelector('.s-171').value;
}

document.querySelector('.s-171').addEventListener('change', function () {
    document.querySelector('.s-172').value = t17();
})

// Task 18
// Напишите функцию, которая получает value из input.i-18 и возвращает его. 

function t18() {
    return document.querySelector('.i-18').value;
}

document.querySelector('.i-18').addEventListener('input', function () {
    document.querySelector('.out-18').textContent = t18();
})

// Task 19
// Напишите функцию, которая получает value из input.i-19 и возвращает его. 

function t19() {
    return document.querySelector('.i-19').value;
}

document.querySelector('.i-19').addEventListener('input', function () {
    document.querySelector('.out-19').style.borderRadius = t19() + 'px';
})

// Task 20
// Напишите функцию, которая получает строку и возвращает "развернутую" строку. 

function t20(s) {
    let str = s.split('').reverse();
    return str.join('');
}

document.querySelector('.b-20').addEventListener('click', function () {
    document.querySelector('.out-20').textContent = t20('hello');
})


// Task 21
// Напишите функцию, которая в зависимости от параметра even или odd возвращает случайное целое четное (even) или не четное (odd) число от 10 до 20.
// Для генерации случайного числа используйте t13.

function t21(s) {

    while (true) {
        let num = t13(10, 20);

        if (num % 2 === 0 && s == 'even') return num;
        if (num % 2 !== 0 && s == 'odd') return num;
    }
}

document.querySelector('.b-21').addEventListener('click', function () {
    document.querySelector('.out-21').textContent = 10 + t21('odd') + 20;
})


// Task 22
// Напишите функцию callback22, которая принимает параметр item и если он четный то возвращает true. Если все выполнено верно, то на выходе вы получите только массив четных элементов из массива ar22.

const ar22 = [3, 4, 5, 6, 7, 8];

function t22() {
    return ar22.filter(callback22);
}

function callback22(item) {
    if (item % 2 === 0) return item;
}

document.querySelector('.b-22').addEventListener('click', function () {
    document.querySelector('.out-22').textContent = t22();
})

// Task 23
// Напишите функцию callback23, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar23 = [3, 4, 5, 6, 7, 8];

function t23() {
    return ar23.map(callback23);
}

function callback23(item) {
    return item ** 2;
}

document.querySelector('.b-23').addEventListener('click', function () {
    document.querySelector('.out-23').textContent = t23();
})


// Task 24
// Напишите функцию callback24, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar24 = [3, 4, 5, 6, 7, 8];

function t24() {
    let t = [];
    ar24.forEach(item => {
        let newItem = callback24(item);
        t.push(newItem);
    });
    return t;
}

function callback24(item) {
    return item ** 2;

}

document.querySelector('.b-24').addEventListener('click', function () {
    document.querySelector('.out-24').textContent = t24();
})


// Task 25
// Напишите функцию которая принимает массив как аргумент и проверяет что в нем одни числа. Возвращает true если это так и false в противном.


function t25(arr) {

    let res = arr.every(item => {
        if (typeof item === 'number') return true;
    })
    return res;
}


document.querySelector('.b-25').addEventListener('click', function () {
    document.querySelector('.out-25').textContent = t25([4, 5, 6]);
})

// Task 26
// Напишите функцию которая получает из input.i-26 имя пользователя и если это не пустая строка - то выводит его в out-26 в нижнем регистре. Если строка пустая - то выходит из функции.


function t26() {
    let i26 = document.querySelector('.i-26').value;

    if (i26.trim() !== '') {
        document.querySelector('.out-26').innerHTML = i26.trim().toLowerCase();
    }
    return;
}

document.querySelector('.b-26').addEventListener('click', t26);

// Task 27
// Напишите функцию которая проверяет, что строка из аргумента v находится в объекте  объекте obj27 как значение. Если находит совпадение - возвращает ключ. Если не находит - false.

const obj27 = {
    h: 'a',
    j: 'b',
    k: 'z',
    m: 'w'
}

function t27(v) {
    for (let key in obj27) {
        if (obj27[key] === v)
            return key;
    }
    return false;
}

document.querySelector('.b-27').addEventListener('click', function () {
    let z = document.querySelector('.i-27').value;
    document.querySelector('.out-27').textContent = t27(z);
})


// Task 28
// Напишите функцию которая принимает два аргумента - строку и подстроку и если подстрока есть в строке - возвращает true, если нет false.

function t28(str, substr) {

    if (str.includes(substr)) return true;
    return false;
}

document.querySelector('.b-28').addEventListener('click', function () {
    document.querySelector('.out-28').textContent = t28('hello my world', 'or');
})

// Task 29
// Напишите функцию, которая получает в качестве аргументов строки и возвращает большую строку (прямым сравнением).

function t29(str1, str2) {
    if (str1 > str2) return str1;
    return str2;
}

document.querySelector('.b-29').addEventListener('click', function () {
    document.querySelector('.out-29').textContent = t29('hello', 'orBait');
})



// Task 30
// Напишите функцию t30, которая возвращает функцию t31

function t31() {
    return true;
}
//console.log(t31);

function t30() {
    return t31;
}


document.querySelector('.b-30').addEventListener('click', function () {
    document.querySelector('.out-30').textContent = t30();
})


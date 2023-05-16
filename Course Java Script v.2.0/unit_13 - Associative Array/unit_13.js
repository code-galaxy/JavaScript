// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

function f1() {
    let a1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    document.querySelector('.out-1').innerHTML = a1.two;
    return a1.two;
}
document.querySelector('.b-1').onclick = f1;


// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
// Вывод, как и в предыдущем задании пишем "руками"

function f2() {
    let a2 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi"
    };

    return a2.five;
}
document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').innerHTML = f2();
}


// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение hi из массива a3. Возвратите это значение. Вывод - через пробел.
// Вывод, как и в предыдущем задании пишем "руками"

function f3() {
    let a3 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };
    let out = a3.five + ' ' + a3.odd;
    return out;
}
document.querySelector('.b-3').onclick = () => {
    document.querySelector('.out-3').innerHTML = f3();
}


// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. 
//Формат вывода - ключ пробел значение перенос строки +' <br>'. Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!


let a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};
function f4() {
    let out = '';
    for (let key in a4) {
        out += key + ' ' + a4[key] + ' <br>';
    }
    return out;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
}

// Task 5
// Функция f4 жестко привязана к массиву a4. Это не удобно. 
//Давайте напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).


function f5(arr, block) {
    let out = '';
    for (let key in arr) {
        out += `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block).innerHTML = out;

    // формат вывода `${key} : ${arr[key]} <br>`;
    //
    // тут вывод в блок block
}

// давайте протестируем f5

document.querySelector('.b-5').onclick = () => {
    let a5 = {
        "one": 1,
        "two": 2
    }
    f5(a5, '.out-5');
}


// Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. 
// Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.


let a6 = {
    "b": 17,
    "e": 22
};
//a6.i61.value = 


function f6() {
    let i61 = document.querySelector('.i-61').value;
    let i62 = document.querySelector('.i-62').value;
    a6[i61] = i62;

    let out = '';
    for (let key in a6) {
        //out += key + ' : '+ a6[key] +'<br>';
        out += ` ${key} : ${a6[key]} <br>`;
    }
    document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. 
//Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

let a7 = {
    "b": 17,
    "e": 22
};


function f7() {
    let out = 0;
    let i7 = document.querySelector('.i-7').value;
    for (let key in a7) {
        if (key == i7) {
            out = 1;
            break;
        }
    }
    document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.

let a8 = {
    "b": 17,
    "e": 22
};

function f8() {
    let out = 0;
    let i8 = document.querySelector('.i-8').value;
    for (let key in a8) {
        if (key == i8) {
            out = a8[key];
            break;
        }
    }
    document.querySelector('.out-8').innerHTML = out;
    return out;
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9,
// которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет - то выводить пустую строку.

let a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f9() {
    let i9 = document.querySelector('.i-9').value;
    let out = '';
    for (let key in a9) {
        if (a9[key] == i9) {
            out += key + ' ';
        }
    }
    document.querySelector('.out-9').innerHTML = out;
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. 
// Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.

function f10(arr, val) {
    for (let key in arr) {
        if (val === arr[key]) {
            return true;
        }
    }
    return false;
}

document.querySelector('.b-10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }

    document.querySelector('.out-10').innerHTML = f10(a10, 22);
};


// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем. 
//После этого вывести массив в out-11. Для вывода используйте функцию f5.

let a11 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};


function f11() {
    let i11 = document.querySelector('.i-11').value;
    if (a11[i11]) {
        delete a11[i11];
    }

    f5(a11, '.out-11');
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//  При нажатии b-12 выполняете функцию f12. Функция должна получить значение из i-12 и удалить запись из массива a12 с таким значением. После этого вывести массив в out-12. Для вывода используйте функцию f5.

let a12 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 17,
};

function f12() {
    let i12 = document.querySelector('.i-12').value;
    for (let key in a12) {
        if (i12 == a12[key]) {
            delete a12[key];
        }
    }
    f5(a12, '.out-12');

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).

let a13 = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};
function f13() {
    let out = [];
    for (let key in a13) {
        if (typeof a13[key] === typeof 1) {
            out.push(a13[key]);
        }
    }
    let sum = 0;
    for (let i = 0; i < out.length; i++) {
        sum = sum + out[i];
    }
    document.querySelector('.out-13').innerHTML = sum;
}

document.querySelector('.b-13').onclick = f13;

// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу)  элементы вложенных массивов в a14. Вывод через пробел.
// Ожидаемый вывод - 1 3 6 9

let a14 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f14() {
    let out = '';
    for (let key in a14) {
        out += a14[key][0] + ' ';
    }
    document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна в out-15 выводить элементы вложенных массивов в a15. Вывод через пробел.

// т.е ожидаем 1 2 23 3 5 6 7 8 9 10

let a15 = {
    'prim': [1, 2, 23],
    'one': [3, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f15() {
    let out = '';
    for (let key in a15) {
        for (let i = 0; i < a15[key].length; i++) {
            out += a15[key][i] + ' ';
        }
    }
    document.querySelector('.out-15').innerHTML = out;
}
document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. 
//Вывод через пробел.

let a16 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f16() {
    let out = '';
    for (let key in a16) {
        out += a16[key]['name'] + ' ';
    }
    document.querySelector('.out-16').innerHTML = out;
}

document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.

let a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f17() {
    let out = '';
    for (let key in a17) {
        if (a17[key]['age'] > 30) {
            out += a17[key]['name'] + ' ';
        }
    }
    document.querySelector('.out-17').innerHTML = out;
}

document.querySelector('.b-17').onclick = f17;

// Task 18
// При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.

let a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f18() {
    let i18 = document.querySelector('.i-18').value;
    let out = '';

    if (i18 in a18) {
        for (let i = 0; i < a18[i18].length; i++) {
            out += a18[i18][i] + ' ';
        }
    }

    document.querySelector('.out-18').innerHTML = out;
}
document.querySelector('.b-18').onclick = f18;

// Task 19
// При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. 
//Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.
// Пользователь ввел Lisova - вывод red, ввел Obolon - вывод blue.

let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f19() {
    let i19 = document.querySelector('.i-19').value;
    let out = '';

    for (let key in a19) {
        for (let i = 0; i < a19[key].length; i++) {
            if (i19 == a19[key][i] || i19 == a19[key][i].toLowerCase()) {
                out = key;
            }
        }
    }
    document.querySelector('.out-19').innerHTML = out;
}
document.querySelector('.b-19').onclick = f19;

// Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку.
// Такие станции маркируются 2. Вывод через пробел

let a20 = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
}

function f20() {
    let out = '';

    for (let key in a20) {
        for (let i = 0; i < a20[key].length; i++) {
            if (a20[key][i][1] == 2) {
                out += a20[key][i][0] + ' ';
            }
        }
    }
    document.querySelector('.out-20').innerHTML = out;
}
document.querySelector('.b-20').onclick = f20;

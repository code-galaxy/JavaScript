// TASK 01
// По нажатию b-1 выполняется функция f1. Функция применяет к массиву a1 метод map. В качестве функции callback указывается функция, которая умножает каждый элемент массива a1 на 3. Результат выполнения map присваивается в a1_res. После применения map выведите a1 в консоль, a1_res в консоль.

let a1 = [5, 6, 7];
let a1_res;
const f1 = () => {
    a1_res = a1.map(item => {
        return item * 3;
    })
    console.log(a1);
    console.log(a1_res);
}
document.querySelector('.b-1').addEventListener('click', f1);


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция применяет к массиву a2 метод map. В качестве функции callback указывается функция, которая умножает каждый элемент массива a2 на 3. Результат выполнения map присваивается в a2_res. После применения map выведите a2 в консоль, a2_res в консоль.
// Сделайте выводы как работает map с пропущенными, необъявленными элементами массива.

let a2 = [];
a2[2] = 8;
a2[3] = 13;
a2[6] = 3;

let a2_res;

const f2 = () => {
    a2_res = a2.map(item => {
        return item * 3;
    })
    console.log(a2);
    console.log(a2_res);
}
document.querySelector('.b-2').addEventListener('click', f2);


// TASK 03
// По нажатию b-3 выполняется функция f3. Функция применяет к массиву a3 метод map. В качестве функции callback указывается функция, которая умножает каждый элемент массива a3 на 3. Результат выполнения map присваивается в a3_res. После применения map выведите a3 в консоль, a3_res в консоль. Обратите внимание на условие внутри - оно изменит 3 элемент массива до того как до него дойдет очередь map.
// Сделайте выводы как работает map с изменными элементами массива.


let a3 = [2, 3, 4, 5, 6];
let a3_res;

const f3 = () => {
    a3_res = a3.map((item, index) => {
        if (index == 2) {
            a3[3] = 100;
        }
        return item * 3;
    });
    console.log(a3);
    console.log(a3_res);
}
document.querySelector('.b-3').addEventListener('click', f3);


// TASK 04
// По нажатию b-4 выполняется функция f4. Функция применяет к a4 метод map и возвращает в массив a4_res текущий элемент массива a4 если он больше нуля или 0 если равен или меньше. Выведите в консоль оба массива после выполнения f4.


let a4 = [3, -2, 4, 1, 9, -3, 0, 0, 2, -8, 12];
let a4_res;

const f4 = () => {
    a4_res = a4.map(item => {
        if (item > 0) return item;
        else return 0;
    })
    console.log(a4);
    console.log(a4_res);
}
document.querySelector('.b-4').addEventListener('click', f4);


// TASK 05
// По нажатию b-5 выполняется функция f5. Функция применяет к a5 метод map и возвращает в массив a5_res содержащий индексы массива a5. Выведите в консоль оба массива после выполнения f5.

let a5 = [55, 66, 77];
let a5_res;

const f5 = () => {
    a5_res = a5.map((item, index) => {
        return index;
    })
    console.log(a5);
    console.log(a5_res);
}
document.querySelector('.b-5').addEventListener('click', f5);


// TASK 06
// По нажатию b-6 выполняется функция f6. Функция применяет к a6 метод map и возвращает в массив a6_res содержащий индексы массива a6. Выведите в консоль оба массива после выполнения f6.

let a6 = [];
a6[2] = 8;
a6[3] = 13;
a6[6] = 3;

let a6_res;

const f6 = () => {
    a6_res = a6.map((item, index) => {
        return index;
    })
    console.log(a6);
    console.log(a6_res);
}
document.querySelector('.b-6').addEventListener('click', f6);


// TASK 07
// По нажатию b-7 выполняется функция f7. Функция применяет к a7 метод map и возвращает в массив a7_res содержащий длины вложенных массивов. Выведите в консоль оба массива после выполнения f7.

let a7 = [[22, 13, 45], [5, 2], [5, 3, 6, 7, 9]];
let a7_res;

const f7 = () => {
    a7_res = a7.map((item, index) => {
        return a7[index].length;
    })
    console.log(a7);
    console.log(a7_res);
}
document.querySelector('.b-7').addEventListener('click', f7);


// TASK 08
// По нажатию b-8 выполняется функция f8. Функция применяет к a8 метод map и возвращает в массив a8_res содержащий суммы элементов вложенных массивов. Выведите в консоль оба массива после выполнения f8.

let a8 = [[22, 13, 45], [5, 2], [5, 3, 6, 7, 9]];
let a8_res;

const f8 = () => {

    a8_res = a8.map((item, index) => {

        let sum = a8[index][0];

        for (let i = 1; i < a8[index].length; i++) {
            sum = sum + a8[index][i];
        }
        return a8[index] = sum;
    })
    console.log(a8);
    console.log(a8_res);


    //another variant
    //  for (let i = 0; i < a8.length; i++) {
    //     let sum = a8[i][0];
    //     console.log(a8[i][0]);

    //     for (let k = 1; k < a8[i].length; k++) {
    //         console.log(a8[i][k]);
    //         sum = sum + a8[i][k];
    //     }
    //     a8_res.push(sum);
    // }
}
document.querySelector('.b-8').addEventListener('click', f8);


// TASK 09
// По нажатию b-9 выполняется функция f9. Функция применяет к a9 метод map и создает два массива. a9_even содержит четные элементы a9, a9_index содержит 
// ВСЕ индексы элементов a9. Выведите в консоль все массивы после выполнения f9.

let a9 = [22, 13, 45, 5, 2, 5, 3, 6, 7, 9];
let a9_index;
let a9_even;

const f9 = () => {
    a9_even = [];
    
    a9_index = a9.map((item, index) =>{
    return index;        
    })

    a9.map(item => {
        if (item % 2 === 0) {
            a9_even.push(item);
        }
    });

    console.log(a9_index);
    console.log(a9_even);

    // another variant = Method 'filter':
    // a9_even = a9.filter(item => {
    //     if (item % 2 === 0) {
    //         return true;
    //     }
    // })
}
document.querySelector('.b-9').addEventListener('click', f9);


// TASK 10
// Ну и на прокачку ваших скиллов. Напишем функцию f10, которая эмулирует метод map. 
// Первым параметром функция принимает массив, второмы - имя функции которая применяется к элементам массива. 
// Возвращает новый элемент. Функция коллбек должна принимать только один параметр - текущий элемент. 
// Примените вашу функцию так, чтобы на основе массива a10, функция f10 создала массив a20_res, который содержит элементы a10 умноженные на 2. 
// В качестве коллбека примените-напишите callback10;

let a10 = [2, 3, 4, 5, 6, 7];
let a10_res;

const f10 = (arr, fc) => {
    a10_res = [];

    for (let i = 0; i < arr.length; i++) {
        elem = arr[i];
        a10_res.push(fc(elem));
    }
    console.log(a10_res);
}

function callback10(elem) {
    //console.log(elem);
    return elem * 2;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10(a10, callback10));
});

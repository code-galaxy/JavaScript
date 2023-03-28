// Task 1
// Запустите функцию t1, с контекстом out-1 с помощью call. Функция должна запускаться при загрузке страницы.

function t1() {
    this.textContent = 'work';
}

// тут прописываете запуск
t1.call(document.querySelector('.out-1'))

// Task 2
// Напишите анонимную функцию, которая при нажатии кнопки b-2 запускает функцию t1 с контекстом out-2. Используем call.

document.querySelector('.b-2').addEventListener('click', () => {
    t1.call(document.querySelector('.out-2'))
})

// Task 3.
// Запустите функцию max с аргументами 5, 8 и контекстом out-3. Функция должна запускаться при загрузке страницы. Используем call.

function max(a, b) {
    this.textContent = (a > b) ? a : b;
}

// тут прописываете запуск
max.call(document.querySelector('.out-3'), 5, 8);

// Task 4
// Напишите анонимную функцию, которая при нажатии b-4 запускает max с контектом out-4 и аргументами 22,13. Применяете call.

document.querySelector('.b-4').addEventListener('click', () => {
    max.call(document.querySelector('.out-4'), 22, 13)
})


// Task 5
// Напишите функцию t5, проверяет что у элемента на котором она была вызвана свойство textContent не равно undefined. Возвращает true или false

function t5() {
    // тут ваш код
    return (this.textContent !== undefined) ? true : false;
}

console.log(t5.call(document.querySelector('.out-5')));
console.log(t5.call(document.querySelector('.i-5')));


// Task 6
//Запустите функцию t1, с контекстом out-6 с помощью apply. Функция должна запускаться при загрузке страницы.

// тут прописываете запуск
t1.apply(document.querySelector('.out-6'))



// Task 7
// Запустите функцию max с аргументами 5, 8 и контекстом out-7. Функция должна запускаться при загрузке страницы. Используем apply.

document.querySelector('.b-7').addEventListener('click', () => {
    max.apply(document.querySelector('.out-7'), [5, 8])
})


// Task 8
// Метод Math.max - позволяет находить максимум из любого количества переданных в него аргументов. Наприме, он сработает и так Math.max(22,33,1,2,33,44,55,1,100,45) и так Math.max(33,1,2) (проверьте самостоятельно). Минус метода - его тяжело использовать если мы не знаем количество передаваемых в него аргументов. Давайте напишем следующий код (см. код). Как видите, теперь не важно сколько элементов в массиве, и мы всегда сможем найти максимум. Обратите внимание, в качестве контекста мы передали null. 

const out8 = document.querySelector('.out-8');
let ar8 = [45, 23, 21];

out8.textContent = Math.max.apply(null, ar8);

// Task 9
// По нажатию на кнопку b-9 запускается анонимная функция, которая через apply передает функции t9 контекст out-9 и массив ar9 элементов. Функция t9 должна вывести максимальный элемент массива.

let ar9 = [66, 55, 33, 77, 22, 81, 15];

function t9(...arr) {
    this.textContent = Math.max.apply(null, arr);
}

document.querySelector('.b-9').addEventListener('click', () => {
    t9.apply(document.querySelector('.out-9'), ar9)
})


// Task 10
// Допишите анонимную стрелочную функцию внутри some такую, что принимает элементы массива ar9 из some и возвращет true если тип данных элемента boolean.

let res10;
res10 = ar9.some(item => {
    return (typeof item === 'boolean') ? true : false;
});// сюда в скобки дописываете стрелочную функцию

console.log(res10);

// Task 11
// C помощью bind создайте функцию t11, которая основана на функции t1 но контекст - out-11. Запустите эту функцию.
const t11 = t1.bind(document.querySelector('.out-11'));
t11();

// Task 12
// C помощью bind создайте функцию t12, которая основана на функции max но контекст - out-12. Запустите эту функцию c числами 11, 88.

const t12 = max.bind(document.querySelector('.out-12'));
t12(11, 88);

// Task 13
// C помощью bind создайте частичную функцию t13, которая основана на функции max но контекст - out-13. Первый агрумент функции max должен быть заменен на 50.  Запустите эту функцию c числом 48.

const t13 = max.bind(document.querySelector('.out-13'), 50);
t13(48);

// Task 14
// С помощью bind создайте функцию t14, которая основана на t9, но в качестве контента задайте out-14. Запустите t14 передав ей как аргумент массив ar9.

const t14 = t9.bind(document.querySelector('.out-14'));
t14(...ar9);

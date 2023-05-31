// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. 
Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
   localStorage.setItem('5', 11);
}
document.querySelector('.b-1').onclick = t1;


// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

let a2 = [7, 6, 5];
function t2() {
   localStorage.setItem('a2', JSON.stringify(a2));
}
document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
   let out = '';
   let b = localStorage.getItem('a2');
   b = JSON.parse(b);

   for (let i = 0; i < b.length; i++) {
      out += b.indexOf(b[i]) + ' ' + b[i] + '<br>';
   }
   document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.b-3').onclick = t3;

// other variant
function t3() {
   let b = localStorage.getItem('a2');
   b = JSON.parse(b);
   console.log(b);
   console.log(typeof b);
   let out = '';
   b.forEach((element, index) => {
      out += `${index} ${element}<br>`;
   });
   document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

let a4 = {
   'hello': 'world',
   'hi': 'mahai'
}

function t4() {
   localStorage.setItem('a4', JSON.stringify(a4));
}
document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
   let b = localStorage.getItem('a4');
   b = JSON.parse(b);

   let out = '';
   for (let key in b) {
      out += `${key} ${b[key]} <br>`;
   }
   document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {

   localStorage.clear();

}
document.querySelector('.b-6').onclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let i7 = document.querySelector('.i-7');
let a7 = [];

function t7() {
   a7.push(i7.value);

   localStorage.setItem('a7', JSON.stringify(a7));

}
document.querySelector('.b-7').onclick = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
   a7.pop();
   localStorage.setItem('a7', JSON.stringify(a7));

}
document.querySelector('.b-8').onclick = t8;
// ваше событие здесь!!!



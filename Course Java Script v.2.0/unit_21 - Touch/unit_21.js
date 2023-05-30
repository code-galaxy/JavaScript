
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

let out1 = document.querySelector('.out-1');
function t1() {
   out1.innerHTML = 'touch';
}
document.querySelector('.div-1').addEventListener('touchstart', t1);


// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let out2 = document.querySelector('.out-2');
let count2 = 0;
function t2() {
   out2.innerHTML = count2++;
}
document.querySelector('.div-2').addEventListener('touchstart', t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

let out3 = document.querySelector('.out-3');
let div31 = document.querySelector('.div-3_1');
let div32 = document.querySelector('.div-3_2');

function t3(event) {
   if (event.target.classList.contains('div-3_1')) out3.innerHTML = div31.innerHTML;
   else out3.innerHTML = div32.innerHTML;
   console.log(event);
   
//    or other short variant
//    document.querySelector('.out-3').innerHTML = this.innerHTML;
}
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4.
При событии происходит вывод текста touch в out-4.  */

// Create a block with class 'div-4' and a button with class 'b-4'.

let div4 = document.querySelector('.div-4');
let out4 = document.querySelector('.out-4');
let btn4 = document.createElement('button');
btn4.classList.add('b-4');
btn4.innerHTML = 'b - 4';
btn4.style.width = '75px';
btn4.style.marginLeft = '25px';
btn4.style.color = 'black';
btn4.style.border = '1px solid grey';
div4.after(btn4);

function t4() {
   this.classList.toggle('active');
   div4.ontouchstart = () => {
      out4.innerHTML = 'touch';
   };
}
btn4.onclick = t4;


// ==================================================
//  second short variant
function t4(event) {
   console.log(event);
   document.querySelector('.div-4').addEventListener('touchstart', t4_1)
}
function t4_1(event) {
      console.log(event);
      document.querySelector('.out-4').innerHTML = 'touch';
}
document.querySelector('.b-4').addEventListener('touchstart', t4);


// Task 5 ============================================
/*  There is a button with class 'b-5'. When pushing a button, remove the event listener (ontouchstart) on the block with class 'div-4'.

let btn5 = document.querySelector('.b-5');
function t5() {
   div4.ontouchstart = null;
   
//    div4.removeEventListener('touchstart', t4_1);
}
btn5.onclick = t5;


// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

let out6 = document.querySelector('.out-6');

function t6(event) {
   if (event.target.classList.contains('div-4'))
      out6.innerHTML = 'touchend';
}
div4.ontouchend = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

let div7 = document.querySelector('.div-7');

function t7() {
   div7.style.background = 'red';

}
div7.ontouchstart = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива 
a8=[red, green, blue, orange, pink, yellow] */

let div8 = document.querySelector('.div-8');
let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {

   let max = a8.length - 1;
   let randomNum = Math.floor(0 + Math.random() * (max + 1 - 0));

   div8.style.background = a8[randomNum];
}
div8.ontouchstart = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

let div9 = document.querySelector('.div-9');
let out9 = document.querySelector('.out-9');

function t9(event) {
   //  console.log(event);

   out9.innerHTML = event.touches.length;
}
div9.ontouchstart = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let div10 = document.querySelector('.div-10');

let w = 75;

function t10() {

   div10.style.width = w++ + 'px';
}

div10.ontouchmove = t10;

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

let div11 = document.querySelector('.div-10');

function t11() {

}
//div11.ontouchmove = t11;
// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

let imgMax = document.querySelector('.img-12-max');

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images


const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;


function nextFunction() {
   if (count + 1 < images.length) {
      count++;
   }
   else {
      count = 0;
   }

   for (let item of images) item.classList.remove('active-img');

   images[count].classList.add('active-img');
   imgMax.src = images[count].src;
}


function prevFunction() {
   if (count - 1 < 0) {
      count = images.length;
   }
   count--;

   for (let item of images) item.classList.remove('active-img');

   images[count].classList.add('active-img');
   imgMax.src = images[count].src;
}


function resetFunction() {
   for (let item of images) item.classList.remove('active-img');
   count = 0;
   images[count].classList.add('active-img');
   imgMax.src = images[count].src;

}


const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

// ваше событие здесь!!!


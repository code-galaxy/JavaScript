// Task 1.
// Выведите в консоль ваше имя. Напоминаю - в ходе работы, консоль открыта всегда!

console.log('Yaroslav');

// Task 2.
// Выведите в консоль номер месяца в котором вы родились. Изучите чем отличается вывод числа и строки.

console.log(8);



// Task 3.
// Выведите в консоль строку: 'Добро '+'пожаловать '+' на курс'

console.log('Ласкаво ' + 'просимо ' + 'на курс');


// Task 4.
// С помощью alert выведите число 2019. После срабатывания кода - закомментируйте его, чтобы не мешал для дальнейшей разработки
//alert(2019);


// Task 5.
// С помощью console.log выведите результат операции 2019 - 200. Проверьте результат в консоли.

console.log(2019 - 200);


// Task 6.
// На странице создан div#six. С помощью document.getElementById запишите в div#six текст 'Hello World'.
document.getElementById('six').innerHTML = 'Hello world';


// Task 7.
// На странице создан div#seven. С помощью document.getElementById запишите в данный элемент результат умножения 12 на 12. Умножение можно сделать с помощью знака звездочки ( shift + 8).
document.getElementById('seven').innerHTML = 12 * 12;

// Task 8.
// На странице создан div.out-8. С помощью document.querySelector запишите в данный элемент текст 'task-8'. 
document.querySelector('.out-8').innerHTML = 'task-8';

// Task 9.
// На странице созданa верстка :
//<h2>Hello <span class="out-8">everyone</span></h2>
// Замените с помощью querySelector текст внутри span на 'world'.
// Т.е. результат должен выглядеть <h2>Hello <span class="out-8">world</span></h2>
document.querySelector('span').innerHTML = 'world';


// Task 10.
//На странице создан div.out-10. С помощью innerHTML запишите внутрь него следующую строку '<h2>Hi</h2>'.
document.querySelector('.out-10').innerHTML = '<h2>Hi</h2>';

// Task 11.
// На странице создан div.out-11. Запишите внутрь него строку '123'. Для записи используйте innerHTML. Второй операцией - допишите в div.out-11 строку '456'. Для дозаписи примените +=. Обратите внимание - код уже набран, вам нужно удалить комментарий и изучить принцип работы. 

document.querySelector('.out-11').innerHTML = '123';
document.querySelector('.out-11').innerHTML += '345';




// Task 12.
//  На странице создан div.out-12.  Получите его в переменную a. С помощью innerHTML запишите внутрь переменной a число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!

let a = document.querySelector('.out-12');
a.innerHTML = 3.1415;


// Task 13.
// На странице создан div.out-13. Получите его в переменную out13. С помощью innerHTML запишите в него строку: '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">'
//Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки. Главное чтобы кавычки чередовались. Поэтому при вставке оберните данную строку одинарными кавычками. Если все сделано верно - то на странице появится картинка

let b = document.querySelector('.out-13');
b.innerHTML = '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">';

// Task 14.
//Создайте две переменных z1 = 6, z2 = 3. В div.out-14  выведите результат умножение z1 на z2.
let z1 = 6;
let z2 = 3;
document.querySelector('.out-14').innerHTML = z1 * z2;

// Task 15.
// Создайте две переменных y1 = 6, y2 = 3. В div.out-15 выведите результат него деления y1 на y2.
let y1 = 6;
let y2 = 3;
document.querySelector('.out-15').innerHTML = y1 / y2;


// Task 16.
// Создайте две переменные x1='Hello', x2 = 5.  В div.out-16 выведите сумму x1 + x2. Изучите результат операции.
let x1 = 'Hello';
let x2 = 5;
document.querySelector('.out-16').innerHTML = x1 + x2;


// Task 17.
// Получите div.out-17 в переменную out17. Выведите эту переменную в консоль. Изучите вывод.

let out17 = document.querySelector('.out-17');
console.log(out17);
console.dir(out17);

// Task 18.
// Получите div.out-18 в переменную out18. Выведите эту переменную в консоль. Присвойте out18 значение 5 (out18 = 5). Выведите переменную в консоль. Изучите вывод.
let out18 = document.querySelector('.out-18');
console.log(out18);
out18 = 5;
console.log(out18);



// Task 19.
// Получите div.out-19 в переменную out19. Выведите в консоль out19. Теперь получите в эту же переменную out19 блок div c классом out-19-test. Выведите переменную out19 в консоль. Изучите что изменилось.
let out19 = document.querySelector('.out-19');
console.log(out19);
out19 = document.querySelector('.out-19-test');
console.log(out19);


// Task 20
// Получите div.out-20 в переменную out20. C помощью textContent запишите в него строку '<h2>Hi</h2>'. Изучите результат. Посмотрите как этот вывод отличается от вывода в 10 task.

let out20 = document.querySelector('.out-20');
out20.textContent = '<h2>Hi</h2>';

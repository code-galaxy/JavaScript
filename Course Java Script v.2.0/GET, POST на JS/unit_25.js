// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-string
// method: GET
// Ответ сервера (строку случайных символов) - выводит в .out-1
// не забывайте для авторизации отправлять apikey с указанным ключом.

function f1() {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', URL + '/api/25/random/random-string');
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      console.log(data);
      document.querySelector('.out-1').innerHTML = data['random-string'];
   }
   xhr.send();
}
document.querySelector('.b-1').addEventListener('click', f1);


// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-string
// method: GET
// в качестве query параметра задайте length равный числу из input .i-2
// Ответ сервера (строку случайных символов длиной length) - выводите в .out-2

// не забывайте для авторизации отправлять apikey с указанным ключом.

let i2 = document.querySelector('.i-2');

function f2() {
   let i = +i2.value;

   const xhr = new XMLHttpRequest();
   xhr.open('GET', URL + `/api/25/random/random-string?length=${i}`)
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      document.querySelector('.out-2').innerHTML = data['random-string'];
   }
   xhr.send();
}
document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: POST
// если запрос отправлен верно, то будет получен массив с описаниями рас игры "Космические рейнджеры"
// выведите в .out-3 названия рас (race) через пробел.

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f3() {
   const xhr = new XMLHttpRequest();
   xhr.open('POST', URL + '/api/25/sr/read');
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);

      const data = JSON.parse(xhr.response);
      console.log(data);

      let out = data.result.map(element => {
         return element.title;
      });
      console.log(out);
      document.querySelector('.out-3').innerHTML = out.join(' ');
   }
   xhr.send();
}
document.querySelector('.b-3').onclick = f3;


// Task 4. 
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-number
// method: GET
// укажите параметры запроса min = переменной min, max равное переменной max
// если запрос отправлен верно, то будет получен массив c случайным числом от min до max
// выведите в .out-4 полученное число.

// не забывайте для авторизации отправлять apikey с указанным ключом.

let min = 1000;
let max = 1150;

function f4() {

   const xhr = new XMLHttpRequest();
   xhr.open('GET', URL + `/api/25/random/random-number?min=${min}&max=${max}`);
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);
      document.querySelector('.out-4').innerHTML = JSON.parse(xhr.response)['random-number'];
   };
   xhr.send();
}
document.querySelector('.b-4').onclick = f4;


// Task 5. 
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-number
// method: POST
// укажите параметры в body POST запроса min = переменной min, max равное переменной max, формат - form-data.
// если запрос отправлен верно, то будет получен массив c случайным числом от min до max
// выведите в .out-5 полученное число.


function f5() {
   const xhr = new XMLHttpRequest();
   xhr.open('POST', URL + '/api/25/random/random-number')
   xhr.setRequestHeader('apikey', APIKEY);

   const dataForm = new FormData();
   dataForm.append('min', min);
   dataForm.append('max', max);

   xhr.onload = () => {
      console.log(xhr.response);
      console.log(xhr.status);
      document.querySelector('.out-5').innerHTML = JSON.parse(xhr.response)['random-number'];
   }
   xhr.send(dataForm);
}
document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/circle
// method: POST
// без аргументов
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status
// выведите сообщение ответа сервера в out-6-response

function f6() {
   const xhr = new XMLHttpRequest();
   xhr.open('POST', URL + '/api/25/random/circle');
   xhr.setRequestHeader("apikey", APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);
      document.querySelector('.out-6-status').innerHTML = xhr.status;
      document.querySelector('.out-6-response').innerHTML = xhr.response;
   }
   xhr.send();
}
document.querySelector('.b-6').onclick = f6;


// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: GET
// укажите параметр запроса race = переменной requestRace
// если запрос отправлен верно, то будет получен массив c описанием расы гаальцев из игры "Космические рейнджеры"
// выведите в .out-7 изображение image расы. Для этого создайте image и присвойте src ссылку на изображение.
// В начале функции делайте очистку .out-7
// не забывайте для авторизации отправлять apikey с указанным ключом.

let requestRace = 'gaal';

function f7() {
   document.querySelector('.out-7').innerHTML = '';

   const xhr = new XMLHttpRequest();
   xhr.open('GET', URL + `/api/25/sr/read?race=${requestRace}`);
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(JSON.parse(xhr.response));
      const data = JSON.parse(xhr.response);
      console.log(data.result.image);

      let image = document.createElement('img');
      image.src = URL + data.result.image;
      document.querySelector('.out-7').append(image);
   }
   xhr.send();
}
document.querySelector('.b-7').onclick = f7;


// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read
// method: POST
// без параметров
// если запрос отправлен верно, то будет получен массив сотрудников компании. 
// выведите в .out-8 число сотрудников компании itemCount.

function f8() {
   const xhr = new XMLHttpRequest();

   xhr.open('POST', URL + '/api/25/employee/read')
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      console.log(data);
      document.querySelector('.out-8').innerHTML = data.itemCount;
   }
   xhr.send();
}
document.querySelector('.b-8').onclick = f8;


// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read/5
// method: POST
// где 5 - число считываемое из input .i-9. Понятно, что число может быть введено в input - любое.
// если запрос отправлен верно, то будет получен массив с описанием сотрудника компании с id = 5
// выведите обозначение (designation) сотрудника в .out-9

let i9 = document.querySelector('.i-9');

function f9() {
   let i = +i9.value;
   const xhr = new XMLHttpRequest();
   xhr.open('POST', URL + `/api/25/employee/read/${i}`);

   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      document.querySelector('.out-9').innerHTML = data.result.designation;
   }
   xhr.send();
}
document.querySelector('.b-9').onclick = f9;


// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read/7
// method: GET
// если запрос отправлен верно, то будет получен массив данных сотрудника с id = 7
// число 7 получайте с input .i-10
// выведите в .out-10 возраст сотрудника, данные которого вы получили.
// не забывайте для авторизации отправлять apikey с указанным ключом.

let i10 = document.querySelector('.i-10');

function f10() {
   let i = +i10.value;
   const xhr = new XMLHttpRequest();
   xhr.open('GET', URL + `/api/25/employee/read/${i}`);
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      document.querySelector('.out-10').innerHTML = data.result.age;
   }
   xhr.send();
}
document.querySelector('.b-10').onclick = f10;


// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-11 (form-data) 
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине.
// выведите в .out-11 полученный пароль.
// не забывайте для авторизации отправлять apikey с указанным ключом.

let i11 = document.querySelector('.i-11');
function f11() {
   let i = +i11.value;

   const xhr = new XMLHttpRequest();
   xhr.open('POST', URL + '/api/25/random/generate-password');

   const data = new FormData();
   data.append('length', i);

   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);
      document.querySelector('.out-11').innerHTML = JSON.parse(xhr.response).password;
   }
   xhr.send(data);
}
document.querySelector('.b-11').onclick = f11;


// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data) 
// укажите в boyd POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.
// не забывайте для авторизации отправлять apikey с указанным ключом.

let i12 = document.querySelector('.i-12');
let checkbox = document.querySelector('.ch-12');

function f12() {
   let i = +i12.value;
   let ch;
   if (checkbox.checked) ch = 1;
   else ch = 0;
   console.log(ch);

   const xhr = new XMLHttpRequest();

   xhr.open('POST', URL + '/api/25/random/generate-password');
   xhr.setRequestHeader('apikey', APIKEY);

   const data = new FormData();
   data.append('length', i);
   data.append('symbols', ch);

   xhr.onload = () => {
      console.log(xhr.response);
      console.log(xhr.status);

      const data = JSON.parse(xhr.response);
      document.querySelector('.out-12').innerHTML = data.password;
   }
   xhr.send(data);
}
document.querySelector('.b-12').onclick = f12;


// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.
// не забывайте для авторизации отправлять apikey с указанным ключом.

let i13 = document.querySelector('.i-13');
let ch131 = document.querySelector('.ch-131');
let ch132 = document.querySelector('.ch-132');

function f13() {
   let i = i13.value;
   let ch1, ch2;

   console.log(ch131.checked);
   console.log(ch132.checked);

   if (ch131.checked) ch1 = 1;
   else ch1 = 0;

   if (ch132.checked) ch2 = 1;
   else ch2 = 0;

   const xhr = new XMLHttpRequest();

   const data = new FormData();
   data.append('length', i);
   data.append('symbols', ch1);
   data.append('uppercase', ch2);

   xhr.open('POST', URL + '/api/25/random/generate-password');
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      console.log(data);
      document.querySelector('.out-13').innerHTML = data.password;
   }
   xhr.send(data);
}
document.querySelector('.b-13').onclick = f13;


// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read/human
// method: GET
// human - аргумент (название расы), который получается из s-14.
// если все сделано верно, то получите массив с описанием расы из игры КР.
// выведите в .out-14 описание description расы (вывод через innerHTML)

let s14 = document.querySelector('.s-14');

function f14() {
   let s = s14.value;
   console.log(s);

   const xhr = new XMLHttpRequest();
   xhr.open('GET', URL + `/api/25/sr/read/${s}`);
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      console.log(xhr.status);
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      console.log(data)
      document.querySelector('.out-14').innerHTML = data.result.description;
   }
   xhr.send();
}
document.querySelector('.b-14').onclick = f14;


// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: POST
// если все сделано верно, то получите массив с описанием всех рас из игры КР.
// выведите в .out-15 изображения всех рас. 
// в начале функции очистите .out-15
// выведите изображения рас в .out-15

function f15() {
   document.querySelector('.out-15').innerHTML = '';
   const xhr = new XMLHttpRequest();

   xhr.open('POST', URL + '/api/25/sr/read');
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      // console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      // console.log(data.result);
      let res = data.result;
      let arr15 = res.map(elem => {
         return URL + elem.image;
      })
      // console.log(arr15);

      for (let i = 0; i < arr15.length; i++) {
         const img = document.createElement('img');
         img.src = arr15[i];
         img.style.margin = 5 + 'px';
         document.querySelector('.out-15').append(img);
      }
   }
   xhr.send();
}
document.querySelector('.b-15').onclick = f15;


// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/world
// method: GET
// 
// если все сделано верно, то получите массив с описанием всех миров игры GoW.
// выведите в .out-16 названия (title) миров через пробел. 

function f16() {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', URL + '/api/25/gow/world');
   xhr.setRequestHeader('apikey', APIKEY);

   xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      console.log(data);

      let out = data.worlds.map(element => {
         return element.title;
      })
      console.log(out);
      document.querySelector('.out-16').innerHTML = out.join(' ');
   }
   xhr.send();
}
document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-17.
// если все сделано верно, то получите описание выбранного в select .s-17 
// выведите в .out-17 описание мира. 
let s17 = document.querySelector('.s-17');

function f17() {
   let s = s17.value;
   const xhr = new XMLHttpRequest();

   xhr.open('GET', URL + `/api/25/gow/world/${s}`);
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      document.querySelector('.out-17').innerHTML = data.world.description;
   }
   xhr.send();
}
document.querySelector('.b-17').onclick = f17;


// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/rune
// method: POST
// если все сделано верно, то получите массив с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира. 
// выполните очистку .out-18 в начале функции


function f18() {
   document.querySelector('.out-18').innerHTML = '';

   const xhr = new XMLHttpRequest();
   xhr.open('POST', URL + '/api/25/gow/rune');
   xhr.setRequestHeader('apikey', APIKEY);
   xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      console.log(data.rune);
      const out = data.rune;

      for (let key in out) {
         const img = document.createElement('img');
         console.log(out[key]);
         img.src = URL + out[key];
         img.alt = key;
         img.style.margin = 5 + 'px';
         document.querySelector('.out-18').append(img);
      }
   }
   xhr.send();
}
document.querySelector('.b-18').onclick = f18;
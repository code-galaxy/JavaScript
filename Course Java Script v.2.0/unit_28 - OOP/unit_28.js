// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. 
//Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

let goods = new Goods('name', 'amount');
console.log(goods);


//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let goods2 = new Goods('Pineapple', 50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR435F3foBIYIbR3_T6F2KEEFcQjUhAIcA42ndfURWQXWsPZmdJNUQrdwN3tIW2tN0ZC0E&usqp=CAU', 300);
let goods2Object = goods2.draw();

document.querySelector('.out-4').append(goods2Object);
console.log(goods2);

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. 
//Перезапишите метод draw так, чтобы он выводил информацию о распродажах.


// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

let goods3 = new Goods2('Orange', 50, 'https://img.wallpapic.com.ua/i7123-139-913/thumb/frukti-ta-ovochi-citrusovi-shpalery.jpg', 200, true);
let goods3Object = goods3.draw();

document.querySelector('.out-6').append(goods3Object);

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.


//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let obj8 = new Valid('ykarpash@gmail.com', 'qwert');
obj8.validate();
//console.log(obj8.validate());
//console.log(obj8.isValid);

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let obj9 = new Valid('ykarpash@gmail.com', 'qwer789');
obj9.validate();
//console.log(obj9.validate());
//console.log(obj9.isValid);


//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.




//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let obj11 = new Valid2('', 'qwer13548');
obj11.validate();
obj11.validate2();
console.log(obj11.validate());
console.log(obj11.validate2());
console.log(obj11.isValid);
console.log(obj11.error_message);

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let obj12 = new Valid2('ykarpash@gmail.com', 'qwe');
obj12.validate();
obj12.validate2();
console.log(obj12.validate());
console.log(obj12.validate2());
console.log(obj12.isValid);
console.log(obj12.error_message);


let obj13 = new Valid2('ykarpash@gmail.com', 'qwertyui');
obj13.validate();
obj13.validate2();
console.log(obj13.validate());
console.log(obj13.validate2());
console.log(obj13.isValid);
console.log(obj13.error_message);
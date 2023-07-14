// Task 1
// При нажатии кнопки запускается функция t1. Функция t1, с помощью рекурсивной функции r1 должна добавляь в out имена всех тегов внутри блока z1. Теги добавляются через пробел. Функция t1 возвращает out. Ожидаемый вывод для данного задания DIV P SPAN DIV B I SPAN STRONG.

function t1(elem) {
    let out = '';
    r1(elem);

    function r1(element) {
        //console.log(element)
        //console.log(element.tagName)
        out += element.tagName + ' ';

        let innerElements = element.children;
        //  console.log(innerElements);

        Array.from(innerElements).forEach(item => {
            r1(item);
        })
    }
    return out;
}
document.querySelector('.b-1').addEventListener('click', () => {
    let z1 = document.querySelector('.z-1');
    document.querySelector('.out-1').textContent = t1(z1);
});
//console.log(document.querySelector('.z-1').children);


// Task 2
// При нажатии кнопки запускается функция t2. Функция t2, с помощью рекурсивной функции r2 должна суммировать числа из всех элементов внутри div.z-2. Результат - сумму s - функция t1 должна возвращать. Вывод на этом примере - 10.

function t2(elem) {
    let s = 0;
    r2(elem);

    function r2(element) {

        if (!isNaN(+element.textContent)) {
            s += +element.textContent;
        }

        let innerElements = element.children;
        // console.log(innerElements);

        Array.from(innerElements).forEach(item => {
            r2(item);
        })
    }
    return s;
}
document.querySelector('.b-2').addEventListener('click', () => {
    let z2 = document.querySelector('.z-2');
    document.querySelector('.out-2').textContent = t2(z2);
});


// Task 3
// При нажатии кнопки запускается функция t3. Функция t3, с помощью рекурсивной функции r3 должна очистить текст внутри z-3 от тегов span, b, i и p. Должен остаться только текст со знаками препинания в переменной out. Функция t3 должна возвращать out.

function t3(elem) {
    let out = '';
    r3(elem);

    function r3(element) {

        if (element.children.length !== 0) {
            out += element.textContent + ' ';
        }
        if (!element.classList.contains('z-3')) {
            element.remove();
        }
        
        let innerElemet = element.children;
        Array.from(innerElemet).forEach(item => {
            r3(item);
        });
    }
    return out;
}
document.querySelector('.b-3').addEventListener('click', () => {
    let z3 = document.querySelector('.z-3');
    document.querySelector('.out-3').textContent = t3(z3);
    console.log(t3(z3));
});


// Task 4
// При нажатии кнопки запускается функция t4. Функция t4, с помощью рекурсивной функции r4 должна тем тегам внутри z-4, которые не имеют вложенных тегов добавить style.background = orange. 

function t4(elem) {
    r4(elem);

    function r4(element) {
        //console.log(element);

        let innerElements = element.children;

        if (innerElements.length === 0) {
            element.style.background = 'orange';
        }
        Array.from(innerElements).forEach(item => {
            r4(item);
        })
    }
}

document.querySelector('.b-4').addEventListener('click', () => {
    let z4 = document.querySelector('.z-4');
    t4(z4);
});



// Task 5
// При нажатии кнопки запускается функция t5. Функция t5, с помощью рекурсивной функции r5 должна те теги внутри z-5, которые не имеют вложенных тегов заменить на теги mark. 

function t5(elem) {
    r5(elem);

    function r5(element) {
        //console.log(element);

        let innerElements = element.children;

        if (innerElements.length === 0) {
            let innerText = element.textContent;
            element.outerHTML = '<mark>' + innerText;
        }

        Array.from(innerElements).forEach(item => {
            r5(item);
        })
    }
}

document.querySelector('.b-5').addEventListener('click', () => {
    let z5 = document.querySelector('.z-5');
    t5(z5);
});




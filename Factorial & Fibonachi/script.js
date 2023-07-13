// Факторіал -- через простий цикл
function fact1(n) {
    let s = 1;
    for (let i = 1; i <= n; i++) {
        s = s * i;
    }
    return s;
}
fact1(5);
console.log(fact1(5));


// =================================================
// Факторіал -- через рекурсію (рекурсивна функція)
let s = 1;
function fact2(n) {
    if (n === 0) return;
    s = s * n;
    fact2(n - 1);
}
fact2(5);
console.log(s);

// =================================================
// Вивести послідовність  Фібоначі

let fibonachi = [0, 1];
fibonachi.length = 10;
for (let i = 2; i < fibonachi.length; i++) {
    fibonachi[i] = fibonachi[i - 1] + fibonachi[i - 2];
}
console.log(fibonachi);

// рішення через функцію
function f(arr, length){
    arr.length = length;
    for (let i = 2; i < arr.length; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    return arr;
}
console.log(f(fibonachi, 10));

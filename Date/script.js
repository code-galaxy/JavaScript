let date = new Date();
console.log(date.toDateString());
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log(date.getTime());
console.log(date.getDay());
console.log(Date.now());
console.log(date);

// =================================================================================================
function getDate(date) {
   let result;

   (date.getDate() < 10) ? result = '0' + date.getDate() + '.' : result = date.getDate() + '.';
   (date.getMonth() < 10) ? result += '0' + (date.getMonth() + 1) + '.' : (date.getMonth() + 1) + '.';
   result += date.getFullYear();
   // let result = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
   document.querySelector('.out-date').innerHTML = result;
}
getDate(date);

// =================================================================================================

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function addLeadingZero(x) {
   return (x < 10) ? '0' + x : x;
}

function getUserTime(t) {
   let Y = t.getFullYear();
   let M = addLeadingZero(t.getMonth() + 1);
   let D = addLeadingZero(t.getDate());
   let d = days[t.getDay()];
   let h = addLeadingZero(t.getHours());
   let m = addLeadingZero(t.getMinutes());

   console.log(Y, M, D, d, h, m);

   return `${Y}.${M}.${D} ${h}:${m}  - ${d}`;
}
getUserTime(new Date(1689162118510));
console.log(getUserTime(new Date(1689162118510)));
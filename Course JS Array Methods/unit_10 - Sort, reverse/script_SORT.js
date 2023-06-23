let arr = [25, 8, 40, 7, 5];
let sortRes = [];
let copy = arr.slice();		//create duplicate array
let inc = 0;	//inc meant increment
copy.sort((a, b) => {
   sortRes[inc] = [a, b, a - b];
   inc += 1;
   return a - b;
});
console.log(arr);
console.log(copy);
let p = 0;
for (let i = 0; i < inc; i++) {
   copy = arr.slice();
   copy.sort((a, b) => {
      p += 1;
      if (p <= i) {
         return a - b;
      }
      else {
         return false;
      }
   });
   p = 0;
   console.log(copy + ' \t a: ' + sortRes[i][0] + ' \tb: ' + sortRes[i][1] + '\tTotal: ' + sortRes[i][2]);
}
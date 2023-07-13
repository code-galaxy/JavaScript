const user1 = {
   age: 18,
   password: 'qwerty987',
   agreeToTerm: true
}
const user2 = {
   age: 18,
   password: 'qwert5896',
   agreeToTerm: false
}

function checkAge(user) {
   return user.age >= 18;
}
// console.log(checkAge(user));

function checkPassw(user) {
   return user.password.length >= 8;
}
// console.log(checkPassw(user));

function checkTerms(user) {
   return user.agreeToTerm === true;
}
// console.log(checkTerms(user));

function validate(obj, ...funcValidates) {
   for (let i = 0; i < funcValidates.length; i++) {
      if (funcValidates[i](obj) === false) return false;
   }
   return true;
}

console.log('user1 = ' + validate(user1, checkAge, checkPassw, checkTerms));

function createValidator(...func) {
   return function (obj) {
      for (let i = 0; i < func.length; i++) {
         if (func[i](obj) === false) return false
      }
      return true;
   }
}

const validator1 = createValidator(checkAge, checkPassw, checkTerms);
const validator2 = createValidator(checkAge, checkPassw);
console.log('user1 = '+validator1(user1));
console.log('user2 = '+validator2(user2));
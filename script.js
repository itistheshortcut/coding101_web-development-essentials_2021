// Arethmetic Operators

let num1 = 50;
let num2 = 30;

let addition = num1 + num2;
console.log(addition);

let sub = num1 - num2;
console.log(sub);

let division = num1 / num2;
console.log(division);

let mud = num1 % num2;
console.log(mud);

let mult = num1 * num2;
console.log(mult);

let num3 = 4;
let power = num3 ** 3;
console.log(power);

num3++;
num3++;
console.log(num3);

num3--;
num3--;
num3--;
console.log(num3);

let num4 = 10;
let num5 = 10;
let num6 = 35;
let num7 = 35;
console.log(typeof num5);
console.log(num4 === num5);
console.log(num4 >= num5);

const andOp = (num4 == num5) != (num6 == num7);
console.log(andOp);

let x = 105;
let y = '105';

console.log(x === y);

// CONDITIONAL STATEMENTS

//if statement

let myAge = 9;

if (myAge > 18) {
  console.log('Your are allowed to drive!');
} else {
  console.log('You are young!');
}

//ternary statement
//    condition ? 'true' : 'false';
myAge > 18 ? console.log('allowed to drive!') : console.log('too young!');







let password = 'qaz234sfffbgergsf';

if (password.length <= 6) {
  console.log('the password is too short!');
} else if (password.length < 8) {
  console.log('The password is long enough!');
} else {
  console.log('The password is strong!');
}

let grade = 'C';

if (grade == 'A') {
  console.log('you pass the exam!');
} else if (grade == 'B') {
  console.log('you need more practice!');
} else if (grade == 'C') {
  console.log('you need to do exam again!');
} else if (grade == 'F') {
  console.log('Oh! you are failed!');
} else {
  console.log('invalid grade!!!');
}

// switch statements

switch (grade) {
  case 'A':
    console.log('you pass the exam!');
    break;
  case 'B':
    console.log('you need more practice!');
    break;
  case 'C':
    console.log('Do again!');
    break;
  case 'F':
    console.log('Failed!');
    break;
  default:
    console.log('not valid grade!');
}

let dinner = 'pizza';

switch (dinner) {
  case 'pizza':
    console.log('I really like it!');
    break;
  case 'burger':
    console.log('not good for health');
    break;
  default:
    console.log('don not eat it');
}

let operator = '+';
let numberOne = 8,
  numberTwo = 32;

switch (operator) {
  case '-':
    console.log(numberOne - numberTwo);
    break;
  case '+':
    console.log(numberOne + numberTwo);
    break;
  case '*':
    console.log(numberOne * numberTwo);
    break;
  case '/':
    console.log(numberOne / numberTwo);
    break;
  case '%':
    console.log(numberOne % numberTwo);
    break;
  default:
    console.log('not work!');
}

// ternary

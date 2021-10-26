// JavaScript Function

const recArea = (width, height) => {
  return width + height;
};

console.log(recArea(120, 100));
console.log(recArea(33, 22));
console.log(recArea(13, 200));

const sendMsg = (message, reciever) => {
  return `${message} ${reciever}`;
};

console.log(sendMsg('Hello', 'mostafa'));
console.log(sendMsg('please help me', 'mona'));

const getAvg = (num1, num2, num3) => {
  let avg = (num1 + num2 + num3) / 3;
  return avg;
};
console.log(getAvg(12, 10, 30));
console.log(getAvg(2, 4, 6));
console.log(getAvg(44, 3, 1));

// a javascript function return type of variable.

const typeOfValue = (value) => `Type of ${value} is ${typeof value}`;

console.log(typeOfValue(12));
console.log(typeOfValue('mostafa'));

// a javascript function return increment a number

const incNumber = (num) => --num;

console.log(incNumber(12));
console.log(incNumber(10));

// a javascript function to calculate the avarage of 3 numbers.

const calcAvg = (num1, num2, num3) => {
  let avg = (num1 + num2 + num3) / 3;
  return avg.toFixed(2);
};

console.log(calcAvg(10, 10, 10));
console.log(calcAvg(23, 24, 45));

// a javascript function to return 20% discount.

const calcDiscount = (total) => {
  let discount = total * (20 / 100);
  return total - discount;
};

console.log(calcDiscount(100));
console.log(calcDiscount(25000));

// a javascript function to remove last item of a list.

const removelastItem = (list) => {
  list.pop();
  return list;
};

let names = ['mostafa', 'john', 'katja', 'jessi'];
let numbers = [12, 13, 44, 556, 43];

console.log(removelastItem(names));
console.log(removelastItem(numbers));

// a javascript function to add items in the middle of a list.

const addToMiddle = (list, v1, v2, v3) => {
  list.splice(2, 0, v1, v2, v3);
  return list;
};

console.log(addToMiddle(names, 'kristina', 'julia', 'mona'));
console.log(addToMiddle(numbers, 22, 33, 44));
/* console.log(addToMiddle(names, false, null, 22)); */

// a javascript function to find a specific name.

const findName = (list, value) => {
  let search = list.filter((item) => item.name === value);

  return search;
};

let users = [
  { name: 'Alina', email: 'alina@me.com', location: 'Helsinki' },
  { name: 'Divyansh', email: 'divyansh@me.com', location: 'Espoo' },
  { name: 'joanna', email: 'joanna@me.com', location: 'Helsinki' },
  { name: 'Andrea', email: 'andrea@me.com', location: 'vantaa' },
];

console.log(findName(users, 'joanna'));

// filter a list of numbers to return values greater than 18.

const getGreaterThan18 = (list) => {
  let search = list.filter((item) => item >= 18);
  return search;
};

let nums = [23, 44, 56, 11, 23, 5, 18, 16, 13];
let ages = [23, 11, 22, 50, 20];

console.log(getGreaterThan18(nums));
console.log(getGreaterThan18(ages));

// a javascript function return values as an object

const userData = (name, age, email, location) => {
  /* let userObj = { userName: name, userAge: age, userEmail: email, userLocation: location }; */
  let userObj = { name, age, email, location };
  return userObj;
};

console.log(userData('mostafa', 34, 'mostafa@theshortcut.org', 'Helsinki'));
console.log(userData('Julia', 21, 'julia@gmail.com', 'Vantaa'));

// add skills to an object

let user1 = { name: 'Alina', email: 'alina@me.com', location: 'Helsinki' };
console.log(user1);

const addSkills = (skills) => {
  let skillsObj = { skills };
  return Object.assign(user1, skillsObj);
};

let skills = ['html', 'css', 'js', 'python', 'wordpress'];

console.log(addSkills(skills));



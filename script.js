// Variables
let name = 'mostafa';
name = 'John';
let price = 120;
price = 150;
let totalPrice = 200;
totalPrice = 220;

let message = 'hello world!';
message = 'hello mostafa ssssss!';
console.log(message);



// Data Types
let firstName = 'Mostafa';
let lastName = 'Hazareh';
console.log(firstName);
console.log(typeof lastName);

let milkPrice = 2;
let applePrice = 10;
let total = milkPrice + applePrice;
console.log(typeof milkPrice);
console.log(typeof applePrice);
console.log(total);

let isLoading = false;
isLoading = true;
console.log(typeof isLoading);

let address = null;
address = 'helsinki';
console.log(typeof address);

let city;
city = 12
console.log(typeof city);


// Array
const names = ["Mostafa", "John", "Ahmed", "Bill", 123,33, null, true];
names.sort()
console.log(names)

const ages = [32, 21, 11, 10, 201];
console.log(ages);

// Object
const myAddress = {
    country: 'Finland',
    city: 'Helsinki',
    postalCode: 001
};
console.log(myAddress);

const student = {
    id: 01001,
    name: 'Mostafa',
    email: 'mostafa@theshortcut.org',
    phone: 21435438
}
console.log(student);

// functions
let num1 = 120;
let num2 = 15;
let num3 = 112;
const addNumbers = function () {
    console.log(num1 + num2 + num3);
}
addNumbers();

const getAvg = () => {
    let avg = (num1 + num2 + num3) / 3;
    console.log(avg)
};
getAvg();


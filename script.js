// JavaScript Array

const ages = [23, 33, 45, 12, 10];
console.log(ages[2]);

const names = ['mostafa', 'john', 'mona', 'katja'];
 
console.log(typeof names[2]);

const numbers = new Array(12, 22, 33, 44, 55);
console.log(numbers);

// push method
ages.push(55,100,90,20);
console.log(ages);

names.push('ahmed', 'Jack');
console.log(names);

// pop method
ages.pop();
ages.pop();
ages.pop();
console.log(ages);

names.pop();
names.pop();
console.log(names);


// shift method
ages.shift();
console.log(ages);

names.shift();
names.shift();
console.log(names);


// unshift method
ages.unshift(200, 24,31);
console.log(ages);


names.unshift('jessi', 'kristina','mostafa','kdds');
console.log(names)



// concat method
console.log(numbers.concat(ages));

// slice method

console.log(names);

console.log(names.slice(2, 5));

console.log(ages);
console.log(ages.slice(5, 7));


// splice method
names.splice(2, 0, 'john');
names.splice(4, 0, 'julia')
console.log(names);

names.splice(3, 4);
console.log(names);

names.splice(1, 0, 'sswmc','marko','mona','mostafa','kree');
console.log(names);


// find method

let findName = names.find(name => name.includes('j'));
console.log(findName);

let findNumber = ages.find(age => age < 31);
console.log(findNumber)


// filter method
let filterNames = names.filter(name => name.includes('na'));
console.log(filterNames);

let filterNums = ages.filter(num => num <= 33);
console.log(filterNums);

// sort
let nums = [5, 6, 3, 7, 1, 8, 2];

let sortNums = nums.sort()
console.log(sortNums);

let nums2 = [25, 16, 3, 37, 211, 18, 32];
let sortNums2 = nums2.sort((first, second) => second - first);
console.log(sortNums2);

// sort alphabats

console.log(names);
let sortNames = names.sort()
console.log(names);


let lastItem = names.slice(-1);
console.log(lastItem);





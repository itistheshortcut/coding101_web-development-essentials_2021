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


names.unshift('jessi', 'Kristina','mostafa');
console.log(names)



// concat method
console.log(numbers.concat(ages));

// slice method

console.log(names);

console.log(names.slice(2, 5));

console.log(ages);
console.log(ages.slice(5, 7));







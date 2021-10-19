// Declare an Object

const user = {
  firstName: 'Mostafa',
  lastName: 'Hazareh',
  age: 36,
  location: 'Helsinki',
  logIn: function () {
    console.log(this.firstName +' is logged in.')
  },
  logOut: function () {
    console.log(this.firstName + ' is log out.');
  }
};

console.log(user.location);
console.log(user.age);
user.logOut();


const address = new Object();
address.city = 'Helsinki';
address.country = 'Finland';
address.postalCode = '00890';
console.log(address);


const userKeys = Object.keys(user);
const userValues = Object.values(user);
const userProp = Object.entries(user);
console.log(userKeys);
console.log(userValues);
console.log(userProp);



const addressKeys = Object.keys(address);
const addressValues = Object.values(address);
const addressProp = Object.entries(address);
console.log(addressKeys);
console.log(addressValues);
console.log(addressProp);

















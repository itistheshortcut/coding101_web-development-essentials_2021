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


// Object create method

const user2 = {
    username: 'mostafa',
    password: '1qaz1qaz',
    changePassword: function () {
        console.log(this.password)
    }
};
const user2Details = {
    email: 'mostaf@me.com',
    location:'helsinki'
}

const userwithDetails = Object.assign(user2, user2Details);
console.log(userwithDetails);



console.log(user2);

console.log(user2.password);

const newPW = Object.create(user2);
user2.password = '12wert';
user2.changePassword();

console.log(user2.password);


const car = {
    name: 'volvo',
    model: 'v90',
    price: 25000,
    discount: function () {
        console.log(this.price -= this.price * (10 / 100));
    }
};
car.discount();
console.log(car.price);

const myCar = Object.create(car);
myCar.price = 10000  ;
myCar.discount();
console.log(car.price);
console.log(myCar);

//Obejct assign
const carDetails = {
    year: 2010,
    color: 'blue'
};

console.log(car)
console.log(carDetails);

const car2 = Object.assign(car, carDetails);
console.log(car2);

























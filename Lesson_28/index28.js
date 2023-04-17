//1
// let car = {
//     type: 'electric',
//     wheels: 4
// }
// let sportCar = {
//     doors: 2
// }
// Object.setPrototypeOf(sportCar, car);
// console.log(sportCar);
// let passengerCar = {
//     doors: 4,
// }
// Object.setPrototypeOf(passengerCar, car);
// console.log(passengerCar);

// let toyCar = Object.create(sportCar);
// toyCar.type = 'toy';
// Object.setPrototypeOf(toyCar, car);
// console.log(toyCar);

//2
// let employees= {
//     pay(munth, sum) {
//         this.wallet[munth] = sum;
//     }
// }
// let frontendDeveloper = {
//     name: 'Mike',
//     wallet: {},
// }
// Object.setPrototypeOf(frontendDeveloper, employees);
// let backendDeveloper = {
//     name: 'Bob',
//     wallet: {},
// }
// Object.setPrototypeOf(backendDeveloper, employees);
// backendDeveloper.pay('june', 1500);

// console.log(backendDeveloper.wallet.june);
// console.log(frontendDeveloper.wallet.june);

//3
// function User(name, age) {
//     this.name = name;
//     this.age = age
// }
// let user_1 = new User ('Mike', 18);
// console.log(user_1);

// let user_2 = Object(user_1);
// user_2.name = 'Bob';
// user_2.age = 25;
// console.log(user_2);

//4
// function UserType(name) {
//     for( let i = 0; i < name.length; ++i) {
//         this[i] = name[i];
//         if(i + 1 == name.length) {
//             Object.defineProperty(this, 'length', {
//                 enumerable: true,
//                 writable: false,
//                 configurable: true,
//                 value: i + 1
//             })
//         }
//     }
// }

// let admins = new UserType(['Mike', 'Bob', 'Nikola']);
// Object.setPrototypeOf(admins, Array.prototype);
// console.log(admins.join('; '));
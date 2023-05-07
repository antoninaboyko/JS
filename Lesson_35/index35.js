//1
// let mixin = {
//     applyTaxVat() {
//         this.price = this.price + this.price * 0.2;
//         return this.price;
//     },
//     applyTaxExciseDuty () {
//         this.price = (this.price + this.price * 0.3) + 10;
//         return this.price;
//     },
//     applyTaxSingle () {
//         this.price = this.price + 1;
//         return this.price;
//     }
// }

// class Cola {
//     constructor(brand, price) {
//         this.brand = brand;
//         this.price = price;
//     }
// }
// Object.assign(Cola.prototype, mixin);
// Cola.prototype.vat = Cola.prototype.applyTaxVat;

// class Whiskey {
//     constructor(brand, price) {
//         this.brand = brand;
//         this.price = price;
//     }
// }
// Object.assign(Whiskey.prototype, mixin);
// Whiskey.prototype.exciseDuty = Whiskey.prototype.applyTaxExciseDuty;

// class Ice {
//     constructor(price) {
//         this.price = price;
//     }
// }
// Object.assign(Ice.prototype, mixin);
// Ice.prototype.singleTax = Ice.prototype.applyTaxSingle;

// let cocaCola = new Cola('Coca-Cola', 10);
// let johnwalker = new Whiskey('john walker', 100);
// let ice = new Ice(2);

// console.log(cocaCola.vat());
// console.log(johnwalker.exciseDuty());
// console.log(ice.singleTax());

//2
// let uniceString = (arr) => {
//     let value = arr.split("; ");
//     let allValue = new Set(value);
//     return allValue;
// }
// console.log(uniceString("cherry; orange; cherry; banana; banana"));

//3
// let allPhones = (className) => {
//     let shopList = document.querySelector("." + className);
//     let phoneNames = Array.from(shopList.querySelectorAll("li")).map(li => li.textContent);
//     let uniquePhone = new Set(phoneNames);
//     return uniquePhone;
// }
// console.log(allPhones("shop-list"));

//4
// let mike = {name: 'Mike', age: 18};
// let bob = {name: 'Bob', age: 25};
// let nikola = {name: 'Nikola', age: 32};

// let userVisits = new Map();
// let countVisits = (user) => {
//     if (userVisits.has(user)) {
//         userVisits.set(user, userVisits.get(user) + 1);
//     } else {
//         userVisits.set(user, 1);
//     }
// }
// let mikeVisits = () => {
//     countVisits(mike);
// }
// let bobVisits = () => {
//     countVisits(bob);
// }
// let nikolaVisits = () => {
//     countVisits(nikola);
// }
// mikeVisits(mike);
// mikeVisits(mike);
// mikeVisits(mike);
// bobVisits(bob);
// nikolaVisits(nikola);
// nikolaVisits(nikola);
// console.log(userVisits.get(mike));
// console.log(userVisits.get(bob));
// console.log(userVisits.get(nikola));
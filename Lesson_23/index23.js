//1
// let car = {
//     model: 'honda',
//     year: 2017,
//     color: 'black',
//     signal: function(){
//         alert('fa! fa!');
//     },
// }
// console.log(car);
// car.color = 'white';
// console.log (car.color);
// car.type = 'electric';
// console.log(car.type);
// car.signal();

//2
// let salaries = {
//     fronted: 12000,
//     backend: 10000,
//     designer: 8000,
//     dayPay() {
//         alert('We must pay salary on Tuesday!');
//     },
//     total () {
//         let sum = 0;
//         for (let key in salaries) {
//             if (!isNaN(salaries[key])){ 
//             sum += salaries[key]; 
//             }
//         }
//         console.log(sum);   
//     },
// }
// salaries.total();


//3
// function Laptop (brand, system, cost){
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
// }
// let dell = new Laptop ('Dell', 'windows', 800);
// let apple = new Laptop ('Apple', 'MAC OS', 1700);
// console.log (dell);
// console.log (apple);

//4
// function Laptop (brand, system, cost){
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
//     this[Symbol.toPrimitive] = function (hint) {
//     // console.log(hint);
//     switch (hint) {
//         case 'string':
//             return this.brand;
//         case 'number':
//             return this.cost;
//         case 'default':
//             return this.brand + ' ' + this.system + ' ' + this.cost + ' ';
//         }
//     }
// }
// let dell = new Laptop ('Dell', 'windows', 800);
// let apple = new Laptop ('Apple', 'MAC OS', 1700);
// console.log (dell);
// console.log (apple);
// console.log(String(dell));
// console.log(+apple);
// console.log(dell + apple);

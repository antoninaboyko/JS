//1
// let user = {}
// Object.defineProperty(user, 'name',{
//     value: 'name',
//     writable: false
// })
// Object.defineProperty(user, 'age', {
//     value: 'age',
//     writable: false
// })
// Object.defineProperty(user, 'id', {
//     value: 'age',
//     writable: false,
//     configurable: false
// })

//2
// let dataBase = {
//     dbName: 'user',
//     dbType: 'MySQL'
// }
// let configurateDB = {
//     token: '123',
//     password: '567',
//     user: 'admin'
// }
// Object.freeze(dataBase);
// Object.seal(configurateDB);

//3
// let salaries = {
//     frontend: 2000,
//     backend: 1500,
//     design: 1000,
//     set addSalaries(arr) {
//         for (let i =0; i < arr.length; i++){
//             this[arr[i].split(':') [0]] = +arr[i].split(':')[1];
//         }
//     },
// }
// Object.defineProperty(salaries, 'sum', {
//     get() {
//         let sum = 0;
//         for(salary in this) {
//             sum += thid[salary];
//         }
//         console.log(sum);
//     },
//     enumerable: false
// })
// salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];
// console.log(salaries);

//4
// let user = {
//     name: 'Mike',
//     surname: 'Davis',
//     age: 25,
//     get userInfo() {
//         let keys = [];
//         for (let key in this) {
//             keys.push (key + ':' + this[key]);
//         }
//         console.log(keys.join(', '));
//     }
// }
// Object.defineProperty(user, 'userInfo', {enumerable: false});
// user.userInfo;
// user.login = 'MK_18';
// user.userInfo;
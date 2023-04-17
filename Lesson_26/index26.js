//1
// class User {
//     #name;
//     constructor(name, login, age) {
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);

//2
// class User {
//     #name;
//     constructor(name, login, age) {
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
//     getName(isAdmin) {
//         if (isAdmin) {
//         return this.#name ? this.#name : this.login;
//         } else {
//             return 'Permission denied';
//         }
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// console.log(user1.getName(true));
// console.log(user2.getName(true));
// console.log(user2.getName(false));

//3
// class User {
//     #name;
//     #password;
//     constructor(name, login, age, password) {
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//         this.#password = password;
//     }
//     changeName(newName, password){
//         if(password === this.#password) {
//             let oldName = this.#name || this.login;
//             this.#name = newName;
//             return (`Name Changed from ${oldName} to ${newName}`);
//         } else {
//             return 'Permission denied';
//         }
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18, '123');
// let user2 = new User('', 'NRG', 22, '123');
// console.log(user1.changeName('Bill', '123'));
// console.log(user1.changeName('Bill', '124'));

//4
// class User {
//     constructor(name, login, age) {
//         this.name = name;
//         this.login = login;
//         this.age = age;
//     }
// }
// class Admin extends User {
//     #isAdmin = true;
//     getUserName(user) {
//         console.log(user.name);
//     }
// }
// let user1 = new User('Mike','mike1', 19);
// let admin = new Admin('Admin', 'admin1', 20);
// admin.getUserName(user1);

//5
// class User {
//     #phone;
//     constructor(name, phone) {
//         this.name = name;
//         this.#phone = phone;
//     }
//     getPhone(isAdmin) {
//         if(isAdmin){
//             return console.log(this.#phone)
//         } else {
//             let hide = this.#phone.split('');
//             for (let i = 4; i < 10; ++i){
//                 if (i == 7) continue
//                 hide[i] = '*'
//             }
//             console.log(hide.join(''));
//         }
//     }
// }
// let user1 = new User('Mike', '067-888-88-99');
// let user2 = new User('Tom', '099-888-88-99');
// user1.getPhone(false);
// user2.getPhone(false);
// user1.getPhone(true);
// user2.getPhone(true);
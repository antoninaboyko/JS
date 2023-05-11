//1
// fetch('http://127.0.0.1:5500/Lesson_36/home-work-data.json')
// .then(response => response.json())
// .then(data => {
//     let showAdminName = (data) => {
//     for(let user in data) {
//         if(data[user].isAdmin === true) {
//             console.log(data[user].name);
//             return;
//         }
//     }
//     }
//     showAdminName(data);
// });

//2
// let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
// let bob = {firstName: 'Bob'};
// let mike = {lastName: 'Smith'};
// let michael = {};

// let getFullName = function (user) {
//     return `${user.firstName} ${user.lastName}`;
// }
// getFullName = new Proxy(getFullName, {
//     apply(target, thisArg, args) {
//         if ('firstName' in args[0] && 'lastName' in args[0]) {
//             return target(...args).toUpperCase();
//         } else if ('firstName' in args[0]) {
//             return `${args[0].firstName}`;
//         } else if ('lastName' in args[0]) {
//             return `${args[0].lastName}`;
//         } else {
//             return 'No name';
//         }
//     }
// })
// console.log(getFullName(nikola));
// console.log(getFullName(bob));
// console.log(getFullName(mike));
// console.log(getFullName(michael));

//3
// let users = [
//     {name: 'Nikola', age: 18, id: 1},
//     {name: 'Bob', age: 25, id: 2},
//     {name: 'Mike', age: 32, id: 3}
// ];
// localStorage.setItem('users', JSON.stringify(users));
// let seyHelloToUser = (id) => {
//     let usersKey = JSON.parse(localStorage.getItem('users'));
//     let user = usersKey.find(user => user.id === id);
//     if (user) {
//         console.log(`Hello: ${user.name}`);
//     }
// }
// seyHelloToUser(3);

//4
// let input = document.querySelector('input[type="text"]');
// let savedValue = localStorage.getItem('inputValue');
// if (savedValue) {
//   input.value = savedValue;
// }
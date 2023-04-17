//1
// let users = ['Mike', 'Nikola', 'Tom'];
// console.log (users[2]);
// users[1] = 'Alex';
// users.length = 1;
// console.log(users);
// console.log(users.length);

//2
// let a = [5, 3 - 4, 25, 32, -16, 6];
// let b = [21, -30, 9, 5, 12, -19, 5, 25];
// let compare = (arr1, arr2) => {
//     let maxLenght = 0;
//     let sumArr1 = 0;
//     let sumArr2 = 0;
//     arr1.length >= arr2.length
//     ? (maxLenght = arr1.length)
//     : (maxLenght = arr2.length);
//     for (let i = 0; i < maxLenght; i++){
//         if (arr1[i]) {
//             sumArr1 += arr1[i];
//         }
//         if (arr2[i]) {
//             sumArr2 += arr2[i];
//         }
//     }
//     if (sumArr1 > sumArr2) {
//         return 'a > b';
//     } else if (sumArr1 < sumArr2) {
//         return 'a < b';
//     }
//     return 'a = b';
// }
// console.log(compare(a, b));

//3
// let phrase = 'I am learning JavaScript right now';
// console.log(phrase.split(' '));

//4
// let a = [5, 3, 8, 5, 3, 2, 1, 2];
// let b = [];
//  a.forEach((item) => {
//     if (!b.includes(item)){
//     b.push(item);
//     };
// });
// console.log (b);

//5
// let users = [{ id: 1, age:17},
//              { id: 2, age:18},
//              { id: 3, age:19},
//              { id: 4, age:21},
//              { id: 5, age:17},
//              { id: 6, age:20},
//              { id: 7, age:25},];

// let selectionAge = () => {
//     for (let i = 0; i < users.length; ++i){
//         let user = users[i];
//     if (user.age > 18 && user.age < 21){
//         console.log(user.id);
//     }
// }
// };
// selectionAge (users);
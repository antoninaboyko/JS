//1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = (arr, index) => {
//     if (index === arr.length) {
//         return 0;
//     } else {
//         return arr[index] + sum(arr, index + 1);
//     }
// };
// console.log(sum(arr, 0));
// let sumTernary = (arr) => {
//     return arr.length === 0 ? 0 : arr[0] + sumTernary(arr.slice(1)); // якщо масив порожній, повертаємо 0, інакше додаємо перший елемент та рекурсивно викликаємо функцію зі скороченим масивом
//   };
  
//   console.log(sumTernary(arr));

//2
// Тут все дуже погано. Схоже рекурсія це не те, що я зрозуміла 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let deepCount = (arr) => {
//     let count = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             count +=  deepCount(arr[i]);
//         } else {
//             count++;
//         }
//     } 
//     return count;
// ;} 
// let deepCount = (arr) => Array.isArray(arr) ? arr.reduce((acc, el) => acc + deepCount(el), 0) : 1;

// console.log(deepCount([])); //0
// console.log(deepCount([1, 2, 3])); //3
// console.log(deepCount(["x", "y", ["z"]])); //4
// console.log(deepCount([1, 2, [3, 4, [5]]])); //7
// console.log(deepCount([[[]]])); //3

//3
// const employees = {
//     development: {
//         backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
//         frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
//     },
//     sales: {
//         marketing: {
//             internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
//             promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
//         },
//         sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
//     },
//     designer: [{name: 'Kate', salary: 1800}]
// }


// function sumSallary(obj){
//     let sum = 0;
//     for(let key in obj){
//         if (Array.isArray(obj[key])){
//             obj[key].forEach(employee => sum += employee.salary);
//         } else {
//             sum += sumSallary(obj[key]);
//         }
//     }
//     return sum; 
// }
// console.log(sumSallary(employees));

//4
// let arr1 = [2, 15, 7, 3];
// let arr2 = [9, 3, 17, 12, 4, 8];
// let arr3 = [6, 11, 16, 15, 11];
// console.log(Math.max(...arr1, ...arr2, ...arr3));

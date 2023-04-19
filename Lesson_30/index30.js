//1
// function count(expression) {
//     function getValues (expression) {
//         let values = [...expression];
//         return values;
//     }
//     let values = getValues(expression);
//     switch (values[1]) {
//         case '+':
//             return showResult(sum(values));
//         case '-':
//             return showResult(subtract(values));
//         case '*':
//             return showResult(multiply(values));
//         case '/':
//             return showResult(divide(values));
//     }
//     function showResult(value) {
//         return value;
//     }
// }
// function sum(values) {
//     return Number(values[0]) + Number(values[2]);
// }
// function subtract(values) {
//     return values[0] - values[2];
// }
// function multiply(values) {
//     return values[0] * values[2];
// }
// function divide(values) {
//     return values[0] / values[2];
// }

//2
// function count(expression) {
//     function getValues (expression) {
//         let values = [...expression];
//         return values;
//     }
//     let values = getValues(expression);
//     switch (values[1]) {
//         case '+':
//             return showResult(sum(values));
//         case '-':
//             return showResult(subtract(values));
//         case '*':
//             return showResult(multiply(values));
//         case '/':
//             return showResult(divide(values));
//     }
//     function showResult(value) {
//         try {
//             if (divide(values) === Infinity) {
//                 throw new Error("Can't divide by 0");
//             } else {
//                 return value;
//             }
//         } catch (error) {
//             console.log(error.name + ': ' + error.message);
//             return 0;
//         }
//     }
// }
// function sum(values) {
//     return Number(values[0]) + Number(values[2]);
// }
// function subtract(values) {
//     return values[0] - values[2];
// }
// function multiply(values) {
//     return values[0] * values[2];
// }
// function divide(values) {
//     return values[0] / values[2];
// }

//3
// function count(expression) {
//     if (expression !== String){
//         console.log('Please write in string format');
//     } else {
//     function getValues (expression) {
//         let values = [...expression];
//         return values;
//     }
//     let values;
//     try {
//         values = Values(expression); //line1
//        } catch(error){
//         console.log (error.name + ': ' + error.message);
//         values = [0, '+', 0];
//        }
//     switch (values[1]) {
//         case '+':
//             return showResult(sum(values));
//         case '-':
//             return showResult(subtract(values));
//         case '*':
//             return showResult(multiply(values));
//         case '/':
//             return showResult(divide(values));
//     }
//     function showResult(value) {
//         return value;
//     }
// }}
// function sum(values) {
//     return +(values[0]) + +(values[2]);
// }
// function subtract(values) {
//     return +values[0] - +values[2];
// }
// function multiply(values) {
//     return +values[0] * +values[2];
// }
// function divide(values) {
//     return +values[0] / +values[2];
// }

// console.log(count(5*2)); //line2

//4
// function MakeUsers(name, age){
//     this.name = name;
//     this.age = age;
// }
// let user = new MakeUsers('Mike');
// user.age = prompt('Please, write your age');
// function showMovie (user){
//     try {
//         if(user.age < 18) {
//             throw new Error ('Sorry, you are too young');
//         } else if (user.age >= 18) {
//             alert ('You can watch this film');
//             return;
//         } 
//     } catch(error) {
//         alert(error.message);
//         user.age = prompt ('Please, write age'); 
//         showMovie(user);
//     }
// }

// showMovie(user);

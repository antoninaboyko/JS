//1
// let maxNumber = (a , b) => {
//     if (a > b) {
//         return (a);
//     } else if (a < b) {
//         return (b);
//     }
//     return ('a = b');
// }
// a = prompt ('Enter a');
// b = prompt ('Enter b');
// alert(maxNumber(a,b));

//2
// function revers(number) {
//     let reversed = -number;
//     alert (reversed);
// }
// let number = prompt ('Enter the number');
// revers(number);

//3
// let three = (number, count) => {
//     return (number + count*3);
// }
// number = prompt ('Enter number');
// count = prompt ('Enter count');
// alert (three(+number, + count));


//4
// let KmToM = (km) => {
//     return (km*1000);
// }
// let KmToCm = (km) => {
//     return (km*100000);
// }
// function getMetric (km, metric, m, cm) {
//     if (metric == 'm'){
//         return m(km);
//     } else if (metric == 'cm') {
//         return cm(km);
//     }
//     return ('incorrect value');
// }
// let kilometers = prompt ('Enter distance');
// let metric = prompt ('Enter metrics');
// alert (getMetric(kilometers, metric, KmToM, KmToCm));
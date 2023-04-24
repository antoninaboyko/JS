//1
// function getData (url) {
//     fetch (url)
//     .then (response => response.json())
//     .then (data => {
//         let filterData = data.filter(item => item.title.startsWith ('a'));
//         console.log(filterData);
//     })
//     .catch(error => console.error(error));
// }
// getData('https://jsonplaceholder.typicode.com/todos/');

//2
// async function getData(url) {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         let filterData = data.filter(item => item.title.startsWith ('a'));
//         console.log(filterData);
//     } catch(error) {
//         console.error(error);
//     }
// }
// getData('https://jsonplaceholder.typicode.com/todos/');

//3
// function getData (url) {
//     fetch (url)
//     .then (response => response.json())
//     .then (data => {
//         let filterData = data.filter(obj => obj.title.startsWith ('a'));
//         let filter = filterData.map(obj => JSON.stringify(obj)).join('<br>');
//         let filterDataEl = document.querySelector('.user-a');
//         filterDataEl.innerHTML = filter;

//         let filterDataAB = data.filter(obj => obj.title.startsWith ('ab'));
//         let filterAB = filterDataAB.map(obj => JSON.stringify(obj)).join('<br>');
//         let filterDataElAB = document.querySelector('.user-ab');
//         filterDataElAB.innerHTML = filterAB;
//     })
//     .catch(error => console.error(error));
// }
// getData('https://jsonplaceholder.typicode.com/todos/');

//4
let filterDataEl = document.querySelector('.user-a');
let filterDataElAB = document.querySelector('.user-ab');
function getDataA (url) {
    fetch (url)
    .then (response => response.json())
    .then (data => {
        let filterData = data.filter(obj => obj.title.startsWith ('a'));
        let filter = filterData.map(obj => JSON.stringify(obj)).join('<br>');
        filterDataEl.innerHTML = filter;
    })
    .catch(error => console.error(error));
}
let getDataB = (url) => {
    fetch (url)
    .then (response => response.json())
    .then(data => {
        let filterDataAB = data.filter(obj => obj.title.startsWith ('ab'));
        let filterAB = filterDataAB.map(obj => JSON.stringify(obj)).join('<br>');
        filterDataElAB.innerHTML = filterAB;
    })
    .catch(error => console.error(error));
}
let reset = () => {

    filterDataEl.innerHTML = '';
    filterDataElAB.innerHTML = '';
}

let addA = () => {
    reset();
    getDataA('https://jsonplaceholder.typicode.com/todos/');
}
let buttonA = document.querySelector('.add-a');
buttonA.addEventListener('click', addA);

let addB = () => {
    reset();
    getDataB('https://jsonplaceholder.typicode.com/todos/');
}
let buttonB = document.querySelector('.add-ab');
buttonB.addEventListener('click', addB);

let addAll = () => {
    reset();
    getDataA('https://jsonplaceholder.typicode.com/todos/');
    getDataB('https://jsonplaceholder.typicode.com/todos/');
}
let buttonAll = document.querySelector('.add-all');
buttonAll.addEventListener('click', addAll);
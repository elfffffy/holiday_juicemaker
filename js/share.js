let dear = document.querySelector('.dear');
let from = document.querySelector('.from');
let result = document.querySelector('result');
let restartBtn = document.querySelector('.restart');

let receiver = window.localStorage.getItem('receiver');
let maker = window.localStorage.getItem('maker');
let pick = window.localStorage.getItem('pick');

dear.innerText = `Dear. ${receiver}`;
from.innerText = `From. ${maker}`;

/* result.innerText = JSON.parse(pick);
console.log(JSON.parse(pick)); */

restartBtn.addEventListener('click', () => {
    window.location.href = '../order.html';
})
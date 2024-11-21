let ownerText = document.querySelector(".chat .text");
let nextBtn = document.querySelector(".chat .next");
let makeBtn = document.querySelector(".chat .make");
let chatBox = document.querySelector(".chat");
let listBox = document.querySelector(".list_form");
let pickInput = document.querySelectorAll("input[type=checkbox]");
let bottle = document.querySelector('.bottle');
let mixBtn = document.querySelector('.mix');

let tempText = null;
if (localStorage.getItem('temp') === 'hot') {
    tempText = '따뜻한';
} else {
    tempText = '시원한';
}

let ownerTextBox = [
    `${localStorage.getItem('receiver')}님에게 ${tempText} 음료를 드리고 싶군요!`,
    `좋아요, ${localStorage.getItem('maker')}님!
     이제 음료를 만들어볼까요, 루루?`,
    '원하는 재료 최대 3개를 골라주세요!'
];

let index = 0;

window.localStorage.removeItem('pick');

function showText() {
    index += 1;
    ownerText.innerText = ownerTextBox[index];

    if (index === 2) {
        nextBtn.classList.remove('on');
        makeBtn.classList.add('on');
    }
};

function showIngred() {
    chatBox.classList.remove('on');
    listBox.classList.add('on');
};

let pick = [];
function pickIngred(e) {
    if (e.target.checked) {
        if (pick.length >= 0) {
            mixBtn.classList.add('on');
        }
        if (pick.length > 2) {
            e.target.checked = false;
        } else {
            pick.push(e.target.value);

            let ingred = document.createElement('span');
            bottle.appendChild(ingred);
            ingred.classList.add(e.target.value);
            ingred.innerText = e.target.value;
        }
    } else {
        let ingreds = document.querySelectorAll('.bottle span');

        for (let i = 0; i < pick.length; i++) {
            if (ingreds[i].className === e.target.value) {
                bottle.removeChild(ingreds[i]);
            }
        }
        console.log(pick.length);

        if (pick.length < 2) {
            mixBtn.classList.remove('on');
        }

        pick.pop(e.target.value);

    };

    window.localStorage.setItem('pick', JSON.stringify(pick));
};

function mixJuice() {
    window.location.href = '../share.html';
};

ownerText.innerText = ownerTextBox[index];
nextBtn.addEventListener('click', showText);
makeBtn.addEventListener('click', showIngred);
pickInput.forEach((checkbox) => {
    checkbox.addEventListener('change', pickIngred);
});
mixBtn.addEventListener('click', mixJuice);

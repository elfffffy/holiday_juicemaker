const ownerText = document.querySelector('#page1 .chat .text');
const orderBtn = document.querySelector('#page1 .chat .order');
let ownerTextBox = [
    "안녕하세요! 저는 음료 제작을 도와줄 카페 사장 루미라고 해요, 루루!",
    "9가지 재료 중에서 최대 3개를 선택해 음료를 만들 수 있어요!",
    "우선 주문서를 작성해볼까요?",
];
const nextBtn = document.querySelector('#page1 .chat .next');


let index = 0;
ownerText.innerText = ownerTextBox[index];

function showText() {
    index += 1;
    ownerText.innerText = ownerTextBox[index];

    if (index === 2) {
        orderBtn.classList.add('on');
        nextBtn.classList.remove('on');
    }
}

nextBtn.addEventListener('click', showText);
orderBtn.addEventListener('click', () => {
    window.location.href = "../order.html";
})



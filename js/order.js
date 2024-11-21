let toMakeBtn = document.querySelector('#page2 .toMake');
let makerInput = document.querySelector('#page2 #maker');
let receiverInput = document.querySelector('#page2 #receiver');
let tempInput = document.querySelectorAll('#page2 input[name="temp"]');

window.localStorage.clear();

toMakeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let maker = makerInput.value;
    let receiver = receiverInput.value;
    let temp = null;

    for (let i = 0; i < tempInput.length; i++) {
        if (tempInput[i].checked) {
            temp = tempInput[i].value;
        }

        tempInput[i].checked = false;
    }

    window.localStorage.setItem('maker', maker);
    window.localStorage.setItem('receiver', receiver);
    window.localStorage.setItem('temp', temp);

    if (maker && receiver && temp != null) {
        window.location.href = "../make.html";
    }


});



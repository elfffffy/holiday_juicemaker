let doorBtn = document.querySelector('#page0 .start');
window.localStorage.clear();

doorBtn.addEventListener('click', () => {
    window.location.href = "intro.html";
})
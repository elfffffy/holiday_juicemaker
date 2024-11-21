let doorBtn = document.querySelector('#page0 .start');
window.localStorage.clear();

doorBtn.addEventListener('click', () => {
    window.location.href = "/holiday_juicemaker/intro.html";
})
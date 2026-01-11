// meow :3

document.addEventListener("DOMContentLoaded", function() {

    let waffleCount = 0;
    let autoClickerInterval = null;
    let isAutoOn = false;

    const countDisplay = document.getElementById("waffle-count");
    const waffleBtn = document.getElementById("make-waffle")
    const autoBtn = document.getElementById("auto-btn");
    const autoStatus = document.getElementById("auto-stats");

    function makeWaffle() {
        waffleCount++;
        countDisplay.textContent = waffleCount;
    }

    function toggleAutoClicker() {
        if (isAutoOn) {
            clearInterval(autoClickerInterval);
            isAutoOn: false;
            autoBtn.textContent = 'Start Auto Clicker';
            autoBtn.classList.remove('active');
            autoStatus.textContent = 'Auto Clicker: OFF';
        } else {
            isAutoOn = true;
            autoBtn.textContent = 'Stop Auto Clicker';
            autoBtn.classList.add('active');
            autoStatus.textContent = 'Auto Clicker: ON (1 waffle/sec)';

            autoClickerInterval = setInterval(function() {
                makeWaffle();
            }, 1000);
        }
    }

    waffleBtn.addEventListener('click', makeWaffle);
    autoBtn.addEventListener('click', toggleAutoClicker);
});

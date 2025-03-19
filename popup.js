let timerRunning = false;  // Variable to track if timer is running
let timerInterval;
let timer = 1 * 60; // 25 minutes in seconds
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const popupContainer = document.getElementById('popup-container');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
    if (timerRunning) return; // Prevent starting the timer multiple times

    timerRunning = true;
    // Add the "active" class to start the darkening and brightening effects
    document.body.classList.add('active');

    timerInterval = setInterval(function () {
        if (timer <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            document.body.classList.remove('active');
            alert("Time's up!");
            return;
        }

        timer--;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    document.body.classList.remove('active');
    timer = 1 * 60; // Reset the timer
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    timerDisplay.textContent = `${minutes}:${seconds}`;
}

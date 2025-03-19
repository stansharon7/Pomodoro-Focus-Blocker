//the logic for your popup

// Timer variable to track the countdown
let timer;

// Time starts at 25 minutes (converted to seconds)
let timeLeft = 25 * 60;

// Start Button: Begins the countdown
document.getElementById("start").addEventListener("click", () => {
    // Clear any existing timer before starting a new one
    clearInterval(timer); 

    // Start the countdown interval
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--; // Decrease the countdown by 1 second
            document.getElementById("timer").textContent = formatTime(timeLeft); // Display the updated time
        } else {
            // When time hits zero, stop the timer and alert the user
            clearInterval(timer);
            alert("Time's up! Take a break."); 
        }
    }, 1000); // Runs every 1000 milliseconds (1 second)
});

// Stop Button: Ends the countdown immediately
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer); // Stops the active timer
});

// Helper function: Formats the time (e.g., 25:00)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60); // Get the minutes
    const secs = seconds % 60; // Get the remaining seconds
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Ensures proper "00" formatting
}
  
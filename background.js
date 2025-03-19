// This runs quietly in the background when your extension is loaded

// Event listener for when the extension is first installed
chrome.runtime.onInstalled.addListener(() => {
    console.log("Pomodoro Focus Blocker Installed!"); // Confirms installation in the console
});
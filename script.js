let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); // Clear any previous timers
  const minutesInput = document.getElementById("minutes").value;
  let time = parseInt(minutesInput) * 60; // convert to seconds
  
  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }
  
  updateDisplay(time);
  
  countdownInterval = setInterval(() => {
    time--;
    updateDisplay(time);
    if (time <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up!");
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById("countdown").textContent = `${mins}:${secs}`;
}

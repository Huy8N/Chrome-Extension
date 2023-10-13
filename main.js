// Referencing UI elements
const display = document.getElementById("countdown");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const inputTime = document.getElementById('setTime');

// Declaring varibles and setting default values
let newMinutes = 10;
let timeInSeconds = newMinutes * 60;
let interval;

// Start the timer
const startTimer = () => {
  const minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  display.innerHTML = `${minutes} : ${seconds}`;
  timeInSeconds--;

  // Auto stop the timer when it hits 0
  if (timeInSeconds < 0) {
    clearInterval(interval)
  }
};

// Listen for start button click
start.addEventListener("click", () => {
  newMinutes = parseInt(inputTime.value, 10);
  timeInSeconds = newMinutes * 60;
  // Start timer with new values
  interval = setInterval(startTimer, 1000);
});

// Listen for stop button click
stop.addEventListener("click", () => {
  clearInterval(interval);
})

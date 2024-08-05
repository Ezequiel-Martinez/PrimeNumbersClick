const primeDisplay = document.getElementById("prime-display");
const timerDisplay = document.getElementById("timer");
let primeIndex = 0;
const primes = [2];
let secondsElapsed = 0;
let timerInterval = null;

// Function to find the next prime number
function findNextPrime(currentPrime) {
  let num = currentPrime + 1;
  while (true) {
    if (isPrime(num)) {
      primes.push(num);
      return num;
    }
    num++;
  }
}

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Update the timer display
function updateTimer() {
  secondsElapsed++;
  const hours = Math.floor(secondsElapsed / 3600);
  const minutes = Math.floor((secondsElapsed % 3600) / 60);
  const seconds = secondsElapsed % 60;

  // Format time as HH:MM:SS
  const formattedTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  timerDisplay.textContent = formattedTime;
}

// Event listener for mouse clicks
document.addEventListener("mousedown", (event) => {
  if (event.button === 0) {
    // Left click
    if (primeIndex === primes.length - 1) {
      findNextPrime(primes[primeIndex]);
    }
    primeIndex++;
  } else if (event.button === 2) {
    // Right click
    if (primeIndex > 0) {
      primeIndex--;
    }
  } else if (event.button === 1 && !timerInterval) {
    // Middle click (button 1 in JavaScript)
    timerInterval = setInterval(updateTimer, 1000);
  }
  primeDisplay.textContent = primes[primeIndex];
});

// Prevent context menu from showing up on right-click
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

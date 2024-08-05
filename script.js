const primeDisplay = document.getElementById("prime-display");
let primeIndex = 0;
const primes = [2];

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
  }
  primeDisplay.textContent = primes[primeIndex];
});

// Prevent context menu from showing up on right-click
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

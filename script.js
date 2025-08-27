// Set the wedding date
const weddingDate = new Date("Nov 01, 2025 10:00:00").getTime();

// Update countdown every 1 second
const timer = setInterval(function() {
  // Current time
  const now = new Date().getTime();

  // Time difference
  const distance = weddingDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result in the countdown div
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If wedding date is reached
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "It's Wedding Time! 🎉";
  }
}, 1000);

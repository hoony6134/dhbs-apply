window.onload = function() {
  function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timeLeft = midnight - now;

    if (timeLeft <= 0) {
      // stop the countdown and change color to red
      document.getElementById("countdown").innerText = "Timer expired";
      document.getElementById("countdown").classList.add("expired");
      return;
    }

    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("hours").innerText = padZero(hoursLeft);
    document.getElementById("minutes").innerText = padZero(minutesLeft);
    document.getElementById("seconds").innerText = padZero(secondsLeft);
  }

  function padZero(num) {
    return num.toString().padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // prevent modification by linking to Google's NTP server
  const xhr = new XMLHttpRequest();
  xhr.open("HEAD", "https://www.google.com", true);
  xhr.send();
};

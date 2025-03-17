const weddingDate = new Date("2025-06-15T00:00:00"); // Change this to your wedding date
const countdownElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function updateCountdown() {
  const now = new Date();
  const difference = weddingDate - now;

  if (difference <= 0) {
    document.getElementById("countdown").innerHTML =
      "<div class='time' style='font-size: 30px;'>It's our wedding day!</div>";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdownElements.days.innerText = days < 10 ? `0${days}` : days;
  countdownElements.hours.innerText = hours < 10 ? `0${hours}` : hours;
  countdownElements.minutes.innerText = minutes < 10 ? `0${minutes}` : minutes;
  countdownElements.seconds.innerText = seconds < 10 ? `0${seconds}` : seconds;
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();

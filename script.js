// Target wedding time in IST — midnight at start of 23rd Nov 2025
const weddingDateIST = new Date("2025-11-23T00:00:00+05:30").getTime();

const coupleNames = "Anchal ❤️ Vivek";
document.getElementById("couple-name").innerText = coupleNames;
document.getElementById("wedding-date").innerText = "November 23, 2025";
document.getElementById("celebration").style.display = "none";

createFallingHearts();

const countdown = setInterval(function () {
  const nowUTC = new Date().getTime(); // UTC time in milliseconds
  const offsetIST = 5.5 * 60 * 60 * 1000; // 5 hours 30 mins in ms
  const nowIST = nowUTC + offsetIST; // Current IST timestamp

  const distance = weddingDateIST - nowIST;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").style.display = "none";
    document.getElementById("celebration").style.display = "block";
    document.getElementById("wedding-message").classList.add("highlight");
    triggerConfetti();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

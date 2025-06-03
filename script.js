const weddingDateIST = new Date("2025-11-23T12:00:00+05:30").getTime(); // ISO format with IST

const coupleNames = "Anchal ❤️ Vivek";

document.getElementById("couple-name").innerText = coupleNames;
document.getElementById("wedding-date").innerText = "November 23, 2025";
document.getElementById("celebration").style.display = "none";

createFallingHearts();

const countdown = setInterval(function () {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000); // convert to UTC
  const nowIST = new Date(utc + (5.5 * 60 * 60 * 1000)); // convert UTC to IST

  const distance = weddingDateIST - nowIST.getTime();

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").style.display = "none";
    document.getElementById("celebration").style.display = "block";
    document.getElementById("wedding-message").classList.add("highlight");
    triggerConfetti();
  }
}, 1000);

// Wedding date in IST (Asia/Kolkata)
const weddingDate = new Date("2025-11-23T00:00:00+05:30").getTime();

const coupleNames = "Anchal ❤️ Vivek";
document.getElementById("couple-name").innerText = coupleNames;
document.getElementById("wedding-date").innerText = "November 23, 2025";
document.getElementById("celebration").style.display = "none";

createFallingHearts();

const countdown = setInterval(function () {
  // Get current IST time reliably
  const nowISTString = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const nowIST = new Date(nowISTString).getTime();

  const distance = weddingDate - nowIST;

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

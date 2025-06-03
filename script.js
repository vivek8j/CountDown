// Wedding date in IST (Asia/Kolkata)
const weddingDate = new Date("2025-11-23T00:00:00+05:30").getTime();

const coupleNames = "Anchal ❤️ Vivek";
document.getElementById("couple-name").innerText = coupleNames;
document.getElementById("wedding-date").innerText = "November 23, 2025";
document.getElementById("celebration").style.display = "none";

function getISTTime() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (5.5 * 60 * 60 * 1000));
}

const countdown = setInterval(function () {
  const nowIST = getISTTime().getTime();
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

// Example heart/confetti generator — you can replace with your actual effect
function triggerConfetti() {
  const confettiContainer = document.getElementById("confetti");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confettiContainer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

function createFallingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.getElementById("hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 500);
}

createFallingHearts();

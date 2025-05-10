const weddingDate = new Date("November 23, 2025 12:00:00").getTime();
const coupleNames = "Anchal ❤️ Vivek";

document.getElementById("couple-name").innerText = coupleNames;
document.getElementById("wedding-date").innerText = "November 23, 2025";
document.getElementById("celebration").style.display = "none";

createFallingHearts();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

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

function createFallingHearts() {
  const heartsContainer = document.getElementById("hearts");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 500);
}

function triggerConfetti() {
  const confettiContainer = document.getElementById("confetti");
  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti");
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`;
    confettiContainer.appendChild(confettiPiece);
  }
}

// 🎵 Auto-play music logic
const music = document.getElementById("wedding-music");

music.muted = true;
music.play()
  .then(() => {
    music.muted = false;
  })
  .catch((err) => {
    console.warn("Autoplay with sound failed. This is expected on mobile browsers.", err);
  });

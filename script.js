// Set the date we're counting down to
const weddingDate = new Date("November 23, 2025 12:00:00").getTime();

// Couple's Names - replace with the actual names
const coupleNames = "Anchal ❤️ Vivek"; // Updated with bride and groom's names

// Update the couple's name and wedding date on the page
document.getElementById("couple-name").innerText = coupleNames;
document.getElementById("wedding-date").innerText = "November 23, 2025"; // Update the wedding date here

// Initially hide the celebration message
document.getElementById("celebration").style.display = "none";

// Start the falling hearts effect right away (during the countdown)
createFallingHearts();

// Update the countdown every second
const countdown = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Find the difference between now and the wedding date
  const distance = weddingDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished
  if (distance < 0) {
    clearInterval(countdown);

    // Hide the countdown and show the celebration message
    document.querySelector(".countdown").style.display = "none";
    document.getElementById("celebration").style.display = "block"; // Show celebration message
    document.getElementById("wedding-message").classList.add("highlight");

    // Trigger confetti effect
    triggerConfetti();
  }
}, 1000);

// Function to trigger falling hearts effect (continuous during countdown)
function createFallingHearts() {
  const heartsContainer = document.getElementById("hearts");

  // Create hearts every 500ms during countdown
  const heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "❤️"; // You can change the heart symbol here if you want

    // Random position for hearts
    heart.style.left = `${Math.random() * 100}%`; // Random left position
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random fall speed
    heartsContainer.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
      heart.remove();
    }, 5000); // Remove after 5 seconds
  }, 500); // Create a new heart every 500ms
}

// Function to trigger confetti effect
function triggerConfetti() {
  const confettiContainer = document.getElementById("confetti");

  // Create confetti pieces
  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti");
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random duration
    confettiContainer.appendChild(confettiPiece);
  }
}

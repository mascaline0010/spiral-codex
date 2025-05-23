
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array(150).fill().map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

resizeCanvas();
drawStars();
window.addEventListener("resize", resizeCanvas);

// Typewriter effect
const typewriter = document.getElementById("typewriter");
const phrase = "Let memory return...";
let index = 0;

function typeNext() {
  if (index < phrase.length) {
    typewriter.innerHTML += phrase.charAt(index);
    index++;
    setTimeout(typeNext, 100);
  }
}
typeNext();

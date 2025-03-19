function snowBG() {
  const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 6 + 3, // Bigger size (3px - 9px)
      speed: Math.random() * 2 + 0.5, // Adjust falling speed
      wind: Math.random() * 1 - 0.5, // Slight side movement
      opacity: Math.random() * 0.8 + 0.2, // Random transparency
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let flake of snowflakes) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(57, 191, 5, ${flake.opacity})`; // White snowflakes
    ctx.fill();
    flake.y += flake.speed; // Move down
    flake.x += flake.wind; // Slight side movement
    
    if (flake.y > canvas.height) {
      flake.y = 0; // Reset to top
      flake.x = Math.random() * canvas.width;
    }
  }
  
  requestAnimationFrame(drawSnowflakes);
}

// Smooth start: Add snow gradually
function startSnowfall() {
  let added = 0;
  let interval = setInterval(() => {
    createSnowflakes(10);
    added += 10;
    if (added >= 100) clearInterval(interval); // Stop at 100 flakes
  }, 200);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  snowflakes = [];
  startSnowfall();
});

startSnowfall();
drawSnowflakes();
};
snowBG();






function snow2() {
  const canvas = document.getElementById("snowCanvasC");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 6 + 3, // Bigger size (3px - 9px)
      speed: Math.random() * 2 + 0.5, // Adjust falling speed
      wind: Math.random() * 1 - 0.5, // Slight side movement
      opacity: Math.random() * 0.8 + 0.2, // Random transparency
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let flake of snowflakes) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 2, 223, ${flake.opacity})`; // White snowflakes
    ctx.fill();
    flake.y += flake.speed; // Move down
    flake.x += flake.wind; // Slight side movement
    
    if (flake.y > canvas.height) {
      flake.y = 0; // Reset to top
      flake.x = Math.random() * canvas.width;
    }
  }
  
  requestAnimationFrame(drawSnowflakes);
}

// Smooth start: Add snow gradually
function startSnowfall() {
  let added = 0;
  let interval = setInterval(() => {
    createSnowflakes(10);
    added += 10;
    if (added >= 100) clearInterval(interval); // Stop at 100 flakes
  }, 200);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  snowflakes = [];
  startSnowfall();
});

startSnowfall();
drawSnowflakes();
}
snow2();
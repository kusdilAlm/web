document.addEventListener("DOMContentLoaded", function() {
  function optimizedSnow(canvasId, colors) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    
    let snowflakes = [];
    const MAX_FLAKES = 45; // More particles for better effect
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    function createSnowflakes() {
      snowflakes = Array.from({ length: MAX_FLAKES }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 2, // Slightly bigger particles
        speed: Math.random() * 0.5 + 0.3,
        wind: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.5 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
    }
    
    function drawSnowflakes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach(flake => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${flake.color},${flake.opacity})`;
        ctx.fill();
        
        flake.y += flake.speed;
        flake.x += flake.wind;
        
        if (flake.y > canvas.height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(drawSnowflakes);
    }
    
    window.addEventListener("resize", () => {
      resizeCanvas();
      createSnowflakes();
    });
    
    resizeCanvas();
    createSnowflakes();
    drawSnowflakes();
  }
  
  optimizedSnow("snowCanvas", [
    "57, 191, 5", // Green
    "6, 156, 255", // Blue
    "255, 2, 223", // Pink
    "6, 255, 10", // Lime
    "255, 0, 0" // Red
  ]);
  
  optimizedSnow("snowCanvasC", [
    "6, 156, 255", // Blue
    "255, 2, 223", // Pink
    "255, 0, 0", // Red
    "6, 255, 10" // Lime
  ]);
  
  // Add the "show" class to make the container visible without delay
  const container = document.querySelector('.container');
  container.classList.add('show'); // Trigger the animation immediately
});
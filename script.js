document.getElementById('playSong').addEventListener('click', () => {
  const song = document.getElementById('birthdaySong');
  song.play();

  // Confetti effect
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1,
      dx: Math.random() * 4 - 2,
      dy: Math.random() * -5 - 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;

      if (p.y < 0) p.y = canvas.height;
    });
    requestAnimationFrame(animate);
  }

  animate();
});

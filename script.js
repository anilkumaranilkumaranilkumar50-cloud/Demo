// Music toggle + interaction start
document.addEventListener('DOMContentLoaded', () => {
  const bgMusic   = document.getElementById('bgMusic');
  const hoverSound = document.getElementById('hoverSound');
  const toggleBtn = document.getElementById('musicToggle');

  let isPlaying = false;

  function tryPlayMusic() {
    bgMusic.play().then(() => {
      isPlaying = true;
      toggleBtn.textContent = "⏸ Pause";
      toggleBtn.classList.add('active');
    }).catch(() => {});
  }

  // Start after first interaction
  document.body.addEventListener('click', () => {
    if (!isPlaying) tryPlayMusic();
  }, { once: true });

  toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      toggleBtn.textContent = "♪ Ambience";
      toggleBtn.classList.remove('active');
    } else {
      tryPlayMusic();
    }
    isPlaying = !isPlaying;
  });

  // Hover clink sound on menu items
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play().catch(()=>{});
    });
  });

  // Simple floating particles (food emoji style)
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer) {
    const emojis = ['🍔','🍕','🍣','🌮','🥗','🥩','🍛','🥪','🍲','🍜','🍨','🍤','🥟','🍝','🍖'];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left   = Math.random() * 100 + 'vw';
      p.style.top    = Math.random() * 100 + 'vh';
      p.style.fontSize = (12 + Math.random() * 24) + 'px';
      p.style.animationDuration = (8 + Math.random() * 12) + 's';
      p.style.animationDelay = Math.random() * 5 + 's';
      particlesContainer.appendChild(p);
    }
  }
});

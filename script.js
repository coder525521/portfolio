// Main Sci-Fi Cellular Background
VANTA.CELLS({
  el: "#sci-fi-bg",
  color1: 0x0a192f,  // Dark blue
  color2: 0x3b82f6,  // Bright blue
  size: 1.5,
  speed: 1.5
});

// Secondary Cloud Background
VANTA.CLOUDS({
  el: "#clouds-bg",
  skyColor: 0x0a192f,
  cloudColor: 0x3b82f6,
  cloudShadowColor: 0x1e3a8a,
  sunColor: 0xffffff,
  sunGlareColor: 0x3b82f6,
  sunlightColor: 0x3b82f6
});

// Floating cube animation
const cube = document.querySelector('.animated-cube');
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  cube.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;
});
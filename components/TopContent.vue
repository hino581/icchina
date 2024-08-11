<template>
  <div class="header_menu">
    <HeaderMenu />
  </div>
  <div class="logo-container">
    <h1 class="luxury-title">イッチャイナ</h1>
  </div>
</template>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

.header_menu {
  font-size:1.5rem;
  position: absolute;
  top: 2vw;
  width:50vw;
}

.logo-container {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #000000, #ff0000);
  /* Red and black gradient background */
}

.luxury-title {
  font-family: 'Dancing Script', cursive;
  font-size: 6rem;
  color: gold;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6),
    0 0 30px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.2);
  animation: wave 5s ease-in-out infinite, glow 2s infinite alternate;
  transform: rotate(-10deg);
  /* Angled text */
}

/* Glowing effect */
@keyframes glow {
  0% {
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6),
      0 0 30px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.2);
  }

  100% {
    text-shadow: 0 0 20px rgba(255, 215, 0, 1), 0 0 30px rgba(255, 215, 0, 0.8),
      0 0 40px rgba(255, 215, 0, 0.6), 0 0 50px rgba(255, 215, 0, 0.4);
  }
}

/* Wavy effect */
@keyframes wave {

  0%,
  100% {
    transform: rotate(-10deg) translateY(0);
  }

  25% {
    transform: rotate(-10deg) translateY(-10px);
  }

  50% {
    transform: rotate(-10deg) translateY(10px);
  }

  75% {
    transform: rotate(-10deg) translateY(-10px);
  }
}
</style>
  
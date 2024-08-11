<template>
    <div class="menu-wrapper">
      <button @click="toggleMenu" class="hamburger-button" v-if="isMobile">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>
      <div v-if="isOpen || !isMobile" class="menu">
        <ul>
          <li><nuxt-link class="btn btn-primary" to="/">イッチャイナとは？</nuxt-link></li>
          <li><nuxt-link class="c-p" to="/posts">チャイ活</nuxt-link></li>
          <li><nuxt-link class="c-p" to="/chiner">チャイナー</nuxt-link></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const isOpen = ref(false)
  const isMobile = ref(true)
  
  function toggleMenu() {
    isOpen.value = !isOpen.value
  }
  
  function handleResize() {
    isMobile.value = window.innerWidth < 768
  }
  
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style scoped>
  .c-p{
    cursor:pointer;
  }
  .menu-wrapper {
    position:absolute;
    top:0;
    display: flex;
    align-items: center;
    color: white;
    z-index: 10;
  }
  
  .hamburger-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  
  .hamburger-button span {
    width: 100%;
    height: 3px;
    background: #333;
    transition: all 0.3s ease-in-out;
  }
  
  .hamburger-button span.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .hamburger-button span.open:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger-button span.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  
  .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 35px;
    left: 0;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
  
  .menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .menu li {
    margin-bottom: 10px;
  }
  
  .menu li:last-child {
    margin-bottom: 0;
  }
  
  /* 横並びメニュー用スタイル */
  @media (min-width: 768px) {
    .menu {
      position: static;
      flex-direction: row;
      background: transparent;
      box-shadow: none;
      padding: 0;
    }
  
    .menu ul {
      display: flex;
    }
  
    .menu li {
      margin: 0 15px;
    }
  
    .hamburger-button {
      display: none;
    }
  }
  </style>
  
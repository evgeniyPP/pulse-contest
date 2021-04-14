<template>
  <div class="loader"><div></div></div>
</template>

<script setup></script>

<style scoped>
.loader {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(1px);
  height: 104px;
}

.loader > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #4f45e4;
  animation: loader 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes loader {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>

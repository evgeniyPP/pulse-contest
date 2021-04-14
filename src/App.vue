<template>
  <img alt="logo" src="./assets/logo.png" class="mx-auto" />
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h1
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Конкурсы в "Пульс"
        </h1>
        <FirstPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import FirstPage from './components/FirstPage.vue';
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>

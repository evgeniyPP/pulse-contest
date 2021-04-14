<template>
  <img alt="logo" src="./assets/logo.png" class="mx-auto mt-8 sm:mt-16" />
  <div class="my-8 sm:my-12">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="sm:text-center">
        <h1
          class="mt-2 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
        >
          Конкурсы в "Пульс"
        </h1>
        <FirstPage v-if="page === 1" />
        <SecondPage v-else-if="page === 2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import FirstPage from './components/FirstPage/FirstPage.vue';
import SecondPage from './components/SecondPage.vue';
import { page } from './store/global';
</script>

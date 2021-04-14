<template>
  <img alt="logo" src="./assets/logo.png" class="mx-auto mt-8 sm:mt-12" />
  <main class="my-8 sm:my-12">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="sm:text-center">
        <h1
          class="mt-2 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
        >
          Конкурсы в "Пульс"
        </h1>
        <FirstPage v-if="page === 1" />
        <SecondPage v-else-if="page === 2" />
        <ThirdPage v-else-if="page === 3" />
      </div>
    </div>
  </main>
  <Footer />
</template>

<script setup>
import FirstPage from './components/FirstPage/FirstPage.vue';
import SecondPage from './components/SecondPage.vue';
import ThirdPage from './components/ThirdPage.vue';
import Footer from './components/Footer.vue';
import { page } from './store';
</script>

<style>
html,
body,
#app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
}
</style>

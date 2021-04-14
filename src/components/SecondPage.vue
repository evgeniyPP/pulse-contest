<template>
  <div class="mt-8 max-w-2xl lg:mx-auto">
    <p class="mt-3 text-xl text-gray-500 sm:mt-4">Всего участие приняли:</p>
    <Card :count="participants.length" :label="human" class="my-10" />
    <button
      class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Разыграть
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { participants } from '../store/global';
import Card from './Card.vue';

const human = computed(() => {
  const digits = String(participants.length).split('');
  const lastDigit = +digits[digits.length - 1];
  const penultimateDigit = +digits[digits.length - 2];

  if (
    (lastDigit !== 2 &&
      lastDigit !== 3 &&
      lastDigit !== 4 &&
      !penultimateDigit) ||
    penultimateDigit === 1
  ) {
    return 'человек';
  }

  return 'человека';
});
</script>

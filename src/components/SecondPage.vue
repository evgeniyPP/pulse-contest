<template>
  <div class="max-w-2xl mt-8 sm:mx-auto">
    <p class="mt-3 text-xl text-gray-500 sm:mt-4">Всего участие приняли:</p>
    <Card :value="participants.length" :label="human" shadow class="my-10" />
    <button
      v-if="participants.length"
      @click="play"
      class="block px-6 py-3 mx-auto text-base font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Разыграть
    </button>
    <p v-if="error" class="mt-4 text-xs text-red-600">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { participants, play, error } from '../store';
import Card from './Card.vue';

const human = computed(() => {
  const digits = String(participants.value.length).split('');
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

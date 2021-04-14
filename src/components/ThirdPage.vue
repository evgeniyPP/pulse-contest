<template>
  <div class="max-w-2xl mt-8 sm:mx-auto">
    <p class="mt-3 text-xl text-gray-500 sm:mt-4">Выиграл</p>
    <Card :value="winner" class="my-6" />
    <button
      v-if="participants.length > 1"
      @click="retry"
      class="block px-6 py-3 mx-auto text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Повторить
    </button>
    <p v-if="error" class="mt-4 text-xs text-red-600">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
import { winner, participants, play, error, setParticipants } from '../store';
import Card from './Card.vue';

const retry = () => {
  setParticipants(
    participants.value.filter(participant => participant !== winner.value)
  );
  play();
};
</script>

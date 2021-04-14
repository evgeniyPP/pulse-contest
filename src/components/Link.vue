<template>
  <div class="p-8 flex items-center justify-center bg-white">
    <div class="w-full max-w-lg mr-4">
      <label for="link" class="sr-only">Ссылка на пост</label>
      <input
        v-model="url"
        type="url"
        name="link"
        id="link"
        class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-md border-gray-300 rounded-md"
        placeholder="https://www.tinkoff.ru/invest/social/profile/<ваше имя>..."
      />
    </div>
    <Button @click="() => fetchParticipants(url)" :isDisabled="!url" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import { fetchParticipants } from '../api';

const url = ref('');
</script>

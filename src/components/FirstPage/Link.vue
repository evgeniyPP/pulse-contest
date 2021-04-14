<template>
  <div class="p-8 flex items-center justify-center">
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
      <p v-if="error" class="mt-2 text-sm text-red-600">
        {{ error }}
      </p>
    </div>
    <Button @click="getParticipants" :isDisabled="!url" class="self-start" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { error, loadParticipants } from '../../store/global';
import Button from './Button.vue';

const url = ref('');

const getParticipants = async () => {
  const result = await loadParticipants(url.value);

  if (!result) {
    url.value = '';
  }
};
</script>

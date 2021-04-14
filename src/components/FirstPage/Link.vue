<template>
  <div class="flex items-center justify-center py-8 sm:p-8">
    <div class="w-full max-w-lg mr-4">
      <label for="link" class="sr-only">Ссылка на пост</label>
      <input
        v-model="url"
        type="url"
        name="link"
        id="link"
        class="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-md"
        placeholder="https://www.tinkoff.ru/invest/social/profile/<ваше имя>..."
      />
      <p v-if="error" class="mt-2 text-xs text-red-600">
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

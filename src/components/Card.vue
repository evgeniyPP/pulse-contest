<template>
  <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
    <dl class="rounded-lg shadow-lg">
      <div
        class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
      >
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
          {{ label }}
        </dt>
        <dd class="order-1 text-5xl font-extrabold text-indigo-600">
          {{ count }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  count: Number,
  label: String,
});
</script>

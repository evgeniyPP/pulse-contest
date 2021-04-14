<template>
  <div
    :class="{ [`max-w-${width}`]: true }"
    class="max-w-md px-4 mx-auto sm:px-6 lg:px-8"
  >
    <dl :class="{ 'shadow-lg': shadow }" class="rounded-lg">
      <div
        :class="{ 'border-t border-gray-100': shadow }"
        class="flex flex-col p-6 text-center"
      >
        <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
          {{ label }}
        </dt>
        <dd class="order-1 text-5xl font-extrabold text-indigo-600">
          {{ value }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  value: String | Number,
  label: {
    type: String,
    default: null,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
});
</script>

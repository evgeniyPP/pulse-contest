<template>
  <button
    :class="{
      'disabled:cursor-not-allowed': isDisabled,
      'disabled:cursor-wait': loading,
    }"
    class="inline-flex items-center p-1 text-white bg-indigo-600 border border-transparent rounded-full shadow-sm hover:bg-indigo-700 sm:p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
    :disabled="isDisabled || loading"
  >
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      class="w-6 h-6"
    >
      <path
        fill="currentColor"
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      ></path>
    </svg>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';
import { loading } from '../../store';

defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="max-w-2xl mt-8 sm:mx-auto">
    <p class="mt-2 text-xl text-gray-500">
      Разыгрывайте всё, что угодно, среди подписчиков <br />
      (кроме донатов – это запрещено).
    </p>
    <p class="mt-2 text-xl text-gray-500">
      Просто вставьте ссылку на пост, и мы отберем все уникальные комментарии и
      выберем случайный.
    </p>
    <Link />
  </div>
</template>

<script setup>
import Link from './Link.vue';
</script>

<script setup>
defineProps({
  message: Object,
});
</script>

<template>
  <div class="p-4 even:bg-gray-100">
    <h1 class="text-2xl font-bold">{{ message.name }}</h1>
    <p class="text-gray-700">
      {{ message.message }}
    </p>
    <div class="flex items-center mt-4">
      <p class="mr-10 text-green-700">
        {{ message.email }}
      </p>
      <p class="text-blue-500">{{ message.phone }}</p>
    </div>
  </div>
</template>

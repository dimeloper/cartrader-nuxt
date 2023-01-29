<template>
  <div
    class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-9xl">
      {{ error.statusCode }}
    </h1>
    <p class="text-4xl mt-7">
      {{ error.message }}
    </p>
    <button
      class="py-4 text-2xl text-white bg-blue-600 rounded mt-7 px-7"
      @click="handleReturn">
      Go back
    </button>
  </div>
</template>

<script setup>
const error = useError();

const handleReturn = () => {
  navigateTo('/');
};
</script>

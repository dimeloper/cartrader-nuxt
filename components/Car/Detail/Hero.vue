<template>
  <!-- CAR HERO -->
  <div class="mt-10">
    <img
      class="w-full"
      :src="car.url"
      alt="" />
    <h1 class="mt-10 text-4xl">
      {{ car.name }}
    </h1>
    <div
      class="flex justify-between pb-5 mt-3 text-lg border-b text-slate-500">
      <div class="flex">
        <p class="mr-2">
          {{ car.seats }} seats
        </p>
        <p class="mr-2">|</p>
        <p class="mr-2">
          {{ car.miles }} miles
        </p>
      </div>
      <div>
        <p class="text-2xl font-bold">
          ${{ car.price }}
        </p>
      </div>
    </div>
  </div>
  <!-- CAR HERO -->
</template>

<script setup>
const props = defineProps({
  car: Object,
});
</script>

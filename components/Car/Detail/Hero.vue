<script setup>
const props = defineProps({
  car: Object,
});

const config = useRuntimeConfig();
</script>

<template>
  <!-- CAR HERO -->
  <div class="mt-10">
    <NuxtImg
      class="w-full"
      :src="`${config.public.supabase.url}/storage/v1/object/public/cartrader-images/${car.image}`"
      alt="" />
    <h1 class="mt-10 text-4xl">
      {{ car.name }}
    </h1>
    <div
      class="flex justify-between pb-5 mt-3 text-lg border-b text-slate-500">
      <div class="flex">
        <p class="mr-2">{{ car.numberOfSeats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }} miles</p>
      </div>
      <div>
        <p class="text-2xl font-bold">${{ car.price }}</p>
      </div>
    </div>
  </div>
  <!-- CAR HERO -->
</template>

<script setup>
import heartFilled from '@/assets/heartFilled.png';
import heartOutline from '@/assets/heartOutline.png';

const props = defineProps({
  car: Object,
  favoured: Boolean,
});

const emitFavour = defineEmits(['favour']);
const config = useRuntimeConfig();
</script>

<template>
  <!-- CAR CARD -->
  <div
    class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <img
      @click="emitFavour('favour', car.id)"
      class="absolute z-20 w-7 right-5 top-2"
      :src="favoured ? heartFilled : heartOutline" />
    <div
      class="flex h-full"
      @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <NuxtImg
        class="w-[300px] h-full"
        :src="`${config.public.supabase.url}/storage/v1/object/public/cartrader-images/${car.image}`"
        alt="" />
      <div class="flex flex-col p-4">
        <div>
          <h1 class="text-2xl text-blue-700">
            {{ car.name }}
          </h1>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>

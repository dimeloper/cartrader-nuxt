<template>
  <!-- CAR CARD -->
  <div
    class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <img
      @click="emit('favour', car.id)"
      class="absolute w-7 right-5 top-2 z-20"
      :src="
        favoured
          ? heartFilled
          : heartOutline
      " />
    <div
      class="flex h-full"
      @click="
        navigateTo(
          `/car/${car.name}-${car.id}`,
        )
      ">
      <NuxtImg
        class="w-[300px] h-full"
        :src="car.url"
        alt="" />
      <div class="flex flex-col p-4">
        <div>
          <h1
            class="text-2xl text-blue-700">
            {{ car.name }}
          </h1>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">
          ${{ car.price }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import heartFilled from '@/assets/heartFilled.png';
import heartOutline from '@/assets/heartOutline.png';

const props = defineProps({
  car: Object,
  favoured: Boolean,
});

const emit = defineEmits('favour');
</script>

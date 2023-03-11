<script setup>
const props = defineProps({
  cars: Array,
});

const favourite = useLocalStorage(
  'favorite',
  {},
);

const handleFavourite = (id) => {
  if (id in favourite.value) {
    delete favourite.value[id];
  } else {
    favourite.value = {
      ...favourite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div class="w-full">
    <CarCard
      v-for="car in props.cars"
      :key="car.id"
      :car="car"
      @favour="handleFavourite"
      :favoured="car.id in favourite" />
  </div>
</template>

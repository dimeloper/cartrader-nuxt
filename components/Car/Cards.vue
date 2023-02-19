<script setup>
const { cars } = useCars();

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
    <ClientOnly>
      <CarCard
        v-for="car in cars"
        :key="car.id"
        :car="car"
        @favour="handleFavourite"
        :favoured="
          car.id in favourite
        " />
    </ClientOnly>
  </div>
</template>

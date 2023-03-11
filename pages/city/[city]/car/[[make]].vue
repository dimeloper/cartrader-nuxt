<script lang="ts" setup>
const route = useRoute();

const maxPrice = computed(
  () => route.query.maxPrice,
);

const minPrice = computed(
  () => route.query.minPrice,
);

const { data: cars, refresh } =
  await useFetchCars(
    route.params.city as string,
    {
      minPrice,
      maxPrice,
      make: route.params.make,
    },
  );

watch(
  () => route.query,
  () => refresh(),
);
</script>

<template>
  <div>
    <CarCards
      v-if="cars?.length"
      :cars="cars ?? []" />
    <h1
      class="p-4 font-semibold"
      v-else>
      No Cars found with applied filters
    </h1>
  </div>
</template>

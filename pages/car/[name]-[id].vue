<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes
      :features="car.features" />
    <CarDetailDescription
      :description="car.description" />
    <CarDetailContact />
  </div>
</template>

<script setup scoped>
const route = useRoute();
const { toTitleCase } = useUtilities();
const { cars } = useCars();

useHead({
  title: toTitleCase(route.params.name),
});

const car = computed(() => {
  return cars.find(
    (car) =>
      car.id ===
      parseInt(route.params.id),
  );
});

definePageMeta({ layout: 'custom' });
</script>

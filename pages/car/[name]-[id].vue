<script setup scoped>
const route = useRoute();

const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name),
});

const { data: car } = await useFetchCar(route.params.id);

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id of ${route.params.id} does not exist.`,
  });
}

definePageMeta({ layout: 'custom' });
</script>

<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>

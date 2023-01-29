<template>
  <div>
    <div class="flex mt-32">
      <CarSideBar />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${
    route.params.make
      ? toTitleCase(route.params.make)
      : 'Cars'
  } in ${toTitleCase(
    route.params.city,
  )}`,
});

definePageMeta({ layout: 'custom' });
</script>

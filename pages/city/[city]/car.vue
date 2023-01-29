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

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return (
        txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase()
      );
    },
  );
}
</script>

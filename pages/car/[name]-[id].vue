<template>
  <div>
    <CarDetailHero />
    <CarDetailAttributes />
    <CarDetailDescription />
    <CarDetailContact />
  </div>
</template>

<script setup scoped>
const route = useRoute();

useHead({
  title: toTitleCase(route.params.name),
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

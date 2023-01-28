<template>
  <div>
    <NavBar />
    <div
      class="w-3/5 pb-16 mx-auto mt-4 space-y-4 max-w-7xl xs:px-8 sm:px-10 lg:px-16">
      <CarDetailHero />
      <CarDetailAttributes />
      <CarDetailDescription />
      <CarDetailContact />
    </div>
  </div>
</template>

<script setup scoped>
const route = useRoute();

useHead({
  title: toTitleCase(route.params.name),
});

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

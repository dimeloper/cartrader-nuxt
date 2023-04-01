<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${
    route.params.make
      ? toTitleCase(route.params.make)
      : 'Cars'
  } in ${toTitleCase(route.params.city)}`,
});

definePageMeta({ layout: 'custom' });
</script>

<template>
  <div>
    <div class="flex mt-32">
      <NuxtErrorBoundary>
        <CarSideBar />
        <NuxtPage />
        <template #error="{ error }">
          <div class="flex flex-col mx-auto text-center">
            <h1 class="mb-4 text-5xl text-red-600">
              Sorry, something went wrong
            </h1>
            <code>{{ error }}</code>
            <button
              class="px-10 py-3 mt-4 text-white bg-blue-400 rounded"
              @click="error.value = null">
              Go back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'custom',
  middleware: [
    function (to, from) {
      const user = useSupabaseUser();
      if (user.value) {
        return;
      }
      return navigateTo('/login');
    },
  ],
});

const { listings } = useCars();
</script>

<template>
  <div>
    <div
      class="flex items-center justify-between mt-24">
      <h1 class="text-6xl">
        My Listings
      </h1>
      <NuxtLink
        class="flex items-center justify-center font-bold text-white bg-blue-400 rounded-full cursor-pointer w-9 h-9"
        to="/profile/listings/create">
        +
      </NuxtLink>
    </div>
    <div
      class="p-3 mt-5 rounded shadow">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="
          listing
        "></CarListingCard>
    </div>
  </div>
</template>

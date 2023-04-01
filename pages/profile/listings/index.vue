<script lang="ts" setup>
definePageMeta({
  layout: 'custom',
  middleware: [],
});

const user = useSupabaseUser();
const { data: listings } = await useFetch(
  `/api/car/listings/user/${user.value?.id}`,
);

const handleDelete = async (id: number) => {
  await $fetch(`/api/car/listings/${id}`, {
    method: 'delete',
  });
  if (listings.value) {
    listings.value = listings.value.filter(
      (listing) => listing.id !== id,
    );
  }
};
</script>

<template>
  <div>
    <div class="flex items-center justify-between mt-24">
      <h1 class="text-6xl">My Listings</h1>
      <NuxtLink
        class="flex items-center justify-center font-bold text-white bg-blue-400 rounded-full cursor-pointer w-9 h-9"
        to="/profile/listings/create">
        +
      </NuxtLink>
    </div>
    <div class="p-3 mt-5 rounded shadow">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @delete-click="handleDelete"></CarListingCard>
    </div>
  </div>
</template>

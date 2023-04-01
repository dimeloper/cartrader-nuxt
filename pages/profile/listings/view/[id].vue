<script lang="ts" setup>
definePageMeta({
  layout: 'custom',
  middleware: [],
});

const route = useRoute();
const { data: messages } = useFetch(
  `/api/car/listings/${route.params.id}/message`,
);
</script>

<template>
  <div class="mt-20 rounded shadow">
    <CarMessageCard
      v-for="message in messages"
      :key="message.id"
      :message="message" />
  </div>
</template>

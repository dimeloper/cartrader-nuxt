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
</script>

<template>
  <div class="mt-20 rounded shadow">
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
  </div>
</template>

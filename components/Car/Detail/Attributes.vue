<template>
  <!-- CAR ATTRIBUTES -->
  <div class="pb-5 mt-5 mr-10 border-b">
    <div
      class="flex mt-2 text-lg"
      v-for="(
        feature, index
      ) in features"
      :key="index">
      <p
        class="mr-3 rounded text-lime-800">
        ✔
      </p>
      <p>{{ feature }}</p>
    </div>
  </div>
  <!-- CAR ATTRIBUTES -->
</template>

<script setup>
const props = defineProps({
  features: Array,
});
</script>

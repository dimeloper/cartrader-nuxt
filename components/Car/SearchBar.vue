<template>
  <!-- HOME SEARCH BAR -->
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
    <input
      type="text"
      class="w-full h-full px-5 py-3 text-2xl rounded-full opacity-50 focus:outline-none"
      :class="
        cityError
          ? 'border-red-500 border'
          : ''
      "
      placeholder="Search by city..."
      v-model="city" />
    <button
      class="px-10 text-white bg-sky-500"
      @click="handleSearch">
      Search
    </button>
  </div>
  <!-- HOME SEARCH BAR -->
</template>

<script setup>
const city = ref('');
const cityError = ref(false);

const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};
</script>

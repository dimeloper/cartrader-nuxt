<template>
  <!-- CAR SIDE BAR -->
  <div
    class="shadow border min-w-[200px] w-64 mr-10 z-30 h-[190px]">
    <div
      class="relative flex justify-between p-5 border-b cursor-pointer">
      <h3>Location</h3>
      <h3
        @click="updateModal('location')"
        class="text-blue-400 capitalize">
        {{ mroute.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute p-5 -m-1 bg-white border shadow left-56 top-1">
        <input
          v-model="mcity"
          type="text"
          class="p-1 border rounded" />
        <button
          @click="onChangeLocation()"
          class="w-full p-1 mt-2 text-white bg-blue-400 rounded">
          Apply
        </button>
      </div>
    </div>
    <div
      class="relative flex justify-between p-5 border-b cursor-pointer">
      <h3>Make</h3>
      <h3
        class="text-blue-400 capitalize">
        Toyota
      </h3>
    </div>
    <div
      class="relative flex justify-between p-5 border-b cursor-pointer">
      <h3>Price</h3>
      <h3
        class="text-blue-400 capitalize">
        Any
      </h3>
    </div>
  </div>
  <!-- CAR SIDE BAR -->
</template>

<script lang="ts" setup>
const modal = ref({
  make: false,
  location: false,
  price: false,
});

const updateModal = (key: string) => {
  switch (key) {
    case 'location':
      modal.value.location =
        !modal.value.location;
    case 'make':
      modal.value.make =
        !modal.value.make;
    case 'price':
      modal.value.price =
        !modal.value.price;
  }
};

const mcity = ref('');
let mroute = useRoute();

const onChangeLocation = () => {
  if (!mcity.value) {
    return;
  }

  if (!isNaN(parseInt(mcity.value))) {
    throw createError({
      statusCode: 400,
      message: 'Invalid city format.',
    });
  }

  updateModal('location');
  navigateTo(
    `/city/${mcity.value}/car/${mroute.params.make}`,
  );
  mcity.value = '';
};
</script>

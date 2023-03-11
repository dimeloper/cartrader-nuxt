<script lang="ts" setup>
const priceRange = ref({
  min: '',
  max: '',
});
const mcity = ref('');

const modal = ref({
  make: false,
  location: false,
  price: false,
});

let mroute = useRoute();
let mrouter = useRouter();
const { makes } = useCars();

const priceRangeText = computed(() => {
  const minPrice =
    mroute.query.minPrice;
  const maxPrice =
    mroute.query.maxPrice;

  if (!minPrice && !maxPrice) {
    return 'Any';
  } else if (!minPrice && maxPrice) {
    return `< $${maxPrice}`;
  } else if (minPrice && !maxPrice) {
    return `> $${minPrice}`;
  } else {
    return `$${minPrice}-$${maxPrice}`;
  }
});

const toggleModal = (key: string) => {
  switch (key) {
    case 'location':
      modal.value.make = false;
      modal.value.price = false;
      modal.value.location =
        !modal.value.location;
      return;
    case 'make':
      modal.value.location = false;
      modal.value.price = false;
      modal.value.make =
        !modal.value.make;
      return;
    case 'price':
      modal.value.location = false;
      modal.value.make = false;
      modal.value.price =
        !modal.value.price;
      return;
  }
};

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

  toggleModal('location');
  navigateTo(
    `/city/${mcity.value}/car/${mroute.params.make}`,
  );
  mcity.value = '';
};

const onChangeMake = (make: string) => {
  toggleModal('make');
  if (make === 'Any') {
    navigateTo(
      `/city/${mroute.params.city}/car`,
    );
  } else {
    navigateTo(
      `/city/${mroute.params.city}/car/${make}`,
    );
  }
};

const onChangePrice = () => {
  toggleModal('price');
  if (
    priceRange.value.min &&
    priceRange.value.max
  ) {
    if (
      priceRange.value.min >
      priceRange.value.max
    )
      return;
  }

  mrouter.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max,
    },
  });
};
</script>

<template>
  <!-- CAR SIDE BAR -->
  <div
    class="shadow border min-w-[200px] w-64 mr-10 z-30 h-[190px]">
    <!-- LOCATION START -->
    <div
      class="relative flex justify-between p-5 border-b cursor-pointer">
      <h3>Location</h3>
      <h3
        @click="toggleModal('location')"
        class="text-blue-400 capitalize">
        {{ mroute.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute p-5 -m-1 bg-white border shadow left-72 top-1">
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
    <!-- LOCATION END -->
    <!-- MAKE START -->
    <div
      class="relative flex justify-between p-5 border-b cursor-pointer">
      <h3>Make</h3>
      <h3
        class="text-blue-400 capitalize"
        @click="toggleModal('make')">
        {{
          mroute.params.make || 'any'
        }}
      </h3>
      <div
        class="absolute border shadow left-72 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white"
        v-if="modal.make">
        <h4
          v-for="make in makes"
          :key="make"
          class="w-1/3"
          @click="onChangeMake(make)">
          {{ make }}
        </h4>
      </div>
    </div>
    <!-- MAKE END -->
    <!-- PRICE END -->
    <div
      class="relative flex justify-between p-5 border-b cursor-pointer">
      <h3>Price</h3>
      <h3
        class="text-blue-400 capitalize"
        @click="toggleModal('price')">
        {{ priceRangeText }}
      </h3>
      <div
        class="absolute p-5 -m-1 bg-white border shadow left-72 top-1"
        v-if="modal.price">
        <input
          class="p-1 border rounded"
          type="number"
          placeholder="Min"
          v-model="priceRange.min" />
        <input
          class="p-1 border rounded"
          type="number"
          placeholder="Max"
          v-model="priceRange.max" />
        <button
          class="w-full p-1 mt-2 text-white bg-blue-400 rounded"
          @click="onChangePrice">
          Apply
        </button>
      </div>
    </div>
    <!-- PRICE END -->
  </div>
  <!-- CAR SIDE BAR -->
</template>

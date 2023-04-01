<script setup>
const route = useRoute();
const message = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const errorMessage = ref('');
const successMessage = ref('');

const disableButton = computed(() => {
  for (let key in message.value) {
    if (!message.value[key]) return true;
  }
  return false;
});

const onSubmit = async () => {
  try {
    const response = await $fetch(
      `/api/car/listings/${route.params.id}/message`,
      {
        method: 'post',
        body: message.value,
      },
    );

    message.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    errorMessage.value = '';
    successMessage.value = 'Message sent!';
  } catch (error) {
    successMessage.value = '';
    errorMessage.value = error.statusMessage;
  }
};
</script>

<template>
  <!-- CAR CONTACT -->
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input
        v-model="message.name"
        type="text"
        class="p-1 border"
        placeholder="Name" />
      <input
        v-model="message.email"
        type="text"
        class="p-1 border"
        placeholder="Email" />
      <input
        v-model="message.phone"
        type="text"
        class="p-1 border"
        placeholder="Phone" />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea
        v-model="message.message"
        class="w-full p-1 border"
        placeholder="Message"></textarea>
    </div>
    <button
      class="px-10 py-3 mt-4 text-white bg-blue-400 rounded"
      :disabled="disableButton"
      @click="onSubmit">
      Submit
    </button>
    <p v-if="errorMessage" class="mt-3 text-red-400">
      {{ errorMessage }}
    </p>
    <p v-if="successMessage" class="mt-3 text-green-400">
      {{ successMessage }}
    </p>
  </div>
  <!-- CAR CONTACT -->
</template>

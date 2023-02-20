<script setup>
const image = useState(
  'carImage',
  () => {
    return {
      preview: null,
      image: null,
    };
  },
);

const emits = defineEmits([
  'changeInput',
]);

const onImageUpload = (event) => {
  const inputElement = event.target;
  if (inputElement.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview =
        e.target.result;
    };
    image.value.image =
      inputElement.files[0];
    reader.readAsDataURL(
      inputElement.files[0],
    );

    emits(
      'changeInput',
      inputElement.files[0],
      'image',
    );
  }
};
</script>

<template>
  <div
    class="col-md-5 offset-md-1 mt-2 w-[100%]">
    <label
      class="text-cyan-500 mb-1 text-sm"
      for="">
      Image
    </label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input
            class="opacity-0 abolute cursor-pointer left-0 right-0 z-10 h-[100%]"
            type="file"
            accept="image/*"
            @change="onImageUpload" />
          <span
            class="absolute left-0 z-0 pointer-events-none">
            Browse File
          </span>
        </div>
        <div
          class="border p-2 mt-3 w-56"
          v-if="image.preview">
          <img
            class="img-fluid"
            :src="image.preview"
            alt="" />
        </div>
      </div>
    </form>
  </div>
</template>

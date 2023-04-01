<script setup>
const image = useState('carImage', () => {
  return {
    preview: null,
    image: null,
  };
});

const emits = defineEmits(['changeInput']);

const reset = () =>
  (image.value = { preview: null, image: null });

defineExpose({
  reset,
});

const onImageUpload = (event) => {
  const inputElement = event.target;
  if (inputElement.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview = e.target.result;
    };
    image.value.image = inputElement.files[0];
    reader.readAsDataURL(inputElement.files[0]);

    emits('changeInput', inputElement.files[0], 'image');
  }
};
</script>

<template>
  <div class="col-md-5 offset-md-1 mt-2 w-[100%]">
    <label class="mb-1 text-sm text-cyan-500" for="">
      Image
    </label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input
            class="opacity-0 abolute left-0 right-0 z-10 h-[100%]"
            type="file"
            accept="image/*"
            id="file-upload"
            @change="onImageUpload" />
          <label
            for="file-upload"
            class="absolute cursor-pointer left-1">
            Browse File
          </label>
        </div>
        <div
          class="w-56 p-2 mt-3 border"
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

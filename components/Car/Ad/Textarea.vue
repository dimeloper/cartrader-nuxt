<script setup>
const props = defineProps({
  title: String,
  name: String,
  placeholder: String,
});

const emits = defineEmits([
  'changeInput',
]);
const inputValue = ref('');

const onChange = () => {
  emits(
    'changeInput',
    inputValue.value,
    props.name,
  );
};
</script>

<template>
  <div
    class="flex flex-col w-[100%] mt-2">
    <label
      class="text-cyan-500 mb-1 text-sm"
      for="">
      {{ title }}
    </label>
    <textarea
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      :name="name"
      v-model="inputValue"
      @input="onChange"></textarea>
  </div>
</template>

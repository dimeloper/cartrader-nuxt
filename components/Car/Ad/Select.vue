<script setup>
const props = defineProps({
  title: String,
  options: Array,
  name: String,
});

const emits = defineEmits([
  'changeInput',
]);
const selectedOption = ref('');

const onChange = () => {
  emits(
    'changeInput',
    selectedOption.value,
    props.name,
  );
};
</script>

<template>
  <div
    class="flex flex-col w-[48%] mt-2">
    <label
      class="text-cyan-500 mb-1 text-sm"
      for="">
      {{ title }}
    </label>
    <select
      :name="props.name"
      id=""
      class="p-2 border w-100 rounded"
      @change="onChange"
      v-model="selectedOption">
      <option
        v-for="option in options"
        :key="option.id"
        :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<template>
  <input
    class="input"
    :value="value"
    :type="type"
    @blur="$emit('value', $event.target.value)"
    @change="$emit('value', $event.target.value)"
    :placeholder="`${placeholder}`"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
  props: {
    placeholder: String,
    type: String,
    value: String,
  },
});
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 8px 20px;
  min-height: 50px;

  border-radius: var(--border-radius);
  border: var(--border);
  background-color: var(--body-lighter);

  &:focus {
    outline: none;
  }
}
</style>

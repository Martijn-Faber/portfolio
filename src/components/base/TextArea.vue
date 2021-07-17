<template>
  <textarea
    class="textarea"
    :maxlength="max"
    @blur="$emit('value', $event.target.value)"
    @change="$emit('value', $event.target.value)"
    :placeholder="`${placeholder}`"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextArea",
  props: {
    placeholder: {
      type: String,
    },
    max: {
      type: Number,
    },
  },
});
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  padding: 8px 20px;
  min-height: 250px;

  border-radius: var(--border-radius);
  border: var(--border);
  background-color: var(--body-lighter);

  &:focus {
    outline: none;
  }
}
</style>

<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tag {
  width: max-content;
  padding: 8px 15px;
  text-align: center;
  background-color: var(--body-lighter);

  border-radius: var(--border-radius);
  border: var(--border);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tag",
});
</script>

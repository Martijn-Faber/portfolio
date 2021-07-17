<template>
  <section class="page">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Page",
});
</script>

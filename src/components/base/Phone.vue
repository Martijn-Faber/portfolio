<template>
  <div class="frame">
    <div class="view" :style="{ backgroundImage: `url(${view})` }"></div>
  </div>
</template>

<style lang="scss" scoped>
.frame {
  background-color: var(--body-lighter);
  width: 100%;
  aspect-ratio: 6/13;

  border: var(--border);
  border-radius: var(--border-radius);
  overflow-x: hidden;
  z-index: 1;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  .view {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Phone",
  props: {
    view: {
      type: String,
    },
  },
});
</script>

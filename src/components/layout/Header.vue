<template>
  <header>
    <div class="logo">
      <h1>Martijn</h1>
      <h1>Faber</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 5;

  .logo {
    > h1 {
      text-shadow: 0px 0px 20px rgb(9, 12, 16, 0.5);
      margin-bottom: -0.5em;
    }
  }

  @media only screen and (max-width: 600px) {
    .logo {
      display: none;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<template>
  <footer>
    <div class="socials">
      <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.link"
        target="blank"
      >
        <img :src="`/socials/${social.name}.svg`" :alt="social.name" />
      </a>
    </div>
    <p class="copyright">&copy;{{ currYear }} Martijn Faber</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  text-align: center;
  padding: var(--gap);
  margin-top: var(--gap);

  display: grid;
  place-items: center;

  .socials {
    display: flex;
    gap: var(--gap);
    margin-bottom: var(--gap);
  }

  .copyright {
    font-size: 14px;
    color: var(--text-grey);
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      socials: [],
      currYear: 0,
    };
  },
  async mounted() {
    this.currYear = new Date().getFullYear();
    const response = await fetch(`/socials.json`);
    const socials = await response.json();
    this.socials = socials.data;
  },
});
</script>

<template>
  <Page>
    <div class="center">
      <h1
        :class="{ scroll: scrollPosition > 250 ? true : false }"
        class="intro"
      >
        Hey, I'm a Web developer and designer
      </h1>
      <div
        class="buttons"
        :class="{ scroll: scrollPosition > 250 ? true : false }"
      >
        <Button @click="scrollTo('projects')">Projects</Button>
        <Button @click="scrollTo('contact')">Contact</Button>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.page {
  display: grid;
  place-items: center;
}

.center {
  display: grid;
  place-items: center;
}

.intro {
  font-size: clamp(50px, 8vw, 150px);
  font-weight: 800;
  text-align: center;
  transition: all 0.8s;
}

.buttons {
  width: 50%;
  margin-top: var(--gap);
  display: flex;
  gap: var(--gap);
  transition: all 0.8s;
}

.scroll {
  opacity: 0;
  letter-spacing: 15px;
  transform: translateY(-75px);
}

@media only screen and (max-width: 600px) {
  .scroll {
    letter-spacing: 5px;
  }

  .buttons {
    width: 100%;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/layout/Page.vue";
import Button from "@/components/base/Button.vue";

export default defineComponent({
  name: "Intro",
  components: {
    Page,
    Button,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    scrollTo(id: string) {
      document.getElementById(id)?.scrollIntoView(true);
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollPosition = window.scrollY;
    });
  },
});
</script>

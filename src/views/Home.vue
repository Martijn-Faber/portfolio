<template>
  <Container>
    <Header />
    <Intro />
    <div class="projects">
      <Project
        id="projects"
        v-for="(project, index) in projects"
        :key="index"
        :index="index"
        :name="project.name"
        :description="project.description"
        :images="project.images"
        :github="project.github"
        :tags="project.tags"
      />
    </div>
    <Contact id="contact" class="contact" />
    <Footer />
  </Container>
</template>

<style lang="scss" scoped>
.contact {
  margin-top: var(--gap-large);
}

.projects {
  display: flex;
  flex-direction: column;
  gap: var(--gap-larger);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

import Container from "@/components/layout/Container.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Intro from "@/components/base/Intro.vue";
import Project from "@/components/base/Project.vue";
import Contact from "@/components/base/Contact.vue";

export default defineComponent({
  name: "Home",
  components: {
    Container,
    Header,
    Footer,
    Intro,
    Project,
    Contact,
  },
  data() {
    return {
      projects: [],
    };
  },
  async mounted() {
    const response = await fetch(`/projects.json`);
    const projects = await response.json();
    this.projects = projects.data;
  },
});
</script>

<template>
  <Page>
    <ColumnLayout>
      <Column class="column" :class="{ reverse: !(index % 2 == 0) }">
        <div class="images" v-if="images.length > 1">
          <div v-for="(image, index) in images" :key="index" class="phone">
            <Phone :view="image" />
          </div>
        </div>
        <div v-else class="image">
          <img :src="images[0]" />
        </div>
      </Column>
      <Column class="column">
        <div class="info">
          <h1>{{ name }}</h1>
          <div class="tags">
            <div class="tags-scroll">
              <Tag v-for="(tag, index) in tags" :key="index">{{ tag }}</Tag>
            </div>
            <div class="tags-gradient"></div>
          </div>
          <p v-html="description"></p>
          <div class="buttons">
            <a v-if="url" :href="url" class="button-link" type="blank">
              <Button>Website</Button>
            </a>
            <a v-if="github" :href="github" class="button-link" type="blank">
              <Button>Github</Button>
            </a>
          </div>
        </div>
      </Column>
    </ColumnLayout>
  </Page>
</template>

<style lang="scss" scoped>
.column {
  width: 50%;
  height: 100vh;
  overflow: hidden;
}

.reverse {
  order: 1;
}

.info {
  margin-top: 40%;
}

.images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--gap-large);

  .phone {
    width: 100%;
    transition: transform 0.5s;
  }
}

.image {
  height: 100%;
  display: grid;
  place-items: center;

  > img {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .phone {
    &:nth-child(odd) {
      transform: translateY(v-bind(scrollEven));
    }

    &:nth-child(even) {
      transform: translateY(v-bind(scrollOdd));
    }
  }
}

@media only screen and (max-width: 600px) {
  .images {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

.tags {
  position: relative;

  .tags-scroll {
    touch-action: pan-y;
    overflow-x: auto;
    cursor: grab;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: flex;
    gap: var(--gap);
    margin: var(--gap) 0;
  }

  .tags-gradient {
    position: absolute;
    top: 0;
    right: 0;

    z-index: 2;
    width: 75px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(9, 12, 16, 0) 0%,
      rgba(9, 12, 16, 1) 100%
    );
  }
}

.buttons {
  margin-top: var(--gap);
  display: flex;
  gap: var(--gap);

  .button-link {
    width: 100%;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/layout/Page.vue";
import ColumnLayout from "@/components/layout/ColumnLayout.vue";
import Column from "@/components/layout/Column.vue";
import Phone from "@/components/base/Phone.vue";
import Button from "@/components/base/Button.vue";
import Tag from "@/components/base/Tag.vue";

export default defineComponent({
  name: "Project",
  components: {
    Page,
    ColumnLayout,
    Column,
    Phone,
    Button,
    Tag,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
    },
    url: {
      type: String,
    },
    github: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
  data() {
    return {
      scrollPosition: 0,
      viewportHeight: 0,
    };
  },
  computed: {
    scrollEven(): string {
      return `-${
        this.viewportHeight * (this.index + 1) - (this.scrollPosition - 75)
      }px`;
    },
    scrollOdd(): string {
      return `${
        this.viewportHeight * (this.index + 1) - (this.scrollPosition - 50)
      }px`;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollPosition = window.scrollY;
    });
    this.viewportHeight = window.innerHeight;
  },
});
</script>

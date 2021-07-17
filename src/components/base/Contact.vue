<template>
  <div class="form">
    <h1 class="title">interested?</h1>
    <div class="inputs">
      <Input
        type="text"
        :value="name"
        @value="name = $event"
        placeholder="Enter your name..."
      ></Input>
      <Input
        type="email"
        :value="email"
        @value="email = $event"
        placeholder="Enter your email..."
      ></Input>
    </div>
    <TextArea
      :max="1000"
      placeholder="What do you want to say?"
      @value="message = $event"
      class="textarea"
    ></TextArea>
    <Button @mouseup="submit">Send</Button>
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 60%;
  margin: 0 auto;

  .title {
    margin-bottom: var(--gap);
  }

  .inputs {
    display: flex;
    gap: var(--gap);
    margin-bottom: var(--gap);
  }

  .textarea {
    margin-bottom: var(--gap);
  }
}

@media only screen and (max-width: 600px) {
  .form {
    width: 100%;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "@/components/base/Input.vue";
import TextArea from "@/components/base/TextArea.vue";
import Button from "@/components/base/Button.vue";

export default defineComponent({
  name: "Contact",
  components: {
    Input,
    TextArea,
    Button,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submit() {
      localStorage.setItem(
        "contact",
        JSON.stringify({
          name: this.name,
          email: this.email,
        }),
      );

      location.href = `mailto:martijn@fabtronics.nl?cc=${this.email}&subject=I'm interested!&body=${this.message}`;
    },
  },
  mounted() {
    const contact = JSON.parse(localStorage.getItem("contact") || "");

    if (contact) {
      this.name = contact.name;
      this.email = contact.email;
    }
  },
});
</script>

<template>
  {{ message }}
  <p>{{ title }}</p>
  <p>{{ contents }}</p>
  <p>{{ greetingMessage }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    contents: {
      type: String,
      required: true,
    },
    greetingMessage: String,
  },
  created() {},
  data() {
    return { message: "ChildComponent.vue", post: { id: 1, title: "Vue" } };
  },
};
</script>

<style scoped></style>

<template>
  <h1>직원목록</h1>
  <h2>{{ message }}</h2>
  <Buttons />
  <List />
</template>

<script>
import List from "../components/List.vue";
import Buttons from "../components/Buttons.vue";

export default {
  components: {
    List,
    Buttons,
  },
  data() {
    return {
      message: "List.vue와 Buttons.vue의 부모 컴포넌트 (props)",
    };
  },
};
</script>

<style scoped></style>

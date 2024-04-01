<template>
  <h1>직원목록2</h1>
  <h2>{{ message }}</h2>
  <h3>{{ message2 }}</h3>
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
      message: "화면이 바뀌었습니다.",
      message2: "List.vue와 Buttons.vue의 부모 컴포넌트 (props)",
    };
  },
};
</script>

<style lang="scss" scoped></style>

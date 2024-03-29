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
      message2: "여기는 Views 폴더 아래에 있는 EmployeeList2.vue 파일입니다.",
    };
  },
};
</script>

<style lang="scss" scoped></style>

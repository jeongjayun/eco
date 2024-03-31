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
      message: "여기는 Views 폴더 아래에 있는 EmployeeList.vue 파일입니다.",
    };
  },
};
</script>

<style scoped></style>

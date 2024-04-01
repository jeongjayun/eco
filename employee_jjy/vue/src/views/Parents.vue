<template>
  <h1>{{ message }}</h1>
  <ChildComponent
    title="Vue와 함께한 나의 여행"
    contents="내용"
    greeting-message="안녕하세용"
  ></ChildComponent>
</template>

<script>
import ChildComponent from "../components/ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      message: "Props는 부모 컴포넌트에서 값을 수정 => 자식 컴포넌트 반영됨",
    };
  },
};
</script>

<style scoped></style>

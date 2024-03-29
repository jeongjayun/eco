<template>
  <div>
    {{ message }}
    <button @click="btnNew">신규</button>
    <button @click="btnSave">저장</button>
    <button @click="btnDelete">삭제</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "여기는 components 폴더 아래에 있는 button.vue 파일 입니다.",
    };
  },
  methods: {
    btnNew() {
      alert("신규버튼 클릭");
    },
    btnSave() {
      alert("저장버튼 클릭");
    },
    btnDelete() {
      alert("삭제버튼 클릭");
    },
  },
};
</script>

<style scoped>
div {
  float: right;
}
</style>

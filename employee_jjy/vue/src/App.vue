<template>
  <div id="app">
    {{ message }}

    <router-link to="/"><button>직원목록 1</button></router-link>
    <router-link to="/list2"><button>직원목록 2</button></router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "여기는 App.vue 페이지 입니다. 아래는 router-view로 URL 마다 변하는 화면입니다.",
    };
  },
};
</script>

<style lang="scss" scoped></style>

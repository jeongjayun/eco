<template>
  <div id="app" class="container-fluid">
    {{ message }}

    <div class="btn-group">
      <router-link to="/">
        <button class="btn btn-dark">직원목록 1</button>
      </router-link>
      <router-link to="/list2">
        <button class="btn btn-dark">직원목록 2</button>
      </router-link>
    </div>

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

<style scoped></style>

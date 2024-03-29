import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import axios from "axios";

// 생성한 뷰 라우터 받아오기
import { router } from "./router/index.js";

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router); // 라우터 사용
app.mount("#app");

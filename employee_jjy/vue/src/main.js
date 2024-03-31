import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//axios
import axios from "axios";

// 생성한 뷰 라우터 받아오기
import { router } from "./router/index.js";

// createApp(App).mount('#app')
const app = createApp(App);
app.use(axios); // axios 사용
app.use(router); // 라우터 사용
app.mount("#app");

app.config.globalProperties.axios = axios; // axios 전역 설정

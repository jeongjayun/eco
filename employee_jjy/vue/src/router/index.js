import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/", // [경로]
    name: "EmployeeList", // [이름]
    component: () => import("../views/EmployeeList.vue"), // [로드 파일]
  },
  {
    path: "/list2", // [경로]
    name: "EmployeeList2", // [이름]
    component: () => import("../views/EmployeeList2.vue"), // [로드 파일]
  },
  {
    path: "/parents",
    name: "Parents",
    component: () => import("../views/Parents.vue"),
  },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };

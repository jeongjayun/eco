<template>
  <div>
    <button class="btn btn-dark" @click="addRow">신규</button>
    <button class="btn btn-dark" @click="btnSave">저장</button>
    <button class="btn btn-dark" @click="btnDelete">삭제</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addRow() {
      alert("새로운 직원을 추가합니다.");
      this.employees.push({
        employee_no: "",
        employee_nm: "",
        hp_no: "",
        email: "",
        entr_dt: "",
        retr_dt: "",
        wrk_typ_cd: "",
        pstn_nm: "",
        rank_nm: "",
        reg_id: "",
        reg_dtm: "",
        mod_id: "",
        mod_dtm: "",
      });
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

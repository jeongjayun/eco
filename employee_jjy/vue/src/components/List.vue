<template>
  <div>{{ message }}</div>

  <table class="table table-striped table-hover table-bordered">
    <thead style="text-align: center">
      <th>직원번호</th>
      <th>이름</th>
      <th>휴대폰 번호</th>
      <th>이메일</th>
      <th>입사일자</th>
      <th>퇴사일자</th>
      <th>근무형태</th>
      <th>직책</th>
      <th>직급</th>
      <th>등록자</th>
      <th>등록일시</th>
      <th>수정자</th>
      <th>수정일시</th>
    </thead>
    <tbody>
      <tr v-for="employee in employees" :key="employee.employee_no">
        <td><span v-html="employee.employee_no"></span></td>
        <td><span v-html="employee.employee_nm"></span></td>
        <td><span v-html="employee.hp_no"></span></td>
        <td><span v-html="employee.email"></span></td>
        <td><span v-html="employee.entr_dt"></span></td>
        <td><span v-html="employee.retr_dt"></span></td>
        <td><span v-html="employee.wrk_typ_cd"></span></td>
        <td><span v-html="employee.pstn_nm"></span></td>
        <td><span v-html="employee.rank_nm"></span></td>
        <td><span v-html="employee.reg_id"></span></td>
        <td><span v-html="employee.reg_dtm"></span></td>
        <td><span v-html="employee.mod_id"></span></td>
        <td><span v-html="employee.mod_dtm"></span></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      message: "List.vue (emit)",
      employees: [],
    };
  },
  created() {
    this.axios
      .post("/api/list")
      .then((response) => (this.employees = response.data))
      .catch((error) => {
        alert("목록을 가져오지 못했습니다.");
        console.log(error);
      });
  },
};
</script>

<style scoped></style>

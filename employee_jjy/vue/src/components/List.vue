<template>
  <div>{{ message }}</div>

  <table>
    <thead>
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
      message: "여기는 components 폴더 아래에 있는 List.vue 파일 입니다.",
      employees: [
        {
          employee_no: "E20249999",
          employee_nm: "sample",
          hp_no: "010-9999-8888",
          email: "test@eco.co.kr",
          entr_dt: "2024-03-29",
          retr_dt: "미정",
          wrk_typ_cd: "01",
          pstn_nm: "직책",
          rank_nm: "직급",
          reg_id: "E20240000",
          reg_dtm: "2024-03-29",
          mod_id: "E20240000",
          mod_dtm: "2024-03-29",
        },
      ],
    };
  },
};
</script>

<style scoped>
table {
  border: 1px solid black;
}
</style>

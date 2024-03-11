$(document).ready(function () {
  //신규 : 새로운 Row 생성
  //TODO : 테스트로 직원번호, 이름까지만 data 생성, 결과 확인 후 나머지 값 추가하기
  $("#btnAddRow").click(function () {
    let rowId = $("#employeeList").getGridParam("reccount");
    console.log("rowId : " + rowId);

    let data = {
      employee_no: "",
      employee_nm: "",
    };

    console.log("data : " + data);

    $("#employeeList").jqGrid("addRowData", rowId, data, "first");
  });

  //삭제
  //TODO : 데이터가 삭제되는 것이 아니라 del_yn 에서 값 변경되도록 해야함.
  //TODO : 그리드에서 행만 삭제되지 db까지 연결된 것 아님
  $("#btnDeleteRow").click(function () {
    let selectedRowId = $("#employeeList").getGridParam("selrow");
    if (selectedRowId) {
      console.log("selectedRowId : " + selectedRowId);
      $("#employeeList").delRowData(selectedRowId);
    } else {
      alert("삭제할 열을 선택해주세요.");
    }
  });

  //저장
  $("#btnSaveRow").click(function () {
    $("#employeeList").jqGrid("editCell", 0, 0, false);

    let params = $("#employeeList").getChangedCells("all");
    console.log("params : ", params);

    $.ajax({
      type: "POST",
      url: "/saveEmployee",
      data: JSON.stringify(params),
      datatype: "text",
      contentType: "application/json",
      success: function (data) {
        alert("성공 : " + data);
        console.log("성공 param: " + param);
      },
      error: function (xhr, status, error) {
        alert("실패 : " + xhr, status, error);
        console.log("실패 param : " + param);
        console.log(xhr, status, error);
      },
    });
  });

  //jqGrid
  $("#employeeList").jqGrid({
    datatype: "json",
    url: "/getList",
    mtype: "POST",
    loadonce: true,
    postData: {},
    caption: "직원 목록",
    colNames: [
      "직원번호",
      "이름",
      "휴대폰번호",
      "이메일",
      "입사일자",
      "퇴사일자",
      "근무형태코드",
      "직책",
      "직급",
      "등록자",
      "등록일시",
      "수정자",
      "수정일시",
    ],
    colModel: [
      {
        name: "employee_no",
        index: "employee_no",
        align: "center",
        editable: true,
      },
      {
        name: "employee_nm",
        index: "employee_nm",
        align: "center",
        editable: true,
      },
      {
        name: "hp_no",
        index: "hp_no",
        align: "center",
      },
      {
        name: "email",
        index: "email",
        align: "center",
      },
      {
        name: "entr_dt",
        index: "entr_dt",
        align: "center",
        editable: true,
      },
      {
        name: "retr_dt",
        index: "retr_dt",
        align: "center",
      },
      {
        name: "wrk_typ_cd",
        index: "wrk_typ_cd",
        align: "center",
        edittype: "select",
      },
      {
        name: "pstn_nm",
        index: "pstn_nm",
        align: "center",
      },
      {
        name: "rank_nm",
        index: "rank_nm",
        align: "center",
        editable: true,
      },
      {
        name: "reg_id",
        index: "reg_id",
        align: "center",
        editable: true,
      },
      {
        name: "reg_dtm",
        index: "reg_dtm",
        align: "center",
        editable: true,
      },
      {
        name: "mod_id",
        index: "mod_id",
        align: "center",
        editable: true,
      },
      {
        name: "mod_dtm",
        index: "mod_dtm",
        align: "center",
        editable: true,
      },
    ],
    rownumbers: true,
    rowNum: 10,
    rowList: [10, 20, 30],
    multiselect: false,

    pager: "#employeePager",
    pgbuttons: true,

    gridview: true,
    viewrecords: true,

    autowidth: true,
    shrinkToFit: true,
    scroll: false,
    autoheight: true,

    cellEdit: true,
    cellsubmit: "clientArray",
    cellurl: "",
  });
});

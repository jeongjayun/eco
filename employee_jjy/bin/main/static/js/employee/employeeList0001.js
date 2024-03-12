$(document).ready(function () {
  //신규 : 새로운 Row 생성
  $("#btnAddRow").click(function () {
    let rowId = $("#employeeList").getGridParam("reccount");
    console.log("rowId : " + rowId);

    let data = {
      employee_no: "",
      employee_nm: "",
      hp_no: "",
      email: "",
      entr_dt: "",
      retr_dt: "",
      wrk_typ_cd: "",
      base_adr: "",
      dtl_adr: "",
      zip_np: "",
      birth_dt: "",
      pstn_nm: "",
      rank_nm: "",
      del_yn: "",
      reg_id: "",
      reg_dtm: "",
      mod_id: "",
      mod_dtm: "",
    };

    $("#employeeList").jqGrid("addRowData", rowId + 1, data, "last");
  });

  //삭제
  //TODO : 데이터가 삭제되는 것이 아니라 del_yn 에서 값 변경되도록 해야함.
  //TODO : 그리드에서 행만 삭제되지 db까지 연결된 것 아님
  $("#btnDeleteRow").click(function () {
    let selectedRowId = $("#employeeList").getGridParam("selrow");
    let getColumnValue = $("#employeeList").getCell(
      selectedRowId,
      "employee_no"
    );

    if (selectedRowId) {
      console.log("selectedRowId : " + selectedRowId);
      console.log("selectedGridParam : " + selectedGridParam);

      $.ajax({
        type: "POST",
        url: "/deleteEmployee",
        data: selectedRowId,
        contentType: "application/json",
        success: function (data) {
          alert("성공 : " + data);
          console.log(data);
        },
        error: function (xhr, status, error) {
          alert("실패 : " + xhr, status, error);
          console.log("실패 param : " + params);
          console.log(xhr, status, error);
        },
      });

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
        console.log("성공 param: " + params);
        $("#employeeList").trigger("reloadGrid");
        alert("성공한 데이터 : " + data + "개. \n새로고침 완료!");
      },
      error: function (xhr, status, error) {
        alert("실패 : " + xhr, status, error);
        console.log("실패 param : " + params);
        console.log(xhr, status, error);
      },
    });
  });

  //jqGrid
  $("#employeeList").jqGrid({
    datatype: "json",
    url: "/getListNotAdmin",
    mtype: "POST",
    loadonce: false,
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
        editable: true,
      },
      {
        name: "email",
        index: "email",
        align: "center",
        editable: true,
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
        editable: true,
      },
      {
        name: "pstn_nm",
        index: "pstn_nm",
        align: "center",
        editable: true,
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
      },
    ],
    rownumbers: true,
    rowNum: 10,
    rowList: [10, 20, 30],
    multiselect: true,

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

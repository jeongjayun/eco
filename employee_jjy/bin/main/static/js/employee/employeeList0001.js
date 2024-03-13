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

  //TODO : 삭제버튼 누를 때 confirm 받을 수 있도록 개선.

  //삭제
  $("#btnDeleteRow").click(function () {
    let selectedRowId = $("#employeeList").getGridParam("selrow");
    let employee_no = $("#employeeList").getCell(selectedRowId, "employee_no");

    if (selectedRowId) {
      console.log("selectedRowId : " + selectedRowId);
      console.log("selectedRowId의 employee_no : " + employee_no);

      $.ajax({
        type: "POST",
        url: "/deleteEmployee/" + employee_no,
        data: employee_no,
        datatype: "text",
        success: function (data) {
          alert(
            employee_no + "번의 사원을 삭제하였습니다.\n삭제한 데이터 : " + data
          );
          console.log(data);
          $("#employeeList").delRowData(selectedRowId);
        },
        error: function (xhr, status, error) {
          alert("실패 : " + xhr, status, error);
          console.log("실패 : " + employee_no);
          console.log(xhr, status, error);
        },
      });
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
        editoptions: {
          dataInit: function (e) {
            $(e).datepicker({
              dateFormat: "yy-mm-dd",
              changeYear: true,
              changeMonth: true,
            });
            $(e).datepicker("setDate", "today");
          },
        },
      },
      {
        name: "retr_dt",
        index: "retr_dt",
        align: "center",
        editable: true,
        editoptions: {
          dataInit: function (e) {
            $(e).datepicker({
              dateFormat: "yy-mm-dd",
              changeYear: true,
              changeMonth: true,
            });
            $(e).datepicker("setDate", "today");
          },
        },
      },
      {
        name: "wrk_typ_cd",
        index: "wrk_typ_cd",
        align: "center",
        editable: true,
        edittype: "select",
        formatter: "select",
        editoptions: {
          value: { "00": "선택", "01": "출근", "02": "외근", "03": "파견" },
        },
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
        edittype: "select",
        formatter: "select",
        editoptions: {
          value: {
            전체: "선택",
            인턴: "인턴",
            사원: "사원",
            주임: "주임",
            대리: "대리",
          },
        },
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
    multiselect: false,

    pager: "#employeePager",
    pgbuttons: true,

    gridview: true,
    viewrecords: true,

    autowidth: true,
    autoheight: true,
    shrinkToFit: true,
    scroll: false,

    cellEdit: true,
    cellsubmit: "clientArray",
    cellurl: "",
  });
});

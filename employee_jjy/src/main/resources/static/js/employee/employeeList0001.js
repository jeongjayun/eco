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
  $("#btnDeleteRow").click(function () {
    let selectedRowId = $("#employeeList").getGridParam("selrow");
    let employee_no = $("#employeeList").getCell(selectedRowId, "employee_no");

    if (!selectedRowId) {
      console.log(selectedRowId);
      alert("삭제할 열을 선택해주세요.");
    } else if (selectedRowId != null) {
      let returnValue = confirm(employee_no + "번 직원을 삭제하시겠습니까?");
      if (returnValue) {
        console.log("selectedRowId : " + selectedRowId);
        console.log("selectedRowId의 employee_no : " + employee_no);

        $.ajax({
          type: "POST",
          url: "/deleteEmployee/" + employee_no,
          data: employee_no,
          datatype: "text",
          success: function (data) {
            alert(employee_no + "번의 사원을 삭제하였습니다.");
            $("#employeeList").delRowData(selectedRowId);
          },
          error: function (xhr, status, error) {
            alert("삭제 실패하였습니다." + error);
            console.log("실패 : " + employee_no);
            console.log(xhr, status, error);
          },
        });
      }
    }
  });

  //저장
  $("#btnSaveRow").click(function () {
    //저장 버튼을 눌렀을 때 유효성 검사
    let selectedRowId = $("#employeeList").getGridParam("selrow");

    //체크대상 변수 선언
    let employee_nm = $("#employeeList").getCell(selectedRowId, "employee_nm");
    let hp_no = $("#employeeList").getCell(selectedRowId, "hp_no");
    let email = $("#employeeList").getCell(selectedRowId, "email");
    let entr_dt = $("#employeeList").getCell(selectedRowId, "entr_dt");
    let retr_dt = $("#employeeList").getCell(selectedRowId, "retr_dt");
    let wrk_typ_cd = $("#employeeList").getCell(selectedRowId, "wrk_typ_cd");
    let pstn_nm = $("#employeeList").getCell(selectedRowId, "pstn_nm");
    let rank_nm = $("#employeeList").getCell(selectedRowId, "rank_nm");
    let reg_id = $("#employeeList").getCell(selectedRowId, "reg_id");
    let mod_id = $("#employeeList").getCell(selectedRowId, "mod_id");

    // 1. 이름을 입력하지 않았을 때
    if (employee_nm !== "") {
      if (employee_nm > 0) {
        for (let i = 0; i < employee_nm.length; i++) {
          char_employee_nm = employee_nm.charCodeAt(i);

          if (char_employee_nm > 44031 && char_employee_nm < 55203) {
            return true;
          } else {
            alert("한글만 입력해주세요.");
            return false;
          }
        }
      }
    } else {
      alert("이름이 비어있습니다. 이름을 입력해주세요.");
      return false;
    }

    // 2. 휴대폰 번호 11자리 초과 시
    if (hp_no.length > 11) {
      console.log("hp_no : " + hp_no);
      alert(
        "입력 가능한 휴대폰 번호 수를 초과하였습니다. \n입력 확인해주세요."
      );
      return false;
    }

    //유효성 검사에 성공하면 아래 로직 실행
    $("#employeeList").jqGrid("editCell", 0, 0, false); //편집 중인 cell 모두 닫기
    let params = $("#employeeList").getChangedCells("all");

    $.ajax({
      type: "POST",
      url: "/saveEmployee",
      data: JSON.stringify(params),
      datatype: "text",
      contentType: "application/json",
      success: function (data) {
        console.log("성공 param: " + params);
        $("#employeeList").trigger("reloadGrid");
        alert("저장에 성공하였습니다.");
      },
      error: function (xhr, status, error) {
        alert("저장에 실패하였습니다. ", error);
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
    sortable: true,
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
              inputtype: "text",
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
              inputtype: "text",
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
          value: {
            "00": "선택",
            "01": "출근",
            "02": "외근",
            "03": "파견",
            "04": "휴가",
            "05": "퇴사",
          },
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
    rowNum: 100,
    rowList: [100, 200, 300],
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

    afterEditCell: function (rowId, cellName, value, indexRow, indexCol) {},
  });
});

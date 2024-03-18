$(document).ready(function () {
  /*   //조회
  $("#btnSearch").click(function () {
    $("#employeeList").jqGrid("clearGridData");
    var searchData = {
      employee_no: "",
      employee_nm: "",
      hp_no: "",
    };

    $.ajax({
      type: "POST",
      url: "/getListByAdmin",
      dataType: "JSON",
      contentType: "application/json",
      success: function (resultData) {
        alert("성공");
        console.log("성공한 경우 data : ", resultData);

        let rowId = $("#employeeList").getGridParam("recount");
        $("#employeeList").jqGrid("addRowData", rowId + 1, resultData, "first"); // 첫행에 Row 추가
      },
      error: function (xhr, status, error) {
        alert("실패");
        console.log("실패한 경우 data : ", searchData);
        console.log(xhr, status, error);
      },
    });
  }); */

  //검색
  //TODO : 쿼리짜야됨
  $("#btnSearch").on("click", function () {
    let data = $("#searchData").val();
    let searchType = $("#searchType").val();
    let rows = $("[title='Records per Page']").val();
    var postData = { data: data, searchType: searchType, rows: rows };

    rowData = null;

    $("#employeeList").jqGrid("clearGridData", true);

    $("#employeeList")
      .setGridParam({
        datatype: "json",
        postData: postData,
        loadComplete: function (data) {
          console.log(data);
        },
      })
      .trigger("reloadGrid");
  });

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

    if (!selectedRowId) {
      alert(
        "저장할 열이 없습니다. 신규버튼을 클릭하여 내용 작성 후 다시 시도해주세요."
      );
      return false;
    }

    // TODO : 스크립트 작성 후 모듈화 해보기 (-)

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

    // 1. 이름
    if (employee_nm !== "") {
      if (employee_nm.length > 0) {
        for (let i = 0; i < employee_nm.length; i++) {
          charCodeEmployeeNm = employee_nm.charCodeAt(i); //charCodeAt : UTF-16 코드를 나타내는 0부터 65535 사이의 정수

          if (
            (charCodeEmployeeNm >= 65 && charCodeEmployeeNm <= 122) ||
            charCodeEmployeeNm == 32
          ) {
            //영어 : 대문자 ~ 소문자 + 공백허용
            // 1-1 영문 이름
            if (employee_nm.length > 9) {
              alert("저장 가능한 글자 수를 초과하였습니다.");
              return false;
            }
          } else if (charCodeEmployeeNm > 44031 && charCodeEmployeeNm < 55203) {
            //한글
            // 1-2 한글이름
            if (employee_nm.length > 9) {
              alert("저장 가능한 글자 수를 초과하였습니다.");
              return false;
            }
          } else {
            // 그 외에 특수문자
            alert("이름에는 영문 또는 한글만 입력 가능합니다.");
            return false;
          }
        }
      }
    } else {
      alert("이름이 비어있습니다. 이름을 입력해주세요.");
      return false;
    }

    // 2. 휴대폰 번호 (필수 값 아님)
    if (hp_no !== "") {
      if (hp_no.length > 0 && hp_no.length <= 11) {
        for (i = 0; i < hp_no.length; i++) {
          charCodeHpNo = hp_no.charCodeAt(i);
          if (!(charCodeHpNo >= 48 && charCodeHpNo <= 57)) {
            alert("숫자만 입력 가능합니다.\n입력 예시 : 01012345678");
            return false;
          }
        }
      } else {
        //11자리 초과 시
        alert(
          "입력 가능한 휴대폰 번호 수를 초과하였습니다.\n입력 확인해주세요."
        );
        return false;
      }
    }

    // 이메일 검증 : 영문과 숫자, 특수문자 @과 . 만 입력받기
    if (email !== "") {
      for (i = 0; i < email.length; i++) {
        charCodeEmail = email.charCodeAt(i);
        if (
          !(charCodeEmail >= 48 && charCodeEmail <= 57) && //숫자가 아니고
          !(charCodeEmail >= 65 && charCodeEmail <= 122) && //영어도 아니고
          !(charCodeEmail == 64) && // @도 아니고
          !(charCodeEmail == 46) // .도 아닐 때
        ) {
          alert("이메일에는 영문, 숫자, 특수기호(@, .)만 입력 가능합니다.");
          return false;
        }
      }
    }

    // 근무 형태 코드 : 선택이 저장 되지 않도록
    if (wrk_typ_cd === "00") {
      alert("근무 형태 코드를 선택해주세요.");
      return false;
    }

    // 직급 : 선택이 저장 되지 않도록
    if (rank_nm === "선택") {
      alert("직급을 선택해주세요.");
      return false;
    }

    // 입사일자
    if (entr_dt === "") {
      alert("입사일자는 공란일 수 없습니다.");
      return false;
    }

    // 등록자
    if (reg_id === "") {
      alert("등록자를 입력해주세요.");
      return false;
    }

    // 수정자
    if (mod_id === "") {
      alert("수정자를 입력해주세요.");
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
        $("#employeeList").trigger("reloadGrid");
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
        editrules: {
          required: true,
        },
      },
      {
        name: "hp_no",
        index: "hp_no",
        align: "center",
        editable: true,
        editrules: {
          number: true,
        },
      },
      {
        name: "email",
        index: "email",
        align: "center",
        editable: true,
        editrules: {
          email: true,
        },
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
            선택: "선택",
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

    emptyrecords: "데이터가 없습니다.",

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

    ondblClickRow: function (rowId, iRow, iCol, e) {
      if (iCol == 1) {
        alert(rowId + "째 줄입니다.");
      }
    },

    beforeSubmitCell: function (rowid, cellname, value) {
      return { id: rowid, cellName: cellname, cellValue: value };
    },
    afterEditCell: function (rowid, cellname, value, iRow, iCol) {
      $("#" + rowid + "_" + cellname).blur(function () {
        $("#employeeList").jqGrid("saveCell", iRow, iCol);
      });
    },
  });
});

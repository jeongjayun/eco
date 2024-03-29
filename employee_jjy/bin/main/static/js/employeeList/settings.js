$(document).ready(function () {
  //datepicker
  $.datepicker.setDefaults({
    showOtherMonths: true,
    showMonthAfterYear: true, // 월- 년 순서가아닌 년도 - 월 순서
    changeYear: true,
    changeMonth: true,
    dateFormat: "yy-mm-dd",
    prevText: "이전 달",
    nextText: "다음 달",
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    showMonthAfterYear: true,
    yearSuffix: "년",
    showButtonPanel: true,
  });

  //jqGrid
  https: $("#employeeList").jqGrid({
    datatype: "json",
    url: "/api/list",
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
      "근무형태",
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
        width: "80px",
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
          dataInit: function (element) {
            $(element).datepicker({
              maxDate: 0,
              onClose: function (selectedDate) {
                $(element).datepicker("option", "minDate", selectedDate);
              },
            });
          },
        },
      },
      {
        name: "retr_dt",
        index: "retr_dt",
        align: "center",
        editable: true,
        editoptions: {
          dataInit: function (element) {
            $(element).datepicker({
              maxDate: 0,
              onClose: function (selectedDate) {
                $(element).datepicker("option", "maxDate", selectedDate);
              },
            });
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
        width: "70px",
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
    rowNum: 10,
    rowList: [10, 20, 30],
    multiselect: false,

    emptyrecords: "데이터가 없습니다.",

    sortable: true,
    sortorder: "asc",
    sortname: "employee_no",

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

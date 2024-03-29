CREATE TABLE ECO_FRESH.EMPLOYEE_JJY_MST
(
	  EMPLOYEE_NO VARCHAR2(9) NOT NULL
	, EMPLOYEE_NM VARCHAR2(30) NOT NULL
	, HP_NO VARCHAR2(11)
	, EMAIL VARCHAR2(50)
	, ENTR_DT VARCHAR2(8) NOT NULL
	, RETR_DT VARCHAR2(8)
	, WRK_TYP_CD VARCHAR2(2)
	, DEL_YN VARCHAR2(1) DEFAULT 'N' NOT NULL
	, REG_ID VARCHAR2(30) NOT NULL
	, REG_DTM VARCHAR2(14) NOT NULL
	, MOD_ID VARCHAR2(30) NOT NULL
	, MOD_DTM VARCHAR2(14) NOT NULL
	, BASE_ADR VARCHAR2(100)
	, DTL_ADR VARCHAR2(100)
	, ZIP_NO VARCHAR2(5)
	, BIRTH_DT VARCHAR2(8)
);

ALTER TABLE ECO_FRESH.EMPLOYEE_JJY_MST ADD PSTN_NM VARCHAR2(10);
ALTER TABLE ECO_FRESH.EMPLOYEE_JJY_MST ADD RANK_NM VARCHAR2(10) DEFAULT '주임' NOT NULL;

COMMENT ON TABLE ECO_FRESH.EMPLOYEE_JJY_MST IS '직원 관리';

COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.EMPLOYEE_NO IS '직원번호';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.EMPLOYEE_NM IS '직원이름';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.HP_NO IS '핸드폰 번호';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.EMAIL IS '이메일';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.ENTR_DT IS '입사일자';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.RETR_DT IS '퇴사일자';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.WRK_TYP_CD IS '근무형태코드';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.DEL_YN IS '삭제여부';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.REG_ID IS '등록자';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.REG_DTM IS '등록일시';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.MOD_ID IS '수정자';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.MOD_DTM IS '수정일시';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.BASE_ADR IS '기본주소';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.DTL_ADR IS '상세주소';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.ZIP_NO IS '우편번호';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.BIRTH_DT IS '생년월일';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.PSTN_NM IS '직책이름';
COMMENT ON COLUMN ECO_FRESH.EMPLOYEE_JJY_MST.RANK_NM IS '직급이름';

CREATE UNIQUE INDEX ECO_FRESH.PK_EMPLOYEE_JJY_MST ON ECO_FRESH.EMPLOYEE_JJY_MST(EMPLOYEE_NO);

ALTER TABLE ECO_FRESH.EMPLOYEE_JJY_MST
ADD CONSTRAINT PK_EMPLOYEE_JJY_MST PRIMARY KEY (EMPLOYEE_NO)
USING INDEX ECO_FRESH.PK_EMPLOYEE_JJY_MST ENABLE;

--테스트 데이터--
INSERT INTO ECO_FRESH.EMPLOYEE_JJY_MST (
			  EMPLOYEE_NO 
			, EMPLOYEE_NM 
			, HP_NO 
			, EMAIL 
			, ENTR_DT 
			, RETR_DT 
			, WRK_TYP_CD
			, DEL_YN 
			, REG_ID 
			, REG_DTM 
			, MOD_ID
			, MOD_DTM 
			, BASE_ADR 
			, DTL_ADR 
			, ZIP_NO 
			, BIRTH_DT
			, PSTN_NM
			, RANK_NM 
			)
	VALUES (
			  'E20240001'
			, '오라클테스트'
			, '01012345678'
			, 'example@ecosystems.co.kr'
			, '20240201'
			, ''
			, 'Y'
			, 'N'
			, '오라클테스트'
			, '20240202'
			, '오라클테스트'
			, '20240202'
			, '경기도 과천시 과천대로7길'
			, '33, 디테크타워 1505'
			, '00000'
			, '19991231'
			, ''
			, '주임'
	);
	
INSERT INTO ECO_FRESH.EMPLOYEE_JJY_MST (
			  EMPLOYEE_NO 
			, EMPLOYEE_NM 
			, HP_NO 
			, EMAIL 
			, ENTR_DT 
			, RETR_DT 
			, WRK_TYP_CD
			, DEL_YN 
			, REG_ID 
			, REG_DTM 
			, MOD_ID
			, MOD_DTM 
			, BASE_ADR 
			, DTL_ADR 
			, ZIP_NO 
			, BIRTH_DT
			, PSTN_NM
			, RANK_NM 
			)
	VALUES (
			  'E20240002'
			, '오라클테스트1'
			, '01012345678'
			, 'example1@ecosystems.co.kr'
			, '20240201'
			, ''
			, 'Y'
			, 'N'
			, '오라클테스트1'
			, '20240202'
			, '오라클테스트1'
			, '20240202'
			, '경기도 과천시 과천대로7길'
			, '33, 디테크타워 1505'
			, '00000'
			, '19991231'
			, ''
			, '주임'
	);

ALTER TABLE EMPLOYEE_JJY_MST MODIFY PSTN_NM VARCHAR2(30);
ALTER TABLE EMPLOYEE_JJY_MST MODIFY RANK_NM VARCHAR2(30);

DROP TABLE EMPLOYEE_JJY_MST;


CREATE TABLE ECO_FRESH.EMPLOYEE_JJY_MST
(
	  EMPLOYEE_NO VARCHAR2(9) NOT NULL
	, EMPLOYEE_NM VARCHAR2(30) NOT NULL
	, HP_NO VARCHAR2(11)
	, EMAIL VARCHAR2(50)
	, ENTR_DT VARCHAR2(8) NOT NULL
	, RETR_DT VARCHAR2(8)
	, WRK_TYP_CD VARCHAR2(2)
	, BASE_ADR VARCHAR2(100)
	, DTL_ADR VARCHAR2(100)
	, ZIP_NO VARCHAR2(5)
	, BIRTH_DT VARCHAR2(8)
	, PSTN_NM VARCHAR2(30)
	, RANK_NM VARCHAR2(30) DEFAULT '주임' NOT NULL
	, DEL_YN VARCHAR2(1) DEFAULT 'N' NOT NULL
	, REG_ID VARCHAR2(30) NOT NULL
	, REG_DTM VARCHAR2(14) NOT NULL
	, MOD_ID VARCHAR2(30) NOT NULL
	, MOD_DTM VARCHAR2(14) NOT NULL
);

--필수값 넣는 쿼리 확인--
INSERT  INTO EMPLOYEE_JJY_MST
				( EMPLOYEE_NO
				, EMPLOYEE_NM
				, ENTR_DT
				, RANK_NM
				, DEL_YN
				, REG_ID
				, REG_DTM
				, MOD_ID
				, MOD_DTM
				)
		VALUES ( 'E20240002'
		 		, 'test2'
		 		, '20240201'
		 		, '주임'
		 		, 'n'
		 		, 'E20249999'
		 		, '20240202'
		 		, 'E20249999'
		 		, '20240202'
		 		);

-- 자동채번 위한 직원번호 뒷자리 4숫자 sequence 추가 --
CREATE SEQUENCE employee_no_seq
INCREMENT BY 1
START WITH 1;

ALTER SEQUENCE employee_no_seq
MAXVALUE 9999
CYCLE; -- 최대 4숫자지정 후 넘은 경우에 순환하도록 설정 --

SELECT employee_no_seq.CURRVAL FROM DUAL;

-- 1. 4숫자로 만들기 위한 함수 적용 --
SELECT LPAD(employee_no_seq.CURRVAL,4,0) FROM DUAL; 

-- 2. 자동채번 위한 직원번호 앞에서 4숫자 년도 숫자 가져오기 --
SELECT sysdate FROM dual;
SELECT TO_CHAR(sysdate, 'yyyy') FROM dual; 

-- 위의 두 함수 합치기 --
INSERT INTO EMPLOYEE_JJY_MST
				( EMPLOYEE_NO
				, EMPLOYEE_NM
				, ENTR_DT
				, RANK_NM
				, DEL_YN
				, REG_ID
				, REG_DTM
				, MOD_ID
				, MOD_DTM
				)
	 VALUES 	( 'E'
	 				||(SELECT TO_CHAR(sysdate, 'yyyy') FROM DUAL)
	 				||LPAD(employee_no_seq.NEXTVAL, 4, 0)
			 	, 'test6'
			 	, '20240201'
			 	, '대리'
			 	, 'y'
			 	, 'E20249999'
			 	, '20240202'
			 	, 'E20249999'
			 	, '20240202'
			 	);
			 
-- insert 시 reg_dtm 을 system 에서 저장하게 -- 
INSERT INTO EMPLOYEE_JJY_MST
				( EMPLOYEE_NO
				, EMPLOYEE_NM
				, ENTR_DT
				, RANK_NM
				, DEL_YN
				, REG_ID
				, REG_DTM
				, MOD_ID
				, MOD_DTM
				)
	 VALUES 	( 'E'
	 				||(SELECT TO_CHAR(sysdate, 'yyyy') FROM DUAL)
	 				||LPAD(employee_no_seq.NEXTVAL, 4, 0)
			 	, 'test6'
			 	, '20240201'
			 	, '대리'
			 	, 'y'
			 	, 'E20249999'
			 	, SYSDATE		--00/00/00 로 저장됨--
			 	, 'E20249999'
			 	, '20240202'
			 	);
			 	
INSERT INTO EMPLOYEE_JJY_MST
				( EMPLOYEE_NO
				, EMPLOYEE_NM
				, ENTR_DT
				, RANK_NM
				, DEL_YN
				, REG_ID
				, REG_DTM
				, MOD_ID
				, MOD_DTM
				)
	 VALUES 	( 'E'
	 				||(SELECT TO_CHAR(sysdate, 'yyyy') FROM DUAL)
	 				||LPAD(employee_no_seq.NEXTVAL, 4, 0)
			 	, 'test6'
			 	, '20240201'
			 	, '대리'
			 	, 'y'
			 	, 'E20249999'
			 	, TO_CHAR(SYSDATE,'yyyy-mm-dd hh:mi:ss') 
			 	, 'E20249999'
			 	, TO_CHAR(SYSDATE,'yyyy-mm-dd hh:mi:ss')
			 	);
			 	
-- dtm data 크기가 작아서 컬럼 변경
ALTER TABLE ECO_FRESH.EMPLOYEE_JJY_MST MODIFY reg_dtm varchar2(20);
ALTER TABLE eco_fresh.EMPLOYEE_JJY_MST MODIFY mod_dtm varchar2(20);

SELECT * FROM EMPLOYEE_JJY_MST ORDER BY REG_DTM DESC ;

-- 삭제 시 DEL_YN을 Y로 바꾸는 쿼리
UPDATE ECO_FRESH.EMPLOYEE_JJY_MST
   SET DEL_YN ='Y'
 WHERE EMPLOYEE_NO = 'E20240039';

-- 삭제 시 DEL_YN을 Y로 바꾸고 MOD_DTM sysdate로 수정 
UPDATE EMPLOYEE_JJY_MST
   SET DEL_YN = 'Y'
	   , MOD_DTM = TO_CHAR(sysdate, 'yyyy-mm-dd hh24:mi:ss')
 WHERE EMPLOYEE_NO = 'E20240040'
 
-- 시퀀스 검색
SELECT *
  FROM USER_SEQUENCES 
 WHERE SEQUENCE_NAME = 'EMPLOYEE_NO_SEQ';

-- DBA 권한 없을 시 시퀀스 초기화
-- 1. 시퀀스의 현재 값 확인
SELECT LAST_NUMBER
  FROM USER_SEQUENCES
 WHERE SEQUENCE_NAME = 'EMPLOYEE_NO_SEQ';

-- 2. 시퀀스의 INCREMENT 현재 값만큼 빼도록 설정
ALTER SEQUENCE EMPLOYEE_NO_SEQ INCREMENT BY - 29;

-- 3. 시퀀스의 NEXTVAL 값 조회
SELECT EMPLOYEE_NO_SEQ.NEXTVAL FROM DUAL;

-- 3.1 시퀀스의 CURRVAL 값 조회 
SELECT EMPLOYEE_NO_SEQ.CURRVAL FROM DUAL;

-- 4. 시퀀스의 increment를 1로 설정
ALTER SEQUENCE EMPLOYEE_NO_SEQ INCREMENT BY 1;

SELECT EMPLOYEE_NO_SEQ.NEXTVAL FROM DUAL;


SELECT *
  FROM EMPLOYEE_JJY_MST
 WHERE EMPLOYEE_NM  LIKE '%삼%';

SELECT COUNT(*)
  		   FROM EMPLOYEE_JJY_MST
		  WHERE RETR_DT < SYSDATE AND DEL_YN='N';

SELECT EMPLOYEE_NO,
	   ( SELECT COUNT(*)
  		   FROM EMPLOYEE_JJY_MST
		  WHERE RETR_DT < SYSDATE AND DEL_YN='N'
		) AS COUNT
  FROM EMPLOYEE_JJY_MST
 WHERE RETR_DT < SYSDATE AND DEL_YN='N';
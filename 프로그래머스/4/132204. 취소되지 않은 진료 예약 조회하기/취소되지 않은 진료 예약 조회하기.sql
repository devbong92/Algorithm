-- 코드를 입력하세요
SELECT
    APNT_NO, 
    PT_NAME,
    p.PT_NO,
    d.MCDP_CD,
    DR_NAME,
    APNT_YMD
  FROM PATIENT p            -- 환자
 INNER JOIN APPOINTMENT a   -- 진료 예약목록 
    ON p.PT_NO = a.PT_NO
 INNER JOIN DOCTOR d        -- 의사
    ON a.MCDP_CD = d.MCDP_CD
   AND a.MDDR_ID = d.DR_ID
 WHERE a.MCDP_CD = 'CS'
   AND a.APNT_CNCL_YN = 'N'
   AND DATE_FORMAT(a.APNT_YMD, '%Y-%m-%d') = '2022-04-13' 
 ORDER BY a.APNT_YMD ASC ;
    
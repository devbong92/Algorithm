-- 코드를 입력하세요
SELECT
 count(0) AS "USERS"
 FROM USER_INFO
WHERE extract (year from JOINED) = '2021'
  AND AGE BETWEEN 20 AND 29 ;
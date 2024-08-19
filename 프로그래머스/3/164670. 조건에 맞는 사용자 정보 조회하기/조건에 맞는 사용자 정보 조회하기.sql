-- 코드를 입력하세요
SELECT
    users.USER_ID,
    users.NICKNAME,
    CONCAT(users.CITY,' ', users.STREET_ADDRESS1,' ', users.STREET_ADDRESS2) AS "전체주소",
    CONCAT(substr(users.TLNO,1,3),'-',substr(users.TLNO,4,4),'-',substr(users.TLNO,8,4)) AS "전화번호"
  FROM USED_GOODS_USER users
 INNER JOIN ( 
        SELECT WRITER_ID, COUNT(BOARD_ID) AS cnt 
          FROM USED_GOODS_BOARD
         GROUP BY WRITER_ID
 ) boards
    ON users.USER_ID = boards.WRITER_ID
 WHERE boards.cnt >= 3
 ORDER BY users.USER_ID DESC ;
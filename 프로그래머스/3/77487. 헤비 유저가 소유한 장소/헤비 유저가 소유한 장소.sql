-- 코드를 입력하세요
    SELECT
            p.ID,
            p.NAME,
            p.HOST_ID
      FROM PLACES p
INNER JOIN (
    SELECT 
        HOST_ID, COUNT(ID) AS CNT
    FROM PLACES
   GROUP BY 1
     ) h
        ON p.HOST_ID = h.HOST_ID
     WHERE h.CNT > 1
  ORDER BY ID ASC;
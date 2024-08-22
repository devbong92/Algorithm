-- 코드를 입력하세요

     SELECT 
           h.FLAVOR
      FROM FIRST_HALF h
INNER JOIN (
            SELECT 
              FLAVOR, SUM(TOTAL_ORDER) TOTAL_ORDER
              FROM JULY 
             GROUP BY FLAVOR
        ) j
        ON h.FLAVOR = j.FLAVOR
  ORDER BY h.TOTAL_ORDER + j.TOTAL_ORDER DESC 
     LIMIT 3;
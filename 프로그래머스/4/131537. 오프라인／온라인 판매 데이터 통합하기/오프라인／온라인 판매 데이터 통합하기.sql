-- 코드를 입력하세요

SELECT * FROM (
    SELECT
     DATE_FORMAT(offline.SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
      offline.PRODUCT_ID,
      NULL AS USER_ID,
      offline.SALES_AMOUNT
     FROM OFFLINE_SALE as offline 
     WHERE year(offline.SALES_DATE) = 2022
      AND month(offline.SALES_DATE) = 3
UNION ALL 
    SELECT 
      DATE_FORMAT(online.SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
      online.PRODUCT_ID,
      online.USER_ID,
      online.SALES_AMOUNT
      FROM ONLINE_SALE as online 
    WHERE year(online.SALES_DATE) = 2022
      AND month(online.SALES_DATE) = 3
) a
ORDER BY SALES_DATE, PRODUCT_ID, USER_ID ;
;
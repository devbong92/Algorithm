-- 코드를 입력하세요
    SELECT
            YEAR(sale.SALES_DATE) AS YEAR ,
            MONTH(sale.SALES_DATE) AS MONTH ,
            info.GENDER ,
            COUNT(DISTINCT info.USER_ID) AS USERS
      FROM USER_INFO info
INNER JOIN ONLINE_SALE sale
        ON info.USER_ID = sale.USER_ID
     WHERE info.GENDER IS NOT NULL
  GROUP BY 1,2,3
  ORDER BY 1,2,3 ;

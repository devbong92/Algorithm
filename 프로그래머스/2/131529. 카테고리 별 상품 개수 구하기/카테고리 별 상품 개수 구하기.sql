-- 코드를 입력하세요

SELECT 
 c.CATEGORY , 
 count(c.CATEGORY) as PRODUCTS
  FROM (
      SELECT
             substr(PRODUCT_CODE,1,2) AS CATEGORY
        FROM PRODUCT
  ) c
GROUP BY 1
ORDER BY 1
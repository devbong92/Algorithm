-- 코드를 입력하세요
WITH hist AS (
    SELECT   hist.HISTORY_ID
           , car.CAR_TYPE
           , car.DAILY_FEE
           , DATEDIFF(hist.END_DATE, hist.START_DATE) + 1 AS diff
           , CASE 
                WHEN DATEDIFF(hist.END_DATE, hist.START_DATE) + 1 >= 90 THEN '90일 이상'
                WHEN DATEDIFF(hist.END_DATE, hist.START_DATE) + 1 >= 30 THEN '30일 이상'
                WHEN DATEDIFF(hist.END_DATE, hist.START_DATE) + 1 >=  7 THEN '7일 이상'
                ELSE NULL
             END DURATION_TYPE
      FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY hist
     INNER JOIN CAR_RENTAL_COMPANY_CAR car
        ON car.CAR_ID = hist.CAR_ID
     WHERE car.CAR_TYPE = '트럭'
)

SELECT 
       hist.HISTORY_ID , 
       TRUNCATE(hist.DAILY_FEE * hist.diff * ( 100 - IFNULL(plan.DISCOUNT_RATE,0)) / 100 ,0) AS FEE
  FROM hist
  LEFT OUTER JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN plan
    ON hist.DURATION_TYPE = plan.DURATION_TYPE
   AND hist.CAR_TYPE = plan.CAR_TYPE
 ORDER BY FEE DESC, hist.HISTORY_ID DESC ;

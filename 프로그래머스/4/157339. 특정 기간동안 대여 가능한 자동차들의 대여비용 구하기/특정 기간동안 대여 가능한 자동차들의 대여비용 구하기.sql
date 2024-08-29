-- 코드를 입력하세요
-- 15 
SELECT
     distinct car.CAR_ID, 
     car.CAR_TYPE,
     TRUNCATE(car.DAILY_FEE * 30 * (100-plan.DISCOUNT_RATE)/100,0) AS FEE
FROM CAR_RENTAL_COMPANY_CAR car 
INNER JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN plan 
ON car.CAR_TYPE = plan.CAR_TYPE
AND plan.DURATION_TYPE = '30일 이상'
WHERE car.CAR_ID NOT IN (
                    SELECT 
                         DISTINCT hist.CAR_ID
                     FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY hist
                    WHERE hist.END_DATE >= STR_TO_DATE('2022-11-01','%Y-%m-%d') 
                      AND hist.START_DATE <= STR_TO_DATE('2022-11-30','%Y-%m-%d') 
    )
  AND car.CAR_TYPE IN ('세단','SUV')
  AND (
          TRUNCATE(car.DAILY_FEE * 30 * (100-plan.DISCOUNT_RATE)/100,0) >= 500000
      AND TRUNCATE(car.DAILY_FEE * 30 * (100-plan.DISCOUNT_RATE)/100,0) < 2000000
  )
  ORDER BY FEE DESC, CAR_TYPE ASC, CAR_ID DESC ;
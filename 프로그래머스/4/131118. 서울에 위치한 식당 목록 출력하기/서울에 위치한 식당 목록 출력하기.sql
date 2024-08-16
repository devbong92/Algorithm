-- 코드를 입력하세요
       SELECT
            info.REST_ID,
            info.REST_NAME,
            info.FOOD_TYPE,
            info.FAVORITES,
            info.ADDRESS,
            SCORE
         FROM REST_INFO info 
   INNER JOIN (
                SELECT 
                       review.REST_ID, 
                       ROUND(AVG(review.REVIEW_SCORE), 2) AS SCORE
                  FROM REST_REVIEW review
              GROUP BY review.REST_ID
               ) re
          ON info.REST_ID = re.REST_ID
       WHERE info.ADDRESS LIKE '서울%'
    ORDER BY SCORE DESC, info.FAVORITES DESC ;
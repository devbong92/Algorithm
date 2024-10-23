-- 코드를 입력하세요

    SELECT 
           MEMBER_NAME,
           REVIEW_TEXT,
           DATE_FORMAT(REVIEW_DATE,'%Y-%m-%d') as REVIEW_DATE
      FROM REST_REVIEW r
INNER JOIN MEMBER_PROFILE m 
        ON r.MEMBER_ID = m.MEMBER_ID 
     WHERE r.MEMBER_ID = (
                                SELECT
                                      MEMBER_ID 
                                 FROM REST_REVIEW
                                 GROUP BY MEMBER_ID
                                 ORDER BY COUNT(*) DESC
                                 LIMIT 1
                        )
  ORDER BY REVIEW_DATE, REVIEW_TEXT

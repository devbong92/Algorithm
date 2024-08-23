/*  
    2022년 1월 도서 판매 데이터를 기준으로
    AUTHOR_ID, AUTHOR_NAME, CATEGORY, SALES 출력
    AUTHOR_ID ASC, CATEGORY DESC
*/
-- 코드를 입력하세요

     SELECT 
            a.AUTHOR_ID,
            a.AUTHOR_NAME,
            b.CATEGORY,
            SUM( b.PRICE * s.SALES ) AS TOTAL_SALES
       FROM BOOK b 
 INNER JOIN AUTHOR a 
         ON b.AUTHOR_ID = a.AUTHOR_ID
 INNER JOIN BOOK_SALES s
         ON b.BOOK_ID = s.BOOK_ID
      WHERE YEAR(s.SALES_DATE) = 2022
        AND MONTH(s.SALES_DATE) = 1
      GROUP BY a.AUTHOR_ID, b.CATEGORY
      ORDER BY a.AUTHOR_ID, b.CATEGORY DESC ;


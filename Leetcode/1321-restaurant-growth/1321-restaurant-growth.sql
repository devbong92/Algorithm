# Write your MySQL query statement below

-- SELECT
--     c.visited_on,
--     (
--         SELECT SUM(amount)
--         FROM Customer
--         WHERE visited_on BETWEEN DATE_SUB(c.visited_on, INTERVAL 6 DAY) AND c.visited_on
--     ) AS amount,
--     ROUND(
--         (
--             SELECT SUM(amount) / 7
--             FROM Customer
--             WHERE visited_on BETWEEN DATE_SUB(c.visited_on, INTERVAL 6 DAY) AND c.visited_on
--         ), 2
--     ) AS average_amount
-- FROM Customer c
-- WHERE visited_on >= (
--         SELECT DATE_ADD(MIN(visited_on), INTERVAL 6 DAY)
--         FROM Customer
--     )
-- GROUP BY visited_on ;

SELECT 
    t.visited_on, 
    t.amount, 
    ROUND(t.amount/7, 2) average_amount
FROM (
    SELECT 
        DISTINCT visited_on, 
        SUM(amount) OVER(ORDER BY visited_on RANGE BETWEEN INTERVAL 6 DAY PRECEDING AND CURRENT ROW) amount, 
        MIN(visited_on) OVER() AS FIRST_DATE
    FROM Customer
) t
WHERE t.visited_on >= DATE_ADD(FIRST_DATE, INTERVAL 6 DAY) ;
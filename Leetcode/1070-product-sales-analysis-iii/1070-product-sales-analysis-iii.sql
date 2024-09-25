# Write your MySQL query statement below

WITH first_product AS (
    select product_id, min(year) as first_year
      from Sales
     group by product_id
)

select s.product_id, fp.first_year, s.quantity, s.price
  from Sales s 
 inner join first_product fp 
    on s.product_id = fp.product_id
   and s.year = fp.first_year 
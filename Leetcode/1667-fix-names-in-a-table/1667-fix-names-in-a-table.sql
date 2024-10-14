# Write your MySQL query statement below

select 
  user_id,
  CONCAT(UPPER(left(name ,1)),LOWER(substring(name ,2))) AS name
  from Users
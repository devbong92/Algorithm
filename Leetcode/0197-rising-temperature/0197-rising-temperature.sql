# Write your MySQL query statement below

select 
 t.id
 from Weather t
 inner join Weather y
 on y.recordDate = SUBDATE(t.recordDate, INTERVAL 1 DAY)
 where t.temperature > y.temperature
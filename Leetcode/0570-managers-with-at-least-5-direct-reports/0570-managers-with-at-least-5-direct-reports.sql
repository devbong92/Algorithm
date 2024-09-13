# Write your MySQL query statement below

select 
   e.name
  from Employee e
  inner join (
    select managerId, count(managerId) as cnt 
      from Employee 
  group by managerId
  ) m
  on e.id = m.managerId
  where cnt >= 5
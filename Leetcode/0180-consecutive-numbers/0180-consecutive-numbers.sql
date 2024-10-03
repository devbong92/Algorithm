# Write your MySQL query statement below

select 
  distinct l1.num as ConsecutiveNums
  from Logs l1
  inner join Logs l2
  on l1.id+1 = l2.id
  and l1.num = l2.num
  inner join Logs l3 
  on l2.id+1 = l3.id
  and l2.num = l3.num
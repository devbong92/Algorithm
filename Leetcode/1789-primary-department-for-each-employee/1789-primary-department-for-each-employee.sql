# Write your MySQL query statement below

select 
  e.employee_id, e.department_id
 from Employee e
 inner join (
    select 
    employee_id, count(department_id) as cnt
    from Employee
    group by 1
 ) g 
 on e.employee_id = g.employee_id
where ( g.cnt = 1 AND e.primary_flag = 'N' )
   OR ( g.cnt > 1 AND primary_flag = 'Y' )
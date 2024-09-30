# Write your MySQL query statement below

select  
    e.employee_id ,
    e.name,
    g.reports_count as reports_count,
    g.average_age as average_age
from Employees e 
inner join (
     select 
            reports_to,
            count(reports_to) as reports_count,
            round(avg(age),0) as average_age
        from Employees
        where reports_to is not null
        group by 1
) g
on e.employee_id = g.reports_to 
order by e.employee_id
;


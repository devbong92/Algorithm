# Write your MySQL query statement below


select 
   s.machine_id, round(avg(e.timestamp - s.timestamp),3) as processing_time
   from Activity s
  inner join Activity e 
  on s.machine_id = e.machine_id
  and s.process_id = e.process_id
  and e.activity_type = 'end'
  where s.activity_type = 'start'
  group by s.machine_id ;
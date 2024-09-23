# Write your MySQL query statement below

select 
 truncate(count(f.player_id) / count(distinct a.player_id),2) as fraction
from Activity a 
left outer join (
    select 
        player_id, min(event_date) as first_date
    from Activity
    group by player_id
) f
on a.player_id = f.player_id
and date_sub(a.event_date, INTERVAL 1 DAY) = f.first_date

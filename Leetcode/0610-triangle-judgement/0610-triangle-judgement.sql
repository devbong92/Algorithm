# Write your MySQL query statement below

select 
    x,y,z,
    (
        CASE 
            WHEN x+y+z-greatest(x,y,z) > greatest(x,y,z) THEN 'Yes'
            ELSE 'No'
        END 
    ) as triangle
  From Triangle t 

# Write your MySQL query statement below


select
    round(count(m.customer_id)/count(distinct d.customer_id) * 100,2) as immediate_percentage
from Delivery d 
left outer join (
            select 
            customer_id, 
            min(order_date) as order_date
            from Delivery
            Group by customer_id
        ) m
on d.customer_id = m.customer_id
and d.customer_pref_delivery_date = m.order_date ; 
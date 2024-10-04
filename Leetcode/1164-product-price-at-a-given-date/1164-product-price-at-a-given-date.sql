# Write your MySQL query statement below
with 
    ids AS ( select 
                distinct product_id
            from Products p ),
    after AS (
        select
        product_id, new_price as price
        from Products
        where (Product_id, change_date) in (
            select product_id, max(change_date) as change_date
            from Products
            where change_date <= '2019-08-16'
            group by product_id
        )
    )
    select i.product_id, ifnull(a.price,10) as price
    from ids i 
    left join after a 
    on i.product_id = a.product_id ; 
-- 코드를 입력하세요
SELECT
      cp1.CART_ID
  FROM CART_PRODUCTS as cp1
 inner join CART_PRODUCTS as cp2
         on cp1.cart_id = cp2.cart_id
      WHERE cp1.NAME = 'Milk'
        and cp2.name = 'Yogurt'
 group by cp1.cart_id ;
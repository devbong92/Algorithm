-- 코드를 입력하세요
SELECT
  count(NAME) as "count"
  from 
  (
      select distinct name 
        from ANIMAL_INS
       where NAME IS NOT NULL
  ) as cnt
 # order by name
 ;
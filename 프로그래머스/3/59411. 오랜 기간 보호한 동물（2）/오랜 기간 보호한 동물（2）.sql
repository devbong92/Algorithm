-- 코드를 입력하세요
     SELECT
            ins.ANIMAL_ID, ins.NAME
       FROM ANIMAL_INS ins 
 INNER JOIN ANIMAL_OUTS outs
         ON ins.ANIMAL_ID = outs.ANIMAL_ID 
   ORDER BY outs.DATETIME- ins.DATETIME DESC
      LIMIT 2;
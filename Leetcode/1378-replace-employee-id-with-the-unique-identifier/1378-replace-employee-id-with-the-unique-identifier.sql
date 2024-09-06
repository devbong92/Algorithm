# Write your MySQL query statement below

         SELECT 
                uni.unique_id, e.name
           FROM Employees e
LEFT OUTER JOIN EmployeeUNI uni
             ON e.id = uni.id
       ORDER BY uni.unique_id DESC ;
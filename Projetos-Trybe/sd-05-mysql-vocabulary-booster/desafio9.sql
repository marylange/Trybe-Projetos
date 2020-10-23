SELECT
CONCAT(emp.FirstName, ' ', emp.LastName) AS "Nome completo",
COUNT(ors.EmployeeID) AS "Total de pedidos"
FROM w3schools.employees AS emp
JOIN
w3schools.orders AS ors
ON(ors.EmployeeID = emp.EmployeeID)
GROUP BY ors.EmployeeID
ORDER BY COUNT(ors.EmployeeID);

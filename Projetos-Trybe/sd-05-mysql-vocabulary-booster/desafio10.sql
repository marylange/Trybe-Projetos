SELECT prd.ProductName AS "Produto",
MIN(ord.Quantity) AS "Mínima",
MAX(ord.Quantity) AS "Máxima",
ROUND(AVG(ord.Quantity), 2) AS "Média"
FROM w3schools.products AS prd
JOIN
w3schools.order_details AS ord
ON(prd.ProductID = ord.ProductID)
GROUP BY
prd.ProductName
HAVING 
ROUND(AVG(ord.Quantity), 2) > 20.00
ORDER BY
AVG(ord.Quantity),
prd.ProductName;

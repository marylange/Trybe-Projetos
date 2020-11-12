SELECT prd.ProductName AS "Produto",
prd.Price AS "Preço"
FROM w3schools.products AS prd
JOIN
w3schools.order_details AS ord
ON(ord.ProductID = prd.ProductID)
WHERE ord.Quantity > 80
ORDER BY
prd.ProductName;

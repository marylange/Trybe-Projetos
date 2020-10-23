SELECT
cst.ContactName AS "Nome de contato",
shp.ShipperName AS "Empresa que fez o envio",
ords.OrderDate AS "Data do pedido"
FROM w3schools.customers AS cst
JOIN
w3schools.orders AS ords
ON(ords.CustomerID = cst.CustomerId)
JOIN
w3schools.shippers AS shp
ON(shp.ShipperId = ords.ShipperId)
WHERE shp.ShipperName = "Speedy Express" OR shp.ShipperName = "United Package"
ORDER BY
cst.ContactName,
shp.ShipperName,
ords.OrderDate;

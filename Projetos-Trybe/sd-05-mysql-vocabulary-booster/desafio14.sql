(
(SELECT Country AS "País" FROM w3schools.customers ORDER BY Country ASC LIMIT 15)
UNION
(SELECT Country AS "País" FROM w3schools.suppliers ORDER BY Country ASC LIMIT 15)
)
ORDER BY 1 LIMIT 5;

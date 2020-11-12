-- Crie uma view chamada address_info que faça uso das tabelas address e 
-- city do banco de dados sakila. Sua view deve exibir o address_id, o address, o district, o city_id e a city. 
-- Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.
CREATE VIEW address_info AS
    SELECT 
        ads.address_id, ads.address, ads.district, c.city_id, c.city
    FROM
        sakila.address AS ads
	INNER JOIN sakila.city AS c ON ads.city_id = c.city_id
    ORDER BY city;
    
SELECT * FROM address_info;

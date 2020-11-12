-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
use sakila;
SELECT a.actor_id, a.first_name, f.film_id
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.film_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT * FROM customer;
SELECT * FROM address;

SELECT s.first_name, s.last_name, a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente,
-- juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address,
RIGHT(a.address, LENGTH(a.address) - LOCATE(' ', a.address))
FROM customer AS c
INNER JOIN address AS a
ON a.address_id = c.address_id
ORDER BY c.first_name, a.address_id, a.address DESC
LIMIT 100;

SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

-- RIGHT(a.address, LENGTH(a.address) - LOCATE(' ', a.address))
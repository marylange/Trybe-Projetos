-- parte 1
-- Entregando resultados mais exatos através do WHERE


-- Exercício 1

-- Entre no banco de dados sakila e siga as instruções (e guarde as queries para conferir posteriormente):
USE sakila;
-- Precisamos identificar o cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org.
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- Precisamos de um relatório dos nomes, em ordem alfabética, dos clientes que não estão mais ativos no nosso sistema e 
-- pertencem à loja com o id 2. Porém, não inclua o cliente KENNETH no resultado.
SELECT * FROM customer
WHERE active IS TRUE AND store_id = 2
ORDER BY first_name;

-- O setor financeiro quer saber nome, descrição, ano de lançamento e quais são os 100 filmes com o maior custo 
-- de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o 
-- custo mínimo de substituição de $18,00 dólares.
SELECT title, description, release_year, replacement_cost FROM film
WHERE replacement_cost > 18 AND rating = 'G'
ORDER BY replacement_cost DESC
LIMIT 100;

-- Quantos clientes estão ativos e na loja 1?
SELECT COUNT(*) AS 'Clientes ativos' FROM customer
WHERE active IS TRUE AND store_id = 1;

-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1.
SELECT * FROM customer
WHERE active IS NOT TRUE AND store_id = 1;

-- Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a menor taxa de aluguel, 
-- para que possamos fazer uma divulgação melhor desses filmes.
SELECT * FROM film;

SELECT * FROM film
WHERE (rating = 'R' OR rating = 'NC-17') AND replacement_cost < 18
ORDER BY replacement_cost ASC
LIMIT 50;


-- parte 2
-- Como criar pesquisas mais dinâmicas e maleáveis usando o LIKE

-- Exercício 2

-- Encontre todos os detalhes dos filmes que contêm a palavra "ace" no nome.
SELECT * FROM film
WHERE title LIKE '%ace%';
-- Encontre todos os detalhes dos filmes cujas descrições finalizam com "china".
SELECT * FROM film
WHERE description LIKE '%china';
-- Encontre todos os detalhes dos dois filmes cujas descrições contêm a palavra "girl" e o título finaliza com a palavra "lord".
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';
-- Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra "gon".
SELECT * FROM film
WHERE title LIKE '___gon%';
-- Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra "gon" e a descrição contém a palavra "Documentary".
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
-- Encontre os dois filmes cujos títulos ou finalizam com "academy" ou inciam com "mosquito".
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
-- Encontre os seis filmes que contêm as palavras "monkey" e "sumo" em suas descrições.
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';


-- parte 3
-- Englobando uma faixa de resultados com IN e BETWEEN


-- Exercício 3

-- Encontre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: 
-- hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética. 
SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

-- Encontre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
SELECT email FROM customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY address_id ASC;

-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005.
-- Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, 
-- diferente do formato brasileiro, que é dia/mês/ano.
SELECT * FROM payment;

SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';

-- Encontre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. 
-- Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro.
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC;

-- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para menores de idade. 
-- Os resultados devem estar ordenados por classificação mais abrangente primeiro.
SELECT title, rating FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY rating ASC
LIMIT 500;

-- Parte 4
-- Encontrando e separando resultados que incluem datas

-- MySql usa por padrão o formato ano/mês/dia (YYYY/MM/DD) ao armazenar os valores de uma data.
-- OBS: Você é obrigado, pelo banco de dados, a salvar nesse formato, e não é possível alterá-lo

-- tipos de dados temporais:
-- DATE: Possui apenas data, no formato YYYY-MM-DD na faixa de 1001-01-01 até 9999-12-31
-- DATETIME: Possui data e tempo, no formato YYYY-MM-DD HH:MM:SS com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59.

-- EX:

SELECT * FROM sakila.payment;

-- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

-- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

-- Encontra um pagamento com dia e hora exatos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';

-- Encontra pagamentos especificando um valor mínimo e um valor máximo para a data
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo

-- Exercício 4

-- Quantos aluguéis temos com a data de retorno 2005-08-29? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT COUNT(*) AS 'Total de filmes alugados' FROM rental
WHERE DATE(rental_date) = '2005-08-29';

-- Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005?
SELECT COUNT(*) AS 'Total de filmes alugados' FROM rental
WHERE rental_date BETWEEN '2005/07/01' AND '2005/08/22';

-- Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
SELECT * FROM rental;

SELECT
	DATE(rental_date) AS 'Data',
    YEAR(rental_date) AS 'Ano',
    MONTH(rental_date) AS 'Mês',
    DAY(rental_date) AS 'Dia',
    HOUR(rental_date) AS 'Horas',
    MINUTE(rental_date) AS 'Minutos'
FROM rental
WHERE rental_id = 10330;

-- Monte uma query que encontre o id e a data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.
SELECT rental_id, rental_date FROM rental
WHERE rental_date LIKE '2005-08-18 00:14:03';




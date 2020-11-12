-- parte 1
-- Manipulação de strings

-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3);

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou um string', 5);

-- Exibe o tamanho, em caracteres, da string
SELECT LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);


use sakila;
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- Exercício 1 

-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT ucase('trybe');
-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
-- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT length('Uma frase qualquer');
-- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT substring('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT lcase('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- parte 2
-- Condicionais

-- Sintaxe:
-- SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);
SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
FROM pessoas;

SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
FROM estabelecimentos;

-- Exemplo utilizando o banco sakila:
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;

SELECT *
FROM sakila.customer
LIMIT 20;


-- O CASE é para situações que precisa comparar mais de uma condição
-- Sintaxe:

-- SELECT CASE
  -- WHEN condicao THEN valor
  -- ELSE valor padrao
-- END;


SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;

-- exercício 2

-- Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating) 
-- e uma coluna extra que vamos chamar de 'público-alvo', 
-- em que classificaremos o filme de acordo com as seguintes siglas:
-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".

SELECT
	title, 
	rating,
		CASE
			WHEN rating = 'G' THEN 'Livre para todos'
            WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
            WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
            WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
            ELSE 'Proibido para menores de idade'
		END AS 'público-alvo'
FROM sakila.film;


-- parte 3
-- Funções matemáticas do MySQL / Adição, Subtração, Multiplicação e Divisão

SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

-- Podemos, também, usar as colunas diretamente como base para os cálculos, caso necessário.
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- O DIV retorna o resultado inteiro de uma divisão, ignorando as casas decimais de um número. Veja os exemplos abaixo:
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6

-- Já o operador MOD retorna o resto de uma divisão como resultado. Por exemplo:
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- exercício 3

-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar.
-- Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT IF(15 MOD 2 = 0, 'Par', 'Impar') AS 'Par ou Ímpar';

-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao 
-- cinema sem que ninguém fique de fora?
SELECT 220 DIV 12;

-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12;

-- parte 3
-- Arredondando Valores

-- ROUND arredonda os números de acordo com sua parte decimal. Se for maior ou igual a 0.5, o resultado é um arredondamento para cima.
-- Caso contrário, ocorre um arredondamento para baixo. Veja os exemplos abaixo:

-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(0.5); -- 1
SELECT ROUND(0.7); -- 1
SELECT ROUND(0.4); -- 0
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

-- O arredondamento sempre para cima pode ser feito com o CEIL:
SELECT CEIL(0.4); -- 1
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11

-- O arredondamento sempre para baixo pode ser feito com o FLOOR:
SELECT FLOOR(0.7); -- 0
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10

-- Exponenciação e Raiz Quadrada

-- POW é usado para calcular exponenciação Elevando um número X à potência Y
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

-- Encontrando a raiz quadrada de um valor usando SQRT:
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

-- Gerando valores aleatórios
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT FLOOR(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))

-- exercício 3

-- Monte uma query que gere um valor entre 15 e 20.
SELECT FLOOR(15 + (RAND() * 5));

-- Monte uma query que exiba o valor arredondado de 15.75 com uma precisão de 5 casas decimais.
SELECT ROUND(15.75, 5);
-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT floor(39.494);
-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT ceil(85.234);

-- parte 4
-- Trabalhando com datas

-- Podemos consultar a data e hora atuais usando as seguintes funções:
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- Podemos descobrir quantos dias entre duas datas com DATEDIFF ou a diferença de horários usando TIMEDIFF.
-- Em ambos os casos, o segundo valor é subtraído do primeiro para calcular o resultado.

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- E por fim, podemos extrair qualquer parte de uma data ou hora de uma coluna:
SELECT DATE(data_cadastro); -- YYYY-MM-DD
SELECT YEAR(data_cadastro); -- Ano
SELECT MONTH(data_cadastro); -- Mês
SELECT DAY(data_cadastro); -- Dia
SELECT HOUR(data_cadastro); -- Hora
SELECT MINUTE(data_cadastro); -- Minuto
SELECT SECOND(data_cadastro); -- Segundo

-- Podemos usar o CURRENT_DATE() e NOW() junto com as querys informadas acima
-- EX:
SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual

-- exercício 4

-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT TIMEDIFF('10:25:45', '11:00:00');

-- parte 5
-- Utilizando as funções de agregação AVG, MIN, MAX, SUM e COUNT
-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

-- exercício 5

-- Monte um query que exiba:
-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
-- A duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film;
-- A duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;
-- A soma de todas as durações como 'Tempo de Exibição Total';
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;
-- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(length) AS 'Filmes Registrados' FROM sakila.film;

-- parte 6
-- Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING

SELECT first_name FROM sakila.actor
GROUP BY first_name;
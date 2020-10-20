-- parte 1
-- Clonar tabelas existentes

-- Sintaxe:
CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;

-- Exemplo:
CREATE TABLE actor_clone LIKE sakila.actor;

-- Pontos de Atenção

-- Esse comando não copia os dados, apenas a estrutura;
-- Caso não especifique qual banco de dados utilizar, a nova tabela será inserida no banco que estiver 
-- ativo no momento da execução. Sendo assim, sempre especifique o banco de dados antes.

USE sakila;
CREATE TABLE address_clone LIKE address;


-- parte 2
-- O que é e como lidar com uma VIEW

-- Uma VIEW é nada mais nada menos que uma tabela temporária no seu banco de dados, 
-- que pode ser consultada como qualquer outra. Porém, por ser uma tabela temporária, 
-- ela é criada a partir de uma query que você definir.

-- sintaxe de uma VIEW
USE nome_do_banco_de_dados; -- Defina em qual banco a view será criada
CREATE VIEW nome_da_view AS query;

-- EX: 
-- construir uma query para buscar os clientes mais tops que compram na empresa. Isso pode ser feito através de view.

CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
    
-- sempre que houver necessidade, tabela temporária pode ser acessada novamente
SELECT * FROM top_10_customers;
    
-- para excluir uma view
DROP VIEW nome_da_view;
DROP VIEW nome_da_view;

-- parte 3
-- Tudo que você deve saber sobre o ALTER TABLE
USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;


-- comandos para alterar uma tabela

-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;

-- para verficar se a estrutura foi modificada, podemos usar o comnado
SHOW COLUMNS FROM sakila.noticia;

-- parte 4
-- dropar uma tabela
DROP TABLE nome_da_tabela;

-- OBS: Não é possível excluir uma tabela que possui uma chave estrangeira.
-- A chave estrangeira ou a tabela que contém deve ser excluida antes.
-- Essas restrições estão relacionadas ao conceito de integridade referencial, 
-- isso existe para que tabelas não sejam excluidas por acidente

-- parte 5
-- Como usar um INDEX



-- o INDEX é uma maneira de estruturar seus dados de uma maneira mais eficiente para que elas possam ser encontradas mais rápido.

-- opções de indices que podem ser criados

-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;


-- o index possue melhor performance do que sem o index
CREATE INDEX index_first_name ON sakila.actor(first_name); -- index

DROP INDEX index_first_name ON sakila.actor; -- excluir o index

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA'; -- executar a query com index e sem index

-- parte 6
-- Entenda o impacto do FULLTEXT INDEX

CREATE FULLTEXT INDEX index_address ON sakila.address(address); -- criando uma pesquisa com fulltet index

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive'); -- fazendo a leitura da pesquisa

DROP INDEX index_address ON sakila.address; -- excluindo a pesquisa


SELECT *
FROM sakila.address
WHERE address LIKE '%drive%'; -- fazendo a leitura da query sem fulltext index


-- parte 7
-- Entenda o impacto do UNIQUE INDEX
-- utilizado em uma coluna para previnir a duplicação de dados em uma tabela e melhorar a performance de busca
-- colunas que fazem uso dessa restrição podem receber valores nulos

-- sintaxe
CREATE UNIQUE INDEX nome_do_indice ON nome_tabela(nome_coluna);

-- dropar
DROP INDEX nome_do_indice ON nome_tabela;

-- lista os detalhes sobre um indice em uma tabela 
SHOW INDEX FROM sakila.actor;

-- teste de performace
CREATE UNIQUE INDEX unique_name_index ON sakila.language(name); -- com unique index

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';

DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.language -- sem unique index
WHERE name = 'Mandarin';

-- parte 8
-- Criando reações dinâmicas com Triggers

-- Triggers são blocos de código SQL que são disparados em reação a alguma atividade que ocorre no banco de dados. 
-- Eles podem ser disparados em dois momentos distintos, e é possível definir condições para esse disparo.

-- Momentos que um triggers pode ser disparado

-- BEFORE: antes que alguma ação seja executada;
-- AFTER: após alguma ação já ter sido executada.

-- O que ativa o trigger pode ser um INSERT, UPDATE OU DELETE

-- O que pode ser acessado dentro de um trigger: O valor OLD (Valor presente em uma coluna antes de uma operação)
-- e o NEW (Valor presente em uma coluna após uma operação)

-- sintaxe Trigger
DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END;

DELIMITER $$ ;

-- Ex de trigger com as três operações INSERT, UPDATE e DELETE:
CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY auto_increment,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualizacao DATETIME,
    acao VARCHAR(50),
    ativo BOOLEAN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;

-- EX: Trigger para o INSERT
-- Considerando a tabela perfil, hora de montar um Trigger que define a data de inserção e o tipo de operação,
-- quando um novo registro é inserido.

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END; $$
DELIMITER ;

-- No `trigger` acima, o valor da coluna `ultima_atualizacao` está sendo
-- definido para a data atual com o comando `NOW()` e, na sequência,
-- definindo o valor da coluna `acao` para "INSERT". A palavra-chave `NEW`
-- é utilizada para acessar e modificar as propriedades da tabela.

-- Para ver o resultado do uso do `Trigger` na prática, execute o exemplo abaixo:
INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM perfil;

-- EX: Trigger para o UPDATE

-- Considerando a tabela perfil, hora de montar um Trigger que define a data de atualização
-- e o tipo de operação, quando algum registro for modificado.

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END; $$
DELIMITER ;

-- No `Trigger` acima, o valor da coluna `ultima_atualizacao` está sendo atualizado
-- para a data atual com o comando `NOW()` e, na sequência, definindo o valor da coluna `acao` para "UPDATE".
-- Novamente, a palavra-chave `NEW` é utilizada para acessar e modificar as propriedades da tabela.

-- Para ver o resultado do uso do `Trigger` na prática, execute o exemplo abaixo:

UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM perfil;

-- EX: Trigger para o DELETE
-- Considerando a tabela log_perfil, hora de criar um trigger que envia informações
-- para essa tabela quando um registro da tabela perfil é excluído.

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END; $$
DELIMITER ;

-- O trigger acima envia informações para a tabela `log_perfil`, dizendo qual foi o tipo da operação e o horário do ocorrido.

-- Pode-se confirmar o seu funcionamento excluindo um registro do banco de dados e
-- depois fazendo uma pesquisa na tabela `log_perfil`. Veja o exemplo abaixo:

DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM log_perfil;


-- exercícios

CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;


-- 1 - Crie um TRIGGER que, a cada nova inserção feita na tabela carros, 
-- defina o valor da coluna data_atualizacao para o momento do ocorrido, 
-- a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1.
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_insert_carros
    BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END; $$
DELIMITER ;

-- 2 - Crie um TRIGGER que, a cada atualização feita na tabela carros,
-- defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO'.
DELIMITER $$
CREATE TRIGGER trigger_update_carros
    BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'ATUALIZAÇÃO';
END; $$
DELIMITER ;

-- 3 - Crie um TRIGGER que, a cada exclusão feita na tabela carros,
-- envie para a tabela log_operacoes as informações do
-- tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
DELIMITER $$
CREATE TRIGGER trigger_delete_carros
    AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
    INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
	VALUE ('exclusão', NOW());
END; $$
DELIMITER ;

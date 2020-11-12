-- Crie uma trigger chamada trigger_usuario_delete que deve ser disparada sempre que uma pessoa usuária 
-- for excluída do banco de dados, refletindo essa exclusão em todas as tabelas que ela estiver.

-- Teste a funcionalidade correta de sua trigger, fazendo a exclusão da usuária "Thati".
DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON usuario
FOR EACH ROW
BEGIN
DELETE FROM historico WHERE USUARIO_ID = OLD.USUARIO_ID;
DELETE FROM seguindo_artista WHERE USUARIO_ID = OLD.USUARIO_ID;
END $$
DELIMITER ;

USE hr;
DELIMITER $$
CREATE PROCEDURE buscar_media_por_cargo(IN syllable VARCHAR(35))
BEGIN
SELECT ROUND(AVG(emp.salary), 2) AS "Média salarial"
FROM hr.employees AS emp5t56t 
JOIN
hr.jobs AS jbs
ON(jbs.JOB_ID = emp.JOB_ID)
WHERE jbs.JOB_TITLE LIKE syllable;
END $$
DELIMITER ;
CALL buscar_media_por_cargo('Programmer');

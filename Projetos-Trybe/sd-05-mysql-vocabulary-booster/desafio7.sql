SELECT
UPPER(CONCAT(emp.first_name, ' ', emp.last_name)) AS "Nome completo",
jbh.start_date AS "Data de início",
emp.salary AS "Salário"
FROM hr.employees AS emp
JOIN
hr.job_history AS jbh
ON(emp.employee_id = jbh.employee_id)
WHERE MONTH(jbh.start_date)=01 OR MONTH(jbh.start_date)=02 OR MONTH(jbh.start_date)=03
ORDER BY
CONCAT(emp.first_name, ' ', emp.last_name),
jbh.start_date;

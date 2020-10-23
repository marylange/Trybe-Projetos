SELECT
jbs.job_title AS "Cargo",
ROUND(AVG(emp.salary), 2) AS "Média salarial",
CASE
WHEN AVG(emp.salary) BETWEEN 2000 AND 5800 THEN 'Júnior'
WHEN AVG(emp.salary) BETWEEN 5801 AND 7500 THEN 'Pleno'
WHEN AVG(emp.salary) BETWEEN 7501 AND 10500 THEN 'Sênior'
ELSE 'CEO'
END AS "Senioridade"
FROM hr.jobs AS jbs
JOIN
hr.employees AS emp ON (jbs.job_id = emp.job_id)
GROUP BY
jbs.job_title,
"Média salarial",
"Senioridade"
ORDER BY
AVG(emp.salary),
jbs.job_title;

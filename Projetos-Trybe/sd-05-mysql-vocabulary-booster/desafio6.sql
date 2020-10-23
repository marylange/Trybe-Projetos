SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) as 'Nome completo',
JOB_TITLE as Cargo,
START_DATE as 'Data de início do cargo',
DEPARTMENT_NAME as Departamento FROM hr.job_history
INNER JOIN employees
ON employees.EMPLOYEE_ID = job_history.EMPLOYEE_ID
INNER JOIN jobs
ON jobs.JOB_ID = job_history.JOB_ID
INNER JOIN departments
ON departments.DEPARTMENT_ID = job_history.DEPARTMENT_ID
ORDER BY CONCAT(FIRST_NAME, ' ', LAST_NAME) DESC, Cargo;

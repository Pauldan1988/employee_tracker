INSERT INTO department (id, dept_name)
VALUES (100,"Finance"),
       (200,"Legal"),
       (300,"Marketing"),
       (400,"Sales"),
       (500,"Customer Service");
INSERT INTO role (id, title, salary, department_id)
VALUES (100,"Accountant", 60000, 5000),
       (200,"Lawyer", 90000, 6000),
       (300,"Advertiser", 45000, 4000),
       (400,"Salesperson", 50000, 2000),
       (500,"Personal Relations", 55000, 1000),
       (600,"Publicist", 40000, 3000);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (100,"Bill", "Obrien", 100, 001),
       (200,"Jim", "Benson", 300, 002),
       (300,"Frank", "Heinz", 600, 005),
       (400,"Kathy", "Mcbeth", 400, NULL),
       (500,"Greg", "Clotz", 200, 001),
       (600,"Arthur", "Cromwell", 500, NULL),
       (700,"Betty", "Spaghetti",300, 002),
       (800,"Devin", "Mcknight", 400, 001),
       (900,"Heath", "Cliff", 500, 002),
       (1000,"James", "Bond", )
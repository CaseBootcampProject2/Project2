INSERT INTO employee (firstName, lastName, email, passsword) VALUES ("Jennifer", "Smith", "jennifer.smith@gmail.com", "password1234");

INSERT INTO employee (firstName, lastName, email, passsword) VALUES ("Scott", "Johnson", "scott.myers@gmail.com", "password1234");

INSERT INTO employee (firstName, lastName, email, passsword) VALUES ("Sally", "Miller", "sally.miller@gmail.com", "password1234");

INSERT INTO customer (firstName, lastName, email, passsword) VALUES ("Edna", "Wilson", "edna.wilson@gmail.com", "password1234");

INSERT INTO customer (firstName, lastName, email, passsword) VALUES ("Jessica", "Jones", "jessica.jones@gmail.com", "password1234");

INSERT INTO customer (firstName, lastName, email, passsword) VALUES ("William", "Anderson", "william.anderson@gmail.com", "password1234");

INSERT INTO role (service, roleType, employeeID) VALUES ("Massage", "Masseuse", 2);

INSERT INTO role (service, roleType, employeeID) VALUES ("Facial", "Esthetician", 1); 

INSERT INTO role (service, roleType, employeeID) VALUES ("Manicure", "Manicurist", 3); 

INSERT INTO appointment (employeeID, customerID, roleID, appointmentTime) VALUES (1, 1, 2, '2017/11/11 10:00:00');

INSERT INTO appointment (employeeID, customerID, roleID, appointmentTime) VALUES (2, 2, 1, '2017/11/15 12:00:00');

INSERT INTO appointment (employeeID, customerID, roleID, appointmentTime) VALUES (3, 3, 3, '2017/11/20 09:00:00');
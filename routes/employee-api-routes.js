var db = require("../models");

module.exports = function(app) {
        app.get("/api/employees", function(req, res) {;
            var employeeQuery = {};
            if (req.employeeQuery.EmployeeId) {
                employeeQuery.EmployeeId = req.employeeQuery.EmployeeId;
            }
            db.Employee.findAll({
                where: query,
                include: [db.Role]
            }).then(function(dEmployee) {
                res.json(dbEmployee);
            });
        });
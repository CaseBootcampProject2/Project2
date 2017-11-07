var db = require("../models");

module.exports = function(app) {

    app.get("/api/appointments", function(req, res) {
        var query = {};
        if (req.query.CustomerId) {
            query.CustomerId = req.query.CustomerId;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Customer
        db.Appointment.findAll({
            where: query,
            include: [db.Customer]
        }).then(function(dbAppointment) {
            res.json(dbAppointment);
        });
    });

    // From Jessi
    app.get("/api/allappointments", function(req, res) {
        console.log("hi");
        var response = {};
        response.message = "hey";
        db.Employee.findAll({
            include: [db.Role]
        }).then(function(dbEmployee) {
            response.employeeRoles = dbEmployee;
            db.Appointment.findAll({}).then(function(dbAppointment) {
                response.appointments = dbAppointment;
                res.json(response);
            });
        });
    });

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

    app.post("/api/createappointment", function(req, res) {
        db.Appointment.create(req.body).then(function(dbAppointment) {
            res.json(dbAppointment);
        });
    });
    // End from Jessi

    app.get("/api/appointments/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Customer
        db.Appointment.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Customer]
        }).then(function(dbAppointment) {
            res.json(dbAppointment);
        });
    });

    // POST route for saving a new appointment
    app.post("/api/appointments", function(req, res) {
        db.Appointment.create(req.body).then(function(dbAppointment) {
            res.json(dbAppointment);
        });
    });

    // DELETE route for deleting appointments
    app.delete("/api/appointments/:id", function(req, res) {
        db.Appointment.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbAppointment) {
            res.json(dbAppointment);
        });
    });

    // PUT route for updating appointments
    app.put("/api/appointments", function(req, res) {
        db.Appointment.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbAppointment) {
            res.json(dbAppointment);
        });
    });
};
// End module.exports
// Require the models
var db = require("../models");

// Routes
module.exports = function(app) {
// GET route for getting apointments
  app.get("/api/appointments", function(req, res) {
    var query = {};
    if (req.query.customer_id) {
      query.CustomerId = req.query.customer_id;
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
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbAppointment) {
        res.json(dbAppointment);
      });
  });
};
// End module.exports

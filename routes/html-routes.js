var path = require("path");

module.exports = function(app) {


	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	app.get("/about", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/about.html"));
	});

	app.get("/services", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/services.html"));
	});

	app.get("/make-account", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/make-account.html"));
	});

	app.get("/make-appt", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/make-appt.html"));
	});

	app.get("/appt/:email", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/appointment.html"));
	});

	app.get("/view-schedule", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/view-schedule.html"));
	});
}
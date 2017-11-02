$(document).ready(function() {

	var emailInput = $("#email");
	var serviceInput = $("#service");
	var dateInput = $("#date");
	var newAppointment = $("#new-appointment");

	$(newAppointment).on("submit", createAppointment);

	function createAppointment(event){
		event.preventDefault();
			if(!emailInput.val().trim() || !serviceInput.val().trim() || !dateInput.val().trim()) {
			alert('Please check that you have filled in each field.');
			return;
		}

		var newAppointment = {
			service: serviceInput.val().trim(),
			date: dateInput.val().trim(),
			// CustomerId: emailInput.val()
			CustomerId: "1"
		};
		submitAppointment(newAppointment);
	} // end of createAccount()


	function submitAppointment(appointment) {
		$.post("/api/appointments", appointment, function(){
			console.log("a new appointment has been submitted.")
		});
	}













}); // end document.ready






// $(document).ready(function () {

// 	var emailInput = $("#email");
// 	var serviceInput = $("#service");
// 	var dateInput = $("#date");
// 	// var timeInput = $("#time");
// 	var appointment = $("#new-appointment");

// 	$(appointment).on("submit", createAppointment);


// 	function createAppointment(event) {
// 		event.preventDefaul();
// 		console.log('the createAppointment function was called')
// 		event.preventDefaul();
// 		if (!emailInput.val().time() ||
// 			!serviceInput.val().time() ||
// 			!dateInput.val().time() 
// 			// ||!timeInput.val().time()
// 			) {
// 			alert("Please check that no fields are empty.");
// 			return;
// 		}
// 		var newAppointment = {
// 			service: serviceInput.val().trim(),
// 			date: dateInput.val().trim(),
// 			// time: timeInput.val().trim(),
// 			email: emailInput.val().trim()
// 		};
// 	}

// 	function submitAppointment(appointment) {
// 		$.post("/api/appointments", appointment, function() {
// 			console.log("A new appointment has been created.")
// 		});
// 	}

// // end of document.ready function
// })
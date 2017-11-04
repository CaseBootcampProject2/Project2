$(document).ready(function() {

	var dateInput = $("#date");
	var serviceInput = $("#service");
	var employeeInput = $("#employee");
	var timeInput = $("#time");
	var messageInput = $("#message")
	var newAppointment = $("#new-appointment");

	$(newAppointment).on("submit", createAppointment);

// JG Revised function 11-3

function createAppointment(event){
	event.preventDefault();
	if(!dateInput.val().trim() || !serviceInput.val().trim() || !employeeInput.val().trim() || !timeInput.val().trim()) || !messageInput.val().trim() {
		alert('Please check that you have filled in each field.');
		return;
	}

	var queryurl = '/api/email/' + emailInput.val().trim();
	console.log('here is the queryurl: ' + queryurl);
	$.get(queryurl, function(data) {
			// var id = data.id;
			var newAppointment = {
				date: dateInput.val().trim(),
				service: serviceInput.val().trim(),
				employee: employeeInput.val().trim(),
				
				date: dateInput.val().trim(),
				CustomerId: data.id
			};
			submitAppointment(newAppointment);
		});
} // end of createAccount()


function submitAppointment(appointment) {
	$.post("/api/appointments", appointment, function(){
		console.log("a new appointment has been submitted.")
	});
}




}); // end document.ready

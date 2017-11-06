$(document).ready(function() {

    var appointments = [];
    var employees = [];
    var selectedDate;

    getServices(); // calls api to retrieve appointments and employee list

    $("#date").change(function() {
        $("#serviceSelect").hide();
        $("#employeeSelect").hide();
        $("#timeSelect").hide();
        if (this.value != undefined) {
            selectedDate = new Date(this.value.replace(/-/g, "/"));
            $("#service").empty();
            $("#service").append('<option value="" selected="selected">Select One</option>');
            employees.map(function(employee) {
                $("#service")
                    .append('<option value=' + employee.RoleId + '>' +
                        employee.Role.service + '</option>');
            });
            $("#serviceSelect").show();
        }
    });

    $("#service").change(function() {
        $("#employeeSelect").hide();
        $("#timeSelect").hide();
        if (this.value != undefined) {
            $("#employee").empty();
            $("#employee").append('<option value="" selected="selected">Select One</option>');
            employees.map(function(employee) {
                var selectedService = $("#service").val();
                if (selectedService == employee.RoleId) {
                    $("#employee")
                        .append('<option value=' + employee.id + '>' +
                            employee.firstName + '</option>');
                }
            });

            $("#employeeSelect").show();
        }
    });

    $("#employee").change(function() {
        $("#timeSelect").hide();
        if (this.value != undefined) {
            var employeeId = $("#employee").val();
            $("#time").empty();
            $("#time").append('<option value="" selected="selected">Select One</option>');
            var bookedTimes = appointments.filter(function(appointment) {
                if (employeeId == appointment.EmployeeId) {
                    var appointmentDate = new Date(appointment.appointmentTime);
                    return selectedDate.toDateString() === appointmentDate.toDateString();
                }
            }).map(function(bookedTime) { return new Date(bookedTime.appointmentTime).getHours(); });

            var dailyTimeSlots = getDailyTimeSlots();

            var availableTimeSlots = dailyTimeSlots.filter(function(timeSlot) {
                return bookedTimes.indexOf(timeSlot.getHours()) === -1;
            });

            $("#timeSelect").show();
        }
    });

    $("#time").change(function() {
        if (this.value != undefined) {
            $("#messageEntry").show();
            $("#submitButton").show();
        }
    });

    function getDailyTimeSlots() {
        var dailyTimeSlots = [];
        for (var i = 9; i < 17; i++) {
            var apptTimeSlot = new Date(selectedDate.getYear(),
                selectedDate.getMonth(),
                selectedDate.getDate(),
                i);
            dailyTimeSlots.push(apptTimeSlot);
        }
        return dailyTimeSlots;
    }

    function getServices() {
        $.get("api/allappointments", function(res) {
            console.log(res);
            appointments = res.appointments;
            employees = res.employeeRoles;
        });
    }
});
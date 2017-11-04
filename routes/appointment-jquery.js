$(document).ready(function() {

    var appointments = [];
    var roles = [];

    function getServices() {
        $.get("api/allappointments", function(res) {
            console.log(res);

        });
    }
    getServices();

    var dateInput = $("#date");
    var serviceSelect = $("#service");
    var employeeInput = $("#employee");
    var timeInput = $("#time");
    var messageInput = $("#message");
    var appointmentForm = $("#appointment");

    $("#date").change(function() {
        $("#serviceSelect").show();
    });




    /* $(appointmentForm).on("submit", handleFormSubmit);



   

    function renderServicesList(data) {
        if (!data.length) {
            window.location.href = "/appointments";
        }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createServicesInput(data[i]));
        }
        serviceSelect.empty();
        console.log(rowsToAdd);
        console.log(serviceSelect);
        serviceSelect.append(rowsToAdd);
        serviceSelect.val();
    }

}

function createServicesInput(services) {
    var listServices = $ ** ** ** ** **
        listServices.attr("value", roles.id);
    listServices.text(roles.service);
    return listServices;

}*/

});
module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointment", {
        appointmentID: DataTypes.INTEGER,
        employeeID: DataTypes.INTEGER,
        customerID: DataTypes.INTEGER,
        roleID: DataTypes.INTEGER,
    });

    Appointment.associate = function(models) {
        Appointment.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    };




    return Appointment;
};
module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    service: DataTypes.STRING,
    date: DataTypes.STRING
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
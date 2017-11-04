module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        employeeID: DataTypes.INTEGER,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    Employee.associate = function(models) {
        Employee.belongsTo(models.Appointment, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Employee;
};
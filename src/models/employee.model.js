const employees = (sequelize, DataTypes) => {
    const Employee = sequelize.define(
        'employee',
        {
            employeeNumber: {
                type: DataTypes.INTEGER(5),
                primaryKey: true,
                autoIncrement: true,
            },
            lastName: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            firstName: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            extention: {
                type: DataTypes.STRING(8),
            },
            email: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            officeCode: {
                type: DataTypes.STRING(10),
            },
            reportsTo: {
                type: DataTypes.INTEGER(16),
            },
            jobTitle: {
                type: DataTypes.STRING(20),
            },
        },
        {
            timestamps: false,
        }
    );

    return Employee;
};

export default employees;

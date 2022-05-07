const customers = (sequelize, DataTypes) => {
    const Customer = sequelize.define(
        'customer',
        {
            customerNumber: {
                type: DataTypes.INTEGER(5),
                primaryKey: true,
                autoIncrement: true,
            },
            customerName: {
                type: DataTypes.STRING(40),
            },
            contactFirstName: {
                type: DataTypes.STRING(20),
            },
            contactLastName: {
                type: DataTypes.STRING(20),
            },
            phone: {
                type: DataTypes.STRING(10),
            },
            addressLine1: {
                type: DataTypes.STRING(50),
            },
            addressLine2: {
                type: DataTypes.STRING(50),
            },
            city: {
                type: DataTypes.STRING(30),
            },
            state: {
                type: DataTypes.STRING(20),
            },
            postalCode: {
                type: DataTypes.STRING(16),
            },
            country: {
                type: DataTypes.STRING(32),
            },
            salesRepEmployeeNumber: {
                type: DataTypes.INTEGER(25),
            },
            creditLimit: {
                type: DataTypes.INTEGER(10),
            },
        },
        {
            timestamps: false,
        }
    );

    return Customer;
};

export default customers;

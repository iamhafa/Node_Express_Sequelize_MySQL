import dbConfig from '../config/dbConfig.js';

// import employees & customers models
import employees from './employee.model.js';
import customers from './customer.model.js';

import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

// check connect to database
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to database...');
    })
    .catch((err) => {
        console.log('Connect to database Error: ', err);
    });

// create db Object includes elements of models
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = employees(sequelize, DataTypes);
db.customers = customers(sequelize, DataTypes);

// sync with database
sequelize
    .sync({ force: false })
    .then(() => {
        console.log('Sync with database success!');
    })
    .catch((err) => {
        console.log('Sync with database ERROR: ', err);
    });

// each customer is linked to an employee by foreignKey: salesRepEmployeeNumber
db.employees.hasMany(db.customers, {
    foreignKey: 'salesRepEmployeeNumber',
    as: 'customer',
});

db.customers.belongsTo(db.employees, {
    foreignKey: 'salesRepEmployeeNumber',
    as: 'employee',
});

export default db;

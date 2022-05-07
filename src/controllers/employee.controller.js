import db from '../models/index.js';

const Employee = db.employees;
const Customer = db.customers;

//* create employee
const addEmployee = async (req, res) => {
    try {
        const info = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            extention: req.body.extention,
            email: req.body.email,
            officeCode: req.body.officeCode,
            reportsTo: req.body.reportsTo,
            jobTitle: req.body.jobTitle,
        };

        const employee = await Employee.create(info);

        res.status(200).send(employee);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

//* get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({});

        res.status(200).send(employees);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

//* get 1 employee
const getOneEmployee = async (req, res) => {
    try {
        const employeeNumber = req.params.employeeNumber;

        const employee = await Employee.findOne({
            where: {
                employeeNumber: employeeNumber,
            },
        });

        res.status(200).send(employee);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

//* update employee
const updateEmployee = async (req, res) => {
    try {
        const employeeNumber = req.params.employeeNumber;

        const employee = await Employee.update(req.body, {
            where: {
                employeeNumber: employeeNumber,
            },
        });

        res.status(200).send(employee);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

//* delete employee
const deleteEmployee = async (req, res) => {
    try {
        const employeeNumber = req.params.employeeNumber;

        const employee = await Employee.destroy({
            where: {
                employeeNumber: employeeNumber,
            },
        });

        res.status(200).send(employee);

        console.log('Employee deleted');
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

// 1 to many relationship
const getCustomerOfEmployee = async (req, res) => {
    try {
        const employeeNumber = req.params.employeeNumber;

        const data = await Employee.findAll({
            include: [
                {
                    model: Customer,
                    as: 'customer',
                },
            ],
            where: {
                employeeNumber: employeeNumber,
            },
        });

        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

export default {
    addEmployee,
    getAllEmployees,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
    getCustomerOfEmployee,
};

import db from '../models/index.js';

const Customer = db.customers;

// add customer
const addCustomer = async (req, res) => {
    try {
        const info = {
            customerNumber: req.body.customerNumber,
            customerName: req.body.customerName,
            contactFirstName: req.body.contactFirstName,
            contactLastName: req.body.contactLastName,
            phone: req.body.phone,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            city: req.body.city,
            state: req.body.state,
            postalCode: req.body.postalCode,
            country: req.body.country,
            salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
            creditLimit: req.body.creditLimit,
        };

        const customer = await Customer.create(info);

        res.status(200).send(customer);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

// get all customer
const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll({});

        res.status(200).send(customers);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

// find 1 customer by customerNumber
const getOneCustomer = async (req, res) => {
    try {
        const customerNumber = req.params.customerNumber;

        const customer = await Customer.findOne({
            where: {
                customerNumber: customerNumber,
            },
        });

        res.status(200).send(customer);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

// update customer's information through customerNumber
const updateCustomer = async (req, res) => {
    try {
        const customerNumber = req.params.customerNumber;

        const customer = await Customer.update(req.body, {
            where: {
                customerNumber: customerNumber,
            },
        });

        res.status(200).send(customer);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

// delete customer's information through customerNumber
const deleteCustomer = async (req, res) => {
    try {
        const customerNumber = req.params.customerNumber;

        const customer = await Customer.destroy({
            where: {
                customerNumber: customerNumber,
            },
        });

        res.status(200).send(customer);
    } catch (error) {
        console.error(error);
        res.status(404);
    }
};

// export function CRUD
export default {
    addCustomer,
    getAllCustomers,
    getOneCustomer,
    updateCustomer,
    deleteCustomer,
};

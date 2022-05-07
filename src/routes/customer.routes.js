import customerController from '../controllers/customer.controller.js';

const customerRoutes = require('express').Router();

// Customers
customerRoutes.get('/', customerController.getAllCustomers);
customerRoutes.post('/', customerController.addCustomer);
customerRoutes.get('/:customerNumber', customerController.getOneCustomer);
customerRoutes.put('/:customerNumber', customerController.updateCustomer);
customerRoutes.delete('/:customerNumber', customerController.deleteCustomer);

export default customerRoutes;

import employeeController from '../controllers/employee.controller.js';

const employeeRoutes = require('express').Router();

// Employees
employeeRoutes.get('/', employeeController.getAllEmployees);
employeeRoutes.post('/', employeeController.addEmployee);
employeeRoutes.get('/:employeeNumber', employeeController.getOneEmployee);
employeeRoutes.put('/:employeeNumber', employeeController.updateEmployee);
employeeRoutes.delete('/:employeeNumber', employeeController.deleteEmployee);

// lấy danh sách các khách hàng của nhân viên theo employeeNumber
employeeRoutes.get(
    '/listCustomers/:employeeNumber',
    employeeController.getCustomerOfEmployee
);

export default employeeRoutes;

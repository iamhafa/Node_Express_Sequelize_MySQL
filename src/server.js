import express from 'express';
import employeeRoutes from './routes/employee.routes.js';
import customerRoutes from './routes/customer.routes.js';

const app = express();

// accept json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ hello: 'hello from api' });
});

// routers
app.use('/api/employees', employeeRoutes);
app.use('/api/customers', customerRoutes);

const PORT = 1000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

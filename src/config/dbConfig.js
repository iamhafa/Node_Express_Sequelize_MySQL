export default {
    HOST: 'localhost',
    USER: 'root',
    // PASSWORD: '',
    PASSWORD: '78781227',
    DB: 'nodejs_assignment_1',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000, // time acquire is 30s
        idle: 10000, // time idle is 10s
    },
};

const { Sequelize } = require("sequelize");


const sequelize =  new Sequelize({
    database: 'eduwork-cruds-v2',
    host: 'localhost',
    username: 'root',
    password: 'root',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully konek konek.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;
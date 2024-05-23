const { Sequelize } = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('postgres://postgres:test@localhost:5432/test_asmr_script');

// Check the database connection
const checkDBStatus = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
checkDBStatus();

module.exports = sequelize;
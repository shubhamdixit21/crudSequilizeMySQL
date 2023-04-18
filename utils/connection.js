const { Sequelize, DataTypes } = require("sequelize");
const { port, host, user, password, database } = require("../config");

const sequelize = new Sequelize(database, user, password, {
    dialect: 'mysql',
    port: port,
    host: host,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

async function connectionCheck() {
    console.log("connecting")
    try {
        await sequelize.sync({
            force: false,
        });
        console.log("Connection has been established successfully.")
        await sequelize.authenticate();
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
}   

connectionCheck();

module.exports = { sequelize, Sequelize, DataTypes }

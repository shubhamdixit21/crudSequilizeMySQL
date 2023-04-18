const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    const User = sequelize.define("User",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(200),
                allowNull: false
            }
        },
        {
            tableName: "user"
        })
    return User;
}

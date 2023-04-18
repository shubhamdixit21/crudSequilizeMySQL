const { sequelize } = require("../utils/connection");
const user = require("../model/users")(sequelize);

module.exports.createUser = async function (name) {
    try {
        await user.create({ name: name })
    } catch (error) {
        console.log("createUser Error =>", error)
        throw new Error(error)
    }
}

module.exports.findUserById = async function (id) {
    try {
        const result = await user.findOne({
            where: {
                id: id
            }
        })
        return result;
    } catch (error) {
        console.log("findUserById Error =>", error)
        throw new Error(error)
    }
}

module.exports.findAll = async function () {
    try {
        const result = await user.findAll()
        return result;
    } catch (error) {
        console.log("findAll => ", error);
        throw new Error(error);
    }
}

module.exports.updateUser = async function (id, name) {
    try {
        return result = await user.update({ name: name }, {
            where: {
                id: id
            }
        })
    } catch (error) {
        console.log("updateUser =>", error);
        throw new Error(error);
    }
}

module.exports.deleteUser = async function (id) {
    try {
        return result = await user.destroy({
            where: { id: id }
        })
    } catch (error) {
        console.log("deleteUser =>", error);
        throw new Error(error);
    }
}

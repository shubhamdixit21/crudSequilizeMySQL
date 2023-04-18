const router = require("express-promise-router")();
const user = require("../database/user");


router.post("/create", async function (req, res) {
    try {
        const { name } = req.body;
        console.log("name", name);
        await user.createUser(name)
        return res.status(201).json({
            statusId: 1,
            message: "Created API"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            statusId: 0,
            message: "Something went wrong!"
        })
    }

})

router.get("/findUserById/:id", async function (req, res) {
    try {
        const id = req.params.id;
        const result = await user.findUserById(id)
        if (result) {
            return res.status(200).json({
                statusId: 1,
                message: result
            })
        } else {
            return res.status(404).json({
                statusId: 0,
                message: "Id Not Found"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            statusId: 0,
            message: "Something went wrong!"
        })
    }
})

router.get("/findAll", async function (req, res) {
    try {
        const result = await user.findAll();
        return res.status(200).json({
            statusId: 1,
            message: result
        })
    } catch (error) {
        return res.status(500).json({
            statusId: 0,
            messsage: "Something went wrong!"
        })
    }
})

router.put("/update/:id", async function (req, res) {
    try {
        const { name } = req.body;
        const id = req.params.id;
        const idInDB = await user.updateUser(id, name)
        if (id == idInDB) {
            return res.status(200).json({
                statusId: 1,
                message: `Updation done for id:${id}`
            })
        } else {
            return res.status(404).json({
                statusId: 0,
                message: "Id Not Found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            statusId: 0,
            message: "Something went wrong!"
        })
    }
})

router.delete("/delete/:id", async function (req, res) {
    try {
        const id = req.params.id;
        const idInDB = await user.deleteUser(id);
        if (idInDB == 1) {
            return res.status(200).json({
                statusId: 0,
                message: `User with id:${id} has been deleted`
            })
        } else {
            return res.status(404).json({
                statusId: 0,
                message: "Id Not Found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            statusId: 0,
            message: "Something went wrong!"
        })
    }
})

module.exports = router;

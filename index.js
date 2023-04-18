const express = require('express');
const server = express();
const userFile = require("./routes/user");

server.get('/health', (req, res) => {
    res.status(200).json({
        status: 1,
        message: "service is running"
    })
})

server.use(express.json());
server.use("/userFile", userFile);

server.get("*", (req, res) => {
    res.status(404).json({ status: 0, message: "*******Page Not Found*******" })
})

server.listen('3242', () => {
    console.log('Server is running at port 3242');
})

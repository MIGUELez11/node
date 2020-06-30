const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("Hola Martin");
})

server.listen(3000);
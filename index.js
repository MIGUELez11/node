const express = require("express");
const server = express();

const port = process.env.PORT || 80

server.get("/", (req, res) => {
    res.send("Hola Martin" + JSON.stringify(process.env));
})

server.listen(port);
const express = require('express');
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express();

server.use(cors())
server.use(bodyParser.json())

server.get("/posts", (req, res) => {
    fs.readFile('post.txt', (err, data) => {
        res.send(data)
    })
})

server.post("/post", (req, res) => {
    console.log(req.body)
    fs.writeFile('post.txt', JSON.stringify(req.body), () => {
        "Archivo escrito con éxito!"
    })
    res.send("okey")
})

server.listen(3000, () => {
    console.log("Server listening in port 3000!")
})
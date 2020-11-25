const express = require("express");

// import socket io
const socketIO = require("socket.io");

const http = require("http");
const router = require("./router");

const PORT = 3000;
const app = express();
const server = http.createServer(app);

// add cors
const webSocket = socketIO(server, {
    cors: {
        origin: "*",
    },
});

app.use((req, _, next) => {
    // create io var to access in router later
    req.io = webSocket;
    next();
}, router);

// listening to connection.
// this function will execute every time someone connected
// to this server
webSocket.on("connection", () => {
    console.log("someone connected");
});

server.listen(PORT, () => {
    console.log("SERVER running on: localhost:" + PORT);
});

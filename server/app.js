const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const routes = require("./routes");

const PORT = 3000;
const app = express();
const server = http.createServer(app);

const webSocket = socketIO(server, {
    cors: {
        origin: "*",
    },
});

app.use((req, _, next) => {
    req.io = webSocket;
    next();
}, routes);

webSocket.on("connection", () => {
    console.log("someone connected");
});

server.listen(PORT, () => {
    console.log("SERVER running on: localhost:" + PORT);
});

import { Server, Socket } from "socket.io";

import express from "express";
import { join } from "path";

const  app = express();
const server = app.listen(5050, () => {
    console.log("Server running at http://localhost:5050")
});
const io = new Server(server);

io.on("connection", (socket: Socket) => {
    console.log("A user connected!")
});
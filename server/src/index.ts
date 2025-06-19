import { Server } from "socket.io";

const io = new Server(5050);

io.on("connection", (socket) => {
    console.log("Socket connected!", socket.id)
})
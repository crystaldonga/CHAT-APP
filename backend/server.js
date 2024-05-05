import express from "express"

import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js"
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import path from "path";

import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT||7000;
app.use(express.json())
app.use(cookieParser());


const __dirname = path.resolve();

app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server is running port ${PORT}`)
})
import express from "express";
import dotenv from "dotenv";
import mongoose from "./src/Database/database.js";
import jwt from "jsonwebtoken";
import UserRoutes from "./src/Routes/UserRoutes.js";
import cors from "cors";
dotenv.config();

const port= process.env.PORT || 5000;
const app = express();

app.use(cors("*"))
app.use(express.json());

app.use("/user",UserRoutes);



app.listen(port,'192.168.1.3');
console.log(`listening on port ${port}`);

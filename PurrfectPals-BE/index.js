import express from "express";
import dotenv from "dotenv";
import mongoose from "./src/Database/database.js";
import jwt from "jsonwebtoken";
import UserRoutes from "./src/Routes/UserRoutes.js";
dotenv.config();

const port=5000;
const app = express();
app.use(express.json());

app.use("/user",UserRoutes);



app.listen(port, ()=>console.log(`listening on port ${port}`));

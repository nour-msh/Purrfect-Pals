import express from "express";
import dotenv from "dotenv";
import mongoose from "./src/Database/database.js";
const jwt = require('jsonwebtoken');
dotenv.config();

const port=5000;
const app = express();
app.use(express.json());



app.listen(port, ()=>console.log(`listening on port ${port}`));

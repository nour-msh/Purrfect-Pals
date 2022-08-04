import express from "express";
import UserRoutes from "./src/Routes/UserRoutes.js";
import PetRoutes from "./src/Routes/PetRoutes.js";
import VetRoutes from "./src/Routes/VetRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port= process.env.PORT || 5000;
const app = express();

app.use(cors("*"))
app.use(express.json());

app.use("/user",UserRoutes);
app.use("/pet",PetRoutes);
app.use("/vet",VetRoutes);




app.listen(port,'192.168.1.4');
console.log(`listening on port ${port}`);

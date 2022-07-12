import { Router } from 'express';
import {register, login} from "../Controller/AuthController.js";
import { addPet, addReview, addAppointment } from '../Controller/AddController.js';
import { getVets } from '../Controller/GetController.js';
const router = Router();


router.post("/register",register);
router.post("/login", login);
router.post("/addPet", addPet);
router.post("/addReview", addReview);
router.post("/addAppointment",addAppointment);
router.get("/getVets", getVets);


export default router;
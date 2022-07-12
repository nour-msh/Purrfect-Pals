import { Router } from 'express';
import {register, login} from "../Controller/AuthController.js";
import { addPet, addReview, addAppointment } from '../Controller/AddController.js';
const router = Router();


router.post("/register",register);
router.post("/login", login);
router.post("/addPet", addPet);
router.post("/addReview", addReview);
router.post("/addAppointment",addAppointment);


export default router;
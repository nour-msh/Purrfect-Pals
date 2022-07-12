import { Router } from 'express';
import {register, login} from "../Controller/AuthController.js";
import { addPet } from '../Controller/AddController.js';
const router = Router();


router.post("/register",register);
router.post("/login", login);
router.post("/addPet", addPet)



export default router;
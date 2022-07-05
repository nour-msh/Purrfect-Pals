import { Router } from 'express';
import {register} from "../Controller/AuthController.js";
const router = Router();


router.post("/register",register);



export default router;
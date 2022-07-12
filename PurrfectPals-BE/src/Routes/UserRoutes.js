import { Router } from 'express';
import {register, login} from "../Controller/AuthController.js";
import {addPet} from '../Controller/PetController.js';
import { addReview } from '../Controller/ReviewController.js';
import { addAppointment } from '../Controller/AppointmentController.js';
import { getVets } from '../Controller/VetController.js';
import {updateUserProfile} from '../Controller/UserController.js';
import { addPost } from '../Controller/PostController.js';
import { getPosts } from '../Controller/PostController.js';


const router = Router();


router.post("/register",register);
router.post("/login", login);
router.post("/addPet", addPet);
router.post("/addReview", addReview);
router.post("/addAppointment",addAppointment);
router.get("/getVets", getVets);
router.put("/updateUserProfile/:id", updateUserProfile);
router.post("/addPost",addPost);
router.get("/getPosts", getPosts);


export default router;
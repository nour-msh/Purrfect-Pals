import { Router } from 'express';
import {register, login} from "../Controller/AuthController.js";
import {addPet, getPets} from '../Controller/PetController.js';
import { addReview } from '../Controller/ReviewController.js';
import { getAllReviewsByPetId } from '../Controller/ReviewController.js'
import { getVets } from '../Controller/VetController.js';
import {updateUserProfile} from '../Controller/UserController.js';
import { addPost } from '../Controller/PostController.js';
import { getPosts } from '../Controller/PostController.js';
import { addAppointment } from '../Controller/VetController.js';


const router = Router();


router.post("/register",register);
router.post("/login", login);
router.post("/addPet/:user_id", addPet);
router.get("/getPets/:user_id", getPets);
router.post("/addReview/:user_id/:pet_id", addReview);
router.get("/getAllReviewsByPetId/:pet_id", getAllReviewsByPetId)
router.get("/getVets", getVets);
router.put("/updateUserProfile/:id", updateUserProfile);
router.post("/addPost",addPost);
router.get("/getPosts", getPosts);
router.post("/addAppointment", addAppointment);


export default router;
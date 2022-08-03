import { Router } from "express";
import { register, login } from "../Controller/AuthController.js";
import { addPet, getPets } from "../Controller/PetController.js";
import { addReview,getAllReviewsByPetId } from "../Controller/ReviewController.js";
import { updateUserProfile } from "../Controller/UserController.js";
import { getPosts,addPost } from "../Controller/PostController.js";
import { getVets,addPortfolio,getPortfolios } from "../Controller/VetController.js";
import { search } from "../Controller/SearchController.js";
import {addTask} from "../Controller/TaskController.js";

const router = Router();


router.post("/register", register);
router.post("/login", login);
router.post("/addPet/:user_id", addPet);
router.get("/getPets/:user_id", getPets);
router.post("/addReview/:user_id/:pet_id", addReview);
router.get("/getAllReviewsByPetId/:pet_id", getAllReviewsByPetId);
router.get("/getVets", getVets);
router.put("/updateUserProfile/:id", updateUserProfile);
router.post("/addPost", addPost);
router.get("/getPosts", getPosts);
router.get("/search/:key", search);
router.post("/addPortfolio", addPortfolio);
router.post("/addTask", addTask);
router.get("/getPortfolios/:id", getPortfolios);



export default router;

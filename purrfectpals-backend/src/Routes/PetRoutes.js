import { Router } from "express";
const router = Router();

import { addPet, getPets } from "../Controller/PetController.js";
import { addReview,getAllReviewsByPetId } from "../Controller/ReviewController.js";


router.post("/addPet/:user_id", addPet);
router.get("/getPets/:user_id", getPets);
router.post("/addReview/:user_id/:pet_id", addReview);
router.get("/getAllReviewsByPetId/:pet_id", getAllReviewsByPetId);


export default router;

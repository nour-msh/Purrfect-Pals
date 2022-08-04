import { Router } from "express";
const router = Router();

import { register, login } from "../Controller/AuthController.js";

router.post("/register", register);
router.post("/login", login);


import { updateUserProfile } from "../Controller/UserController.js";
import { getPosts,addPost } from "../Controller/PostController.js";
import { search } from "../Controller/SearchController.js";
import {addTask} from "../Controller/TaskController.js";
import {addMark,getMark} from "../Controller/LocationController.js";


router.put("/updateUserProfile/:id", updateUserProfile);
router.post("/addPost", addPost);
router.get("/getPosts", getPosts);
router.get("/search/:key", search);
router.post("/addTask", addTask);
router.post("/addMark", addMark);
router.post("/getMark", getMark);


export default router;
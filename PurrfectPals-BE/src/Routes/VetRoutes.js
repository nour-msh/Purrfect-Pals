import { Router } from "express";
const router = Router();

import { getVets,addPortfolio,getPortfolios } from "../Controller/VetController.js";


router.get("/getVets", getVets);
router.post("/addPortfolio", addPortfolio);
router.get("/getPortfolios/:id", getPortfolios);


export default router;

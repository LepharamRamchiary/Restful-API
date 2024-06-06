import express from "express";
import { createEmploye, getAllData } from "./employe.controller.js";

const router = express.Router();

router.post("/create", createEmploye);
router.get("/getalldata", getAllData);



export default router;
import express from "express";
import { createEmploye, getAllData, getSingleData } from "./employe.controller.js";

const router = express.Router();

router.post("/create", createEmploye);
router.get("/getalldata", getAllData);
router.get("/getsingledata/:id", getSingleData);




export default router;
import express from "express";
import { createEmploye } from "./employe.controller.js";

const router = express.Router();

router.post("/create", createEmploye);


export default router;
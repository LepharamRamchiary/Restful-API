import express from "express";
import { createEmploye, deleteEmployee, getAllData, getSingleData, updateEmployee } from "./employe.controller.js";

const router = express.Router();

router.post("/create", createEmploye);
router.get("/getalldata", getAllData);
router.get("/getsingledata/:id", getSingleData);
router.put("/updateemployee/:id", updateEmployee);
router.delete("/deleteemployee/:id", deleteEmployee);




export default router;
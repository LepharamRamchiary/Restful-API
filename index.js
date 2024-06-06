import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import employeRouter from "./employe.route.js";

const PORT = 4000;


const app = express();

// middlewere
app.use(bodyParser.json());

app.use("/api/employe", employeRouter);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DB connected")
}).catch(err => {
    console.log(err);
})


app.listen(PORT, () => {
    console.log(`Server runing on port:${PORT}`)
})

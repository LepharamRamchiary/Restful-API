import mongoose from "mongoose";

const employeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }

})

const Employe = mongoose.model("Employe", employeSchema);

export default Employe;
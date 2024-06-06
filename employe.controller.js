import Employe from "./employe.model.js"
export const createEmploye = async (req, res) => {
    try {
        const employe = new Employe(req.body);
        await employe.save();
        res.status(200).json("Created successfully")

    } catch (error) {
        res.status(400).json("Not created");
    }
};

export const getAllData = async (req, res) => {
    try {
        const employe = await Employe.find();
        res.status(200).json(employe);

    } catch (error) {
        res.status(400).json("Not get all data")
    }
};

export const getSingleData = async (req, res) => {
    try {
        const employe = await Employe.findById(req.params.id);
        if (!employe) {
            return res.status(404).json("Not valid id")
        } else {
            res.status(200).json(employe);
        }

    } catch (error) {
        res.status(400).json("Not get any single data from db");
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const employe = await Employe.findByIdAndUpdate(req.params.id, req.body);
        if (!employe) {
            return res.status(404).json("Not valid id");
        } else {
            res.status(200).json(employe);
        }
    } catch (error) {
        res.status(400).json("Not update the value")
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const employe = await Employe.findByIdAndDelete(req.params.id);
        if (!employe) {
            return res.status(404).json("The id is not valid");
        } else {
            res.status(200).json("delete successfully")
        }
    } catch (error) {
        res.status(400).json("Not delete this data")
    }
}
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


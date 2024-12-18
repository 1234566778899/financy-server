const Letter = require("../db/Schemas/Letter");

const register = async (req, res) => {
    try {
        const newLetter = new Letter(req.body);
        await newLetter.save();
        return res.status(200).json({ ok: 'Successful' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const list = async (req, res) => {
    try {
        const letters = await Letter.find().sort({ createdAt: -1 });
        return res.status(200).json(letters);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
const deleteLetter = async (req, res) => {
    try {
        const { id } = req.params;
        await Letter.deleteOne({ _id: id });
        return res.status(200).json({ ok: 'Successful' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    register,
    list,
    deleteLetter
}


const Letter = require("../db/Schemas/Letter");

const register = async (req, res) => {
    try {
        const { amount, rate, rateType, issueDate, discountDate } = req.body;
        const tcea = calculateTCEA(amount, rate, rateType, issueDate, discountDate);
        const newLetter = new Letter({
            ...req.body,
            tcea
        });
        await newLetter.save();
        return res.status(200).json({ ok: 'Successful' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const calculateTCEA = (amount, rate, rateType, issueDate, discountDate, expenses) => {
    const timeInDays = (new Date(discountDate) - new Date(issueDate)) / (1000 * 60 * 60 * 24);
    const discountAmount = amount * (rate * (timeInDays / 360));
    const netAmount = amount - discountAmount - expenses;
    const tcea = Math.pow((1 + (discountAmount + expenses) / netAmount), 360 / timeInDays) - 1;
    return tcea || 0;
};

const list = async (req, res) => {
    try {
        const letters = await Letter.find().sort({ _id: -1 });
        return res.status(200).json(letters);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    register,
    list
}


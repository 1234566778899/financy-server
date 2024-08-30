const Configuration = require("../db/Schemas/Configuration");

const register = async (req, res) => {
    try {
        return res.status(200).json({ ok: 'Successful' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    register
}


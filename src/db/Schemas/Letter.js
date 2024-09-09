const { Schema, model } = require('mongoose');

const LetterSchema = Schema({
    number: String,
    issueDate: Date,
    expirationDate: Date,
    amount: Number,
    currency: String,
    rateType: String,
    rateCap: Number,
    rate: Number,
    capitalization: Number,
    tcea: Number,
    userId: String,
    admin: Number,
    transfer: Number,
    portes: Number
}, {
    timestamps: true
})

module.exports = model('letter', LetterSchema)
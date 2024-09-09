const { Schema, model } = require('mongoose');

const configurationSchema = Schema({
    userId: String,
    defaultCurrency: String,
    defaultRateType: String,
    defaultDiscountDateOffset: Number,
    createdAt: Date,
    updatedAt: Date
}, {
    timestamps: true
})

module.exports = model('configuration', configurationSchema)
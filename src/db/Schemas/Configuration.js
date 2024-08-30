const { Schema, model } = require('mongoose');

const configurationSchema = Schema({
    userId: String,  // Opcional, si quieres configuraciones personalizadas por usuario
    defaultCurrency: String,  // "Soles" o "Dólares"
    defaultRateType: String,  // "Nominal" o "Efectiva"
    defaultDiscountDateOffset: Number,  // Días predeterminados para la fecha de descuento
    createdAt: Date,
    updatedAt: Date
}, {
    timestamps: true
})

module.exports = model('configuration', configurationSchema)
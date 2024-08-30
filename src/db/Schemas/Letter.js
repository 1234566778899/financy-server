const { Schema, model } = require('mongoose');

const LetterSchema = Schema({
    number: String,  // Número único de la letra/factura
    issueDate: Date,  // Fecha de emisión
    discountDate: Date,  // Fecha de descuento
    amount: Number,  // Monto de la letra/factura
    currency: String,  // "Soles" o "Dólares"
    rateType: String,  // "Nominal" o "Efectiva"
    rate: Number,  // Porcentaje de la tasa
    tcea: Number,  // Tasa de Costo Efectivo Anual calculada
    expenses: Number,  // Comisiones y otros gastos
    userId: String,  // Referencia al usuario que registró la letra/factura
    createdAt: Date,
    updatedAt: Date
}, {
    timestamps: true
})

module.exports = model('letter', LetterSchema)
const { Schema, model } = require('mongoose');

const LetterSchema = Schema({
    doc: String,
    valor: Number,
    emision: Date,
    vencimiento: Date,
    banco: String,
    tasa: Number,
    moneda: String,
    admin: Number,
    transferencia: Number,
    portes: Number,
    seguro: Number
}, {
    timestamps: true
})

module.exports = model('letter', LetterSchema)
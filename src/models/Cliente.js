const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    alterEgo: {
        type: String,
        required: true
    },
    powers: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Cliente', clienteSchema);
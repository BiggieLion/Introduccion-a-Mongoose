const {Schema, model} = require('mongoose');

const articuloEsquema = new Schema({
    codigo: {
        type: Number,
        required: true
    },

    nombre: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: false,
        default: "Sin descripcion"
    },

    precio: {
        type: Number,
        required: false,
        default: 0
    }
});

module.exports = model('articulos', articuloEsquema);
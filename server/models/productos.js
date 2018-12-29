const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const _ = require('underscore');

let productoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    precioUni: {
        type: Number,
        required: [true, 'El precio unitario es necesario']
    },
    descripcion: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});


module.exports = mongoose.model('Producto', productoSchema);
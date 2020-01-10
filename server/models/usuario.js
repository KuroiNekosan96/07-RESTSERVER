const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'El correo es requerido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    //Poner parametros
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    goole: {
        type: Boolean,
        default: false
    }

});
/*
let categoriaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    }

});

let productosSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    precioUni: {
        type: Number,
        required: [true, 'El precio es requerido']
    },
    disponible: {
        type: Boolean,
        default: true
    }
});
*/
module.exports = mongoose.model('Usuario', usuarioSchema);
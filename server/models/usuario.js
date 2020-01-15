const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-beautiful-unique-validation')

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        unique: true,
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
        default: 'USER_ROLE',
        enum: rolesValidos
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

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
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
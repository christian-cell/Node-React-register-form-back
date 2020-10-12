const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formularioSchema = new Schema(
    {
        nombreApellidos : {type:String , required:true},
        password : {type:String ,required:true}
    },
    {
        timestamps:true
    }
);

const Formulario = mongoose.model('Formulario', formularioSchema);
module.exports = Formulario;
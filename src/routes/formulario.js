const express = require('express');
const Formulario = require('../models/Formulario');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const formularioRouter = express.Router();

formularioRouter.post('/' , (req , res, next)=>{
    const nombreApellidos = req.body.nombreApellidos;
    const password = req.body.password;

    bcrypt.hash(password , saltRounds , function(err , hash){
        const formulario = new Formulario();

        formulario.nombreApellidos = nombreApellidos;
        formulario.password = hash;

        res.json(formulario);

        formulario.save()
        .then((newFormulario)=>{
            res.json(newFormulario);
        })
        .catch((error)=>{
            res.send(error)
        })
    })
})

module.exports = formularioRouter ;

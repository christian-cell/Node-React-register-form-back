const express = require('express');
const cors = require('cors');
const formularioRoutes = require('./routes/formulario');

require('./db');

const PORT = 3001;
const server = express();
server.use(cors())
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.use('/formulario' , formularioRoutes);

server.listen(PORT , ()=>{
    console.log(`escuchando en el http://localhost: ${PORT}`)
})
const express = require('express');
const router = express.Router();

//importando datos 
const datos = require('../model/datos');

// mostrar todos los usuarios

router.get('/admin/usuarios' , (req,res) =>{
    res.render("usuariosAdmin",{
        data: datos
    })
})



module.exports= router;

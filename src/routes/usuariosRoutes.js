const express = require('express');
const router = express.Router();

//importando datos 
const datos = require('../model/datos');


// mostrar todos los usuarios

router.get('/usuarios' , (req,res) =>{
    res.render("usuariosPublico",{
        data: datos
    })
})

//obtener un usuario

router.get('/usuarios/:id' , (req,res) =>{
    res.send(`Obteniendo el usuario con id : ${req.params.id}`);

})

// Crear un usuario

router.post('/usuarios' , (req,res)=>{
    res.send("Creando un usuario")
})

//Actualizar un usuario

router.put('/usuarios/:id' , (req,res) =>{
    res.send("Actualizando un usuario")
})

//Borrar un usuario

router.delete('/usuarios/:id' , (req,res) =>{
    res.send("Borrando un usuario..")
})




module.exports = router;
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
    const usuario = datos.find((usuario) =>{
        return usuario.id == req.params.id;
    })
    // console.log(usuario);
    if (!usuario){ // si el objeto no existe 
        return res.status(404).send("Usuario no encontrado")
    }
    res.render("usuarioPerfil" , {
        data: usuario
    }) // le mando la variable filtrada 

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
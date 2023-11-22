const express = require('express');
const router = express.Router();

//importando datos 
const datos = require('../model/datos');
const datosFalsos = require('../model/datos');

// mostrar todos los usuarios

router.get('/admin/usuarios' , (req,res) =>{
    res.render("usuariosAdmin",{
        data: datos
    })
})



//Crear usuario


//mostra el formulario
router.get("/admin/usuarios/crear", (req,res) =>{
    res.render("usuarioCrear", {

    })
})

// envia los datos del formulario
router.post("/admin/usuarios",(req,res) =>{
    //toma info del formulario
    const nuevoUsuario = req.body;
    console.log(nuevoUsuario);
    nuevoUsuario.id = datos.length + 1; //12+1
    datos.push(nuevoUsuario);
    console.log(datos)
    res.status(201).send(nuevoUsuario)
})


//obtener un usuario
router.get('/admin/usuarios/:id' , (req,res) =>{
    const usuario = datos.find((usuario) =>{
        return usuario.id == req.params.id;
    })
    // console.log(usuario);
    if (!usuario){ // si el objeto no existe 
        return res.status(404).send("Usuario no encontrado")
    }
    res.render("usuarioPerfilAdmin" , {
        data: usuario
    }) // le mando la variable filtrada 

})

//Actualizar usuario
router.post('/admin/usuarios/:id' , (req,res) =>{
    console.log(req.body)
    res.send(req.body)
});

//eliminar usuario. no requiere una vista

router.get("/admin/usuarios/borrar/:id" , (req,res) =>{
    
})



module.exports= router;

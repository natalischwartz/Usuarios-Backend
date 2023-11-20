const express = require('express')
const app = express()
const port = 3000

//home
app.get('/', (req, res) => {
  res.send('Hola mundo')
})

// mostrar todos los usuarios

app.get('/usuarios' , (req,res) =>{

})

//obtener un usuario

app.get('/usuarios/:id' , (req,res) =>{

})

// Crear un usuario

app.post('/usuarios' , (req,res)=>{

})

//Actualizar un usuario

app.put('/usuarios/:id' , (req,res) =>{

})

//Borrar un usuario

app.delete('/usuarios/:id' , (req,res) =>{

})







app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
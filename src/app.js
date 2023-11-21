const express = require('express')
const app = express()
const port = 3000

const usuariosRoutes = require('./routes/usuariosRoutes');
const usuariosAdmin = require('./routes/usuariosAdmin');

//middleware para archivos estaticos


//Motor de plantilla
app.set("view engine" , "ejs")
app.set("views", "src/views")

//Layouts

//middlewares
//url encoded para que capture el cuerpo de la peticion


//home
app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.use('/', usuariosRoutes);
app.use('/' , usuariosAdmin);






app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
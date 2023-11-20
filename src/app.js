const express = require('express')
const app = express()
const port = 3000

const usuariosRoutes = require('./routes/usuariosRoutes');

//home
app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.use('/', usuariosRoutes);






app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
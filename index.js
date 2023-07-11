const express = require('express') //Invoca a express require = indica que utilizará express 
const alumnosRoutes = require('./src/Routes/alumnos_routes.js') //Importar las rutas alumnos 
const profesoresRoutes = require('./src/Routes/profesor_routes.js')
const bodyParser = require('body-parser')
const app = express() //Crea una instancia de express


app.use(bodyParser.urlencoded({ extended: false })) //Dependencias /configuraciones para leer 
app.use(bodyParser.json()) //archivos tipo JSON

app.use(alumnosRoutes)
app.use(profesoresRoutes)

app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000 🚀')
})
const express = require('express')
const alumnosJson = require('../Models/alumnos.json')

const route = express.Router()

//Aquí debo ponder todo mi CRUD de alumnos

route.get('/obtenerAlumnos', (req, res) => { //Endpoint
    res.json(alumnosJson)
})

route.post('/agregarAlumno', (req, res) => {
    alumnosJson.alumnos.push(req.body)
    res.json(alumnosJson)
})

route.patch('/actualizarAlumno', (req, res) => {
    res.json({message:"Esto es el patch de alumnos"})
})

route.delete('/eliminarAlumno', (req, res) => {
    res.json({message:"Esto es el delete de alumnos"})
})

module.exports = route
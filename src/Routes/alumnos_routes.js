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
    const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta)
    console.log(index);

    if (index >= 0) {
        alumnosJson.alumnos[index] = req.body
        return res.json(alumnosJson)
    } else {
        return res.json({message:"No existe alumno"})
    }
})

route.delete('/eliminarAlumno', (req, res) => {
    const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta)
    console.log(index);

    if (index >= 0) {
        alumnosJson.alumnos.splice(index, 1)
        return res.json(alumnosJson)
    } else {
        return res.json({message:"No existe alumno"})
    }
})

module.exports = route
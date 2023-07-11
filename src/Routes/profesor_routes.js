const express = require('express')
const route = express.Router();

route.get('/obtenerProfesores' , (req, res) => {
    res.json({message: "Aquí están todos los profesores"})
})

module.exports = route
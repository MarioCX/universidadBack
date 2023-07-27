const express = require('express')
const route = express.Router();

route.get('/obtenerProfesores', (req, res) => {
    res.json({message:"Aqui estan tooos los profesores"})
})

module.exports = route
const express = require('express')
const router = express.Router()
const alumnoController = require('../Controllers/alumnoController');

// Estas son las rutas de mi API
router.get('/obtenerAlumnos', alumnoController.obtenerAlumnos);
router.post('/agregarAlumno', alumnoController.agregarAlumno);
router.patch('/actualizarAlumno', alumnoController.actualizarAlumno);
router.delete('/borrarAlumno', alumnoController.borrarAlumno);

module.exports = router;
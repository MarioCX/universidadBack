const express = require("express");
const controller = require("../Controllers/profesor_controller");

const route = express.Router();

// Aqui debo poner todo mi CRUD de ALumnos


route.get("/obtenerProfesor", controller.getProfesores);

route.post("/agregarProfesor", controller.addProfesor);

route.patch("/actualizarProfesor", controller.deleteProfesor);

route.delete("/borrarProfesor/:id", controller.updateProfesor);

module.exports = route;
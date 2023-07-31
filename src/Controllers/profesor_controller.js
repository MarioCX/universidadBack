const profesoresJson = require("../Models/profesores.json");

const getProfesores = (req, res) => {
  res.json(profesoresJson);
};

const addProfesor = (req, res) => {
    const { id, nombre, campus, facultad, materia, email } =
      req.body;

    id = parseInt(id);
    let profesor = { nombre, campus, facultad, materia, email };
  
    console.log(profesor);
  
    profesoresJson.profesor.push(profesor);
    res.json(profesoresJson);
  };

  const deleteProfesor = (req, res) => {
    const index = profesoresJson.alumnos.findIndex(
      (profesor) => profesor.id === req.body.id
    );
    console.log(index);
  
    if (index >= 0) {
      profesoresJson.profesor[index] = req.body;
      return res.json(profesoresJson);
    } else {
      return res.json({ message: "No existe el profesor" });
    }
  };

  function updateProfesor(req, res) {
    const id = req.params.id;
    console.log(id);
  
    let profesoresFilter = profesoresJson.profesores.filter((profesor) => profesor.id !== id);
    console.log(profesoresFilter);
  
    if (profesoresFilter.length >= 0) {
      return res.json({ status: true, profesoresFilter: profesoresFilter });
    } else {
      return res.json({ status: false });
    }
  }
  
  module.exports = { getProfesores, addProfesor, deleteProfesor, updateProfesor};
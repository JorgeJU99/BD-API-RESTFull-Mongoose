const Autor = require("../models/autor.model");

function getAutores(req, res) {
  Autor.find((error, autorList) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (autorList) {
        res.status(200).json({
          autor: autorList,
        });
      } else {
        res.status(200).send({
          message: "No se pudo listar los autores",
        });
      }
    }
  });
}

function postAutores(req, res) {
  const { nombre, apellido, edad, ciudad } = req.body;
  const autor = new Autor({
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    ciudad: ciudad,
  });
  if (nombre && apellido && edad && ciudad) {
    autor.save((error, autorStored) => {
      if (error) {
        res.status(500).send({
          message: error.message,
        });
      } else {
        if (autorStored) {
          res.status(200).send({
            autor: autorStored,
          });
        } else {
          res.status(200).send({
            message: "No se pudo guardar el autor",
          });
        }
      }
    });
  } else {
    res.status(200).send({
      message: "Datos obligatorios",
    });
  }
}

module.exports = {
  getAutores,
  postAutores,
};

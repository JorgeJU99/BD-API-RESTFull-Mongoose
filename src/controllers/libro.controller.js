const Libro = require("../models/libro.model");

function getLibros(req, res) {
  Libro.find((error, libroList) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (libroList) {
        res.status(200).json({
          libro: libroList,
        });
      } else {
        res.status(200).send({
          message: "No se pudo listar los libros",
        });
      }
    }
  });
}

function postLibro(req, res) {
  const { titulo, autor, hojas } = req.body;
  const libro = new Libro({
    titulo: titulo,
    autor: autor,
    hojas: hojas,
  });
  if (titulo) {
    libro.save((error, libroStored) => {
      if (error) {
        res.status(500).send({
          message: error.message,
        });
      } else {
        if (libroStored) {
          res.status(200).send({
            libro: libroStored,
          });
        } else {
          res.status(200).send({
            message: "No se pudo guardar libro",
          });
        }
      }
    });
  } else {
    res.status(200).send({
      message: "Titulo obligatorio",
    });
  }
}

module.exports = {
  getLibros,
  postLibro,
};

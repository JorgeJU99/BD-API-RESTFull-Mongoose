const Libro = require("../models/libro.model");

function getLibros(req, res) {
  Libro.find({})
    .sort({ _id: -1 })
    .exec((error, libroList) => {
      if (error) {
        res.status(500).send({
          message: error,
        });
      } else {
        if (libroList) {
          res.status(200).json({
            libros: libroList,
          });
        } else {
          res.status(200).send({
            message: "No se pudo listar los libros",
          });
        }
      }
    });
}

function getLibrosById(req, res) {
  const id = req.params.id;
  Libro.findById(id).exec((error, libroList) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (libroList) {
        res.status(200).json({
          libros: libroList,
        });
      } else {
        res.status(200).send({
          message: "No se pudo listar los libros",
        });
      }
    }
  });
}

function createLibros(req, res) {
  const { titulo, autor, hojas } = req.body;
  const libro = new Libro({
    titulo: titulo,
    autor: autor,
    hojas: hojas,
  });
  if (titulo) {
    libro.save((error, libroCreate) => {
      if (error) {
        res.status(500).send({
          message: error.message,
        });
      } else {
        if (libroCreate) {
          res.status(200).send({
            libro: libroCreate,
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

function updateLibros(req, res) {
  const id = req.params.id;
  const data = req.body;
  Libro.findByIdAndUpdate(id, data, { new: true }, (error, librosUpdate) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (librosUpdate) {
        res.status(200).json({
          libros: librosUpdate,
        });
      } else {
        res.status(200).send({
          message: "No se pudo actualizar el libro",
        });
      }
    }
  });
}

function deleteLibros(req, res) {
  const id = req.params.id;
  Libro.findByIdAndRemove(id, (error, librosDelete) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (librosDelete) {
        res.status(200).json({
          libros: librosDelete,
        });
      } else {
        res.status(200).send({
          message: "No se pudo eliminar el libro",
        });
      }
    }
  });
}

module.exports = {
  getLibros,
  getLibrosById,
  createLibros,
  updateLibros,
  deleteLibros,
};

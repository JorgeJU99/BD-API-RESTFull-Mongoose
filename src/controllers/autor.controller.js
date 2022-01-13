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

function getAutoresById(req, res) {
  const id = req.params.id;
  Autor.findById(id).exec((error, autorList) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (autorList) {
        res.status(200).json({
          autores: autorList,
        });
      } else {
        res.status(200).send({
          message: "No se pudo listar los autores",
        });
      }
    }
  });
}

function createAutores(req, res) {
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
function updateAutores(req, res) {
  const id = req.params.id;
  const data = req.body;
  Autor.findByIdAndUpdate(id, data, { new: true }, (error, autoresUpdate) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (autoresUpdate) {
        res.status(200).json({
          autores: autoresUpdate,
        });
      } else {
        res.status(200).send({
          message: "No se pudo actualizar el autor",
        });
      }
    }
  });
}

function deleteAutores(req, res) {
  const id = req.params.id;
  Autor.findByIdAndRemove(id, (error, autorDelete) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (autorDelete) {
        res.status(200).json({
          autores: autorDelete,
        });
      } else {
        res.status(200).send({
          message: "No se pudo eliminar el autor",
        });
      }
    }
  });
}

module.exports = {
  getAutores,
  getAutoresById,
  createAutores,
  updateAutores,
  deleteAutores,
};

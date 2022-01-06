const mongoose = require("mongoose");

const libroSchema = mongoose.Schema({
  titulo: String,
  autor: String,
  hojas: Number,
});

const libros = mongoose.model("Libros", libroSchema);

module.exports = libros;

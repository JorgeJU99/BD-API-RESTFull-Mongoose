const mongoose = require("mongoose");

const autorSchema = mongoose.Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  ciudad: String,
});

const autores = mongoose.model("Autores", autorSchema);

module.exports = autores;

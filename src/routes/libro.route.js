const { Router } = require("express");
const router = Router();

const {
  getLibros,
  getLibrosById,
  createLibros,
  updateLibros,
  deleteLibros,
} = require("../controllers/libro.controller");

router.get("/libros", getLibros);
router.get("/libros/:id", getLibrosById);
router.post("/libros", createLibros);
router.put("/libros/:id", updateLibros);
router.delete("/libros/:id", deleteLibros);

module.exports = router;

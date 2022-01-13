const { Router } = require("express");
const router = Router();

const {
  getAutores,
  getAutoresById,
  createAutores,
  updateAutores,
  deleteAutores,
} = require("../controllers/autor.controller");

router.get("/autores", getAutores);
router.get("/autores/:id", getAutoresById);
router.post("/autores", createAutores);
router.put("/autores/:id", updateAutores);
router.delete("/autores/:id", deleteAutores);

module.exports = router;

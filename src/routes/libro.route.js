const { Router } = require("express");
const router = Router();

const { getLibros, postLibro } = require("../controllers/libro.controller");

router.get("/libros", getLibros);
router.post("/libros", postLibro);

module.exports = router;

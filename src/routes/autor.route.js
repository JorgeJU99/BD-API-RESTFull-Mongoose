const { Router } = require("express");
const router = Router();

const { getAutores, postAutores } = require("../controllers/autor.controller");

router.get("/autores", getAutores);
router.post("/autores", postAutores);

module.exports = router;

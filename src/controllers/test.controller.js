function test(req, res) {
  res.status(200).send({
    message: "Ruta de prueba, Hello World",
  });
}

module.exports = {
  test,
};

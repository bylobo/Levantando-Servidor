const express = require("express");
const app = express();

app.get("/servidor", function (req, res) {
  res.send("Servidor Levantado");
});

app.listen(3000);
console.log("servidor listo");

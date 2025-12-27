const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/estado", (req, res) => {
  res.json({
    status: "OK",
    entorno: process.env.NODE_ENV || "local",
    timestamp: new Date(),
  });
});

// Solo arrancar servidor si no estamos en tests
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
  });
}

module.exports = app; // exportar para Supertest

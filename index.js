const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta extra (para que no sea trivial)
app.get('/estado', (req, res) => {
  res.json({
    status: 'OK',
    entorno: process.env.NODE_ENV || 'local',
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});

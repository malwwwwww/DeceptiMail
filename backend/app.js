const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/emails');

const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Permite solicitudes desde el frontend
app.use(express.json()); // Parsea cuerpos JSON

// Rutas
app.use('/api', emailRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
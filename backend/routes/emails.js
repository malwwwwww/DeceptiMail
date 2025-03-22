const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Ruta para obtener todos los correos
router.get('/emails', emailController.getEmails);

// Ruta para verificar una respuesta
router.post('/check', emailController.checkAnswer);

module.exports = router;
// Este archivo es opcional para el MVP (datos estáticos).
// Si usas MongoDB con Mongoose en el futuro, podrías adaptarlo así:

// const mongoose = require('mongoose');
// const emailSchema = new mongoose.Schema({
//   sender: String,
//   subject: String,
//   body: String,
//   links: [String],
//   isPhishing: Boolean,
//   explanation: String
// });
// module.exports = mongoose.model('Email', emailSchema);

// Por ahora, solo documentamos la estructura:
const emailStructure = {
    id: 'number',
    sender: 'string',
    subject: 'string',
    body: 'string',
    links: ['string'],
    isPhishing: 'boolean',
    explanation: 'string'
  };
  
  module.exports = emailStructure;
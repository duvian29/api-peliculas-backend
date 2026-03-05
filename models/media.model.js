const { Schema, model } = require('mongoose');

const MediaSchema = new Schema({
  serial: {
    type: String,
    required: [true, 'El serial es obligatorio'],
    unique: true,
    trim: true
  },
  titulo: {
    type: String,
    required: [true, 'El titulo es obligatorio'],
    trim: true
  },
  sinopsis: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    required: [true, 'La URL es obligatoria'],
    unique: true,
    trim: true
  },
  imagen: {
    type: String,
    trim: true
  },
  anioEstreno: {
    type: Number,
    required: true
  },

  genero: {
    type: Schema.Types.ObjectId,
    ref: 'Genero',
    required: true
  },

  director: {
    type: Schema.Types.ObjectId,
    ref: 'Director',
    required: true
  },

  productora: {
    type: Schema.Types.ObjectId,
    ref: 'Productora',
    required: true
  },

  tipo: {
    type: Schema.Types.ObjectId,
    ref: 'Tipo',
    required: true
  }

}, {
  timestamps: true
});

module.exports = model('Media', MediaSchema);
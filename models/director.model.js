const { Schema, model } = require('mongoose');

const DirectorSchema = new Schema({
  nombres: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = model('Director', DirectorSchema);
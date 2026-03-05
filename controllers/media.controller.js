const Media = require('../models/media.model');
const Genero = require('../models/genero.model');
const Director = require('../models/director.model');
const Productora = require('../models/productora.model');
const Tipo = require('../models/tipo.model');

// CREAR MEDIA
const crearMedia = async (req, res) => {
  try {

    const { genero, director, productora, tipo } = req.body;

    // Validar género activo
    const generoDB = await Genero.findById(genero);
    if (!generoDB || !generoDB.estado) {
      return res.status(400).json({ message: 'Género no válido o inactivo' });
    }

    // Validar director activo
    const directorDB = await Director.findById(director);
    if (!directorDB || !directorDB.estado) {
      return res.status(400).json({ message: 'Director no válido o inactivo' });
    }

    // Validar productora activa
    const productoraDB = await Productora.findById(productora);
    if (!productoraDB || !productoraDB.estado) {
      return res.status(400).json({ message: 'Productora no válida o inactiva' });
    }

    // Validar tipo
    const tipoDB = await Tipo.findById(tipo);
    if (!tipoDB) {
      return res.status(400).json({ message: 'Tipo no válido' });
    }

    const media = new Media(req.body);
    await media.save();

    res.status(201).json(media);

  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Serial o URL ya existen'
      });
    }

    res.status(500).json({ error: error.message });
  }
};

// OBTENER TODAS (con populate 🔥)
const obtenerMedias = async (req, res) => {
  try {

    const medias = await Media.find()
      .populate('genero')
      .populate('director')
      .populate('productora')
      .populate('tipo');

    res.json(medias);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearMedia,
  obtenerMedias
};
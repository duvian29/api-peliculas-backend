const Genero = require('../models/genero.model');

// CREAR
const crearGenero = async (req, res) => {
  try {
    const genero = new Genero(req.body);
    await genero.save();
    res.status(201).json(genero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// OBTENER TODOS
const obtenerGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// OBTENER POR ID
const obtenerGeneroPorId = async (req, res) => {
  try {
    const genero = await Genero.findById(req.params.id);

    if (!genero) {
      return res.status(404).json({ message: 'Genero no encontrado' });
    }

    res.json(genero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ACTUALIZAR
const actualizarGenero = async (req, res) => {
  try {
    const genero = await Genero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!genero) {
      return res.status(404).json({ message: 'Genero no encontrado' });
    }

    res.json(genero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ELIMINAR 
const eliminarGenero = async (req, res) => {
  try {
    const genero = await Genero.findByIdAndDelete(req.params.id);

    if (!genero) {
      return res.status(404).json({ message: 'Genero no encontrado' });
    }

    res.json({ message: 'Genero eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearGenero,
  obtenerGeneros,
  obtenerGeneroPorId,
  actualizarGenero,
  eliminarGenero
};
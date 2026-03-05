const Director = require('../models/director.model');

// CREAR
const crearDirector = async (req, res) => {
  try {
    const director = new Director(req.body);
    await director.save();
    res.status(201).json(director);
  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Ya existe un director con ese nombre'
      });
    }

    res.status(500).json({ error: error.message });
  }
};

// OBTENER TODOS
const obtenerDirectores = async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// OBTENER POR ID
const obtenerDirectorPorId = async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);

    if (!director) {
      return res.status(404).json({ message: 'Director no encontrado' });
    }

    res.json(director);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ACTUALIZAR
const actualizarDirector = async (req, res) => {
  try {
    const director = await Director.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!director) {
      return res.status(404).json({ message: 'Director no encontrado' });
    }

    res.json(director);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ELIMINAR
const eliminarDirector = async (req, res) => {
  try {
    const director = await Director.findByIdAndDelete(req.params.id);

    if (!director) {
      return res.status(404).json({ message: 'Director no encontrado' });
    }

    res.json({ message: 'Director eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearDirector,
  obtenerDirectores,
  obtenerDirectorPorId,
  actualizarDirector,
  eliminarDirector
};
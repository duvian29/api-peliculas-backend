const Tipo = require('../models/tipo.model');

// CREAR
const crearTipo = async (req, res) => {
  try {
    const tipo = new Tipo(req.body);
    await tipo.save();
    res.status(201).json(tipo);
  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Ya existe un tipo con ese nombre'
      });
    }

    res.status(500).json({ error: error.message });
  }
};

// OBTENER TODOS
const obtenerTipos = async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// OBTENER POR ID
const obtenerTipoPorId = async (req, res) => {
  try {
    const tipo = await Tipo.findById(req.params.id);

    if (!tipo) {
      return res.status(404).json({ message: 'Tipo no encontrado' });
    }

    res.json(tipo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ACTUALIZAR
const actualizarTipo = async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!tipo) {
      return res.status(404).json({ message: 'Tipo no encontrado' });
    }

    res.json(tipo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ELIMINAR
const eliminarTipo = async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndDelete(req.params.id);

    if (!tipo) {
      return res.status(404).json({ message: 'Tipo no encontrado' });
    }

    res.json({ message: 'Tipo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearTipo,
  obtenerTipos,
  obtenerTipoPorId,
  actualizarTipo,
  eliminarTipo
};
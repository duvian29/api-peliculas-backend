const Productora = require('../models/productora.model');

// CREAR
const crearProductora = async (req, res) => {
  try {
    const productora = new Productora(req.body);
    await productora.save();
    res.status(201).json(productora);
  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Ya existe una productora con ese nombre'
      });
    }

    res.status(500).json({ error: error.message });
  }
};

// OBTENER TODAS
const obtenerProductoras = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// OBTENER POR ID
const obtenerProductoraPorId = async (req, res) => {
  try {
    const productora = await Productora.findById(req.params.id);

    if (!productora) {
      return res.status(404).json({ message: 'Productora no encontrada' });
    }

    res.json(productora);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ACTUALIZAR
const actualizarProductora = async (req, res) => {
  try {
    const productora = await Productora.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!productora) {
      return res.status(404).json({ message: 'Productora no encontrada' });
    }

    res.json(productora);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ELIMINAR
const eliminarProductora = async (req, res) => {
  try {
    const productora = await Productora.findByIdAndDelete(req.params.id);

    if (!productora) {
      return res.status(404).json({ message: 'Productora no encontrada' });
    }

    res.json({ message: 'Productora eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearProductora,
  obtenerProductoras,
  obtenerProductoraPorId,
  actualizarProductora,
  eliminarProductora
};
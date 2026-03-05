const { Router } = require('express');
const {
  crearProductora,
  obtenerProductoras,
  obtenerProductoraPorId,
  actualizarProductora,
  eliminarProductora
} = require('../controllers/productora.controller');

const router = Router();

router.post('/', crearProductora);
router.get('/', obtenerProductoras);
router.get('/:id', obtenerProductoraPorId);
router.put('/:id', actualizarProductora);
router.delete('/:id', eliminarProductora);

module.exports = router;
const { Router } = require('express');
const {
  crearGenero,
  obtenerGeneros,
  obtenerGeneroPorId,
  actualizarGenero,
  eliminarGenero
} = require('../controllers/genero.controller');

const router = Router();

router.post('/', crearGenero);
router.get('/', obtenerGeneros);
router.get('/:id', obtenerGeneroPorId);
router.put('/:id', actualizarGenero);
router.delete('/:id', eliminarGenero);

module.exports = router;
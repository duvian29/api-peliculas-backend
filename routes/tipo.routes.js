const { Router } = require('express');
const {
  crearTipo,
  obtenerTipos,
  obtenerTipoPorId,
  actualizarTipo,
  eliminarTipo
} = require('../controllers/tipo.controller');

const router = Router();

router.post('/', crearTipo);
router.get('/', obtenerTipos);
router.get('/:id', obtenerTipoPorId);
router.put('/:id', actualizarTipo);
router.delete('/:id', eliminarTipo);

module.exports = router;
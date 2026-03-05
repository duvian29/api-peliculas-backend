const { Router } = require('express');
const {
  crearDirector,
  obtenerDirectores,
  obtenerDirectorPorId,
  actualizarDirector,
  eliminarDirector
} = require('../controllers/director.controller');

const router = Router();

router.post('/', crearDirector);
router.get('/', obtenerDirectores);
router.get('/:id', obtenerDirectorPorId);
router.put('/:id', actualizarDirector);
router.delete('/:id', eliminarDirector);

module.exports = router;
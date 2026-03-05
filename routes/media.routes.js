const { Router } = require('express');
const {
  crearMedia,
  obtenerMedias
} = require('../controllers/media.controller');

const router = Router();

router.post('/', crearMedia);
router.get('/', obtenerMedias);

module.exports = router;
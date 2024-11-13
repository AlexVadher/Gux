// src/routes/parqueaderoRoutes.js
const express = require('express');
const router = express.Router();
const {obtenerParqueaderos,
obtenerParqueaderoPorId,
crearParqueadero,
actualizarParqueadero,
eliminarParqueadero} = require('../controllers/parkingController');

// Ruta para obtener todos los parqueaderos
router.get('/', obtenerParqueaderos);

// Ruta para obtener un parqueadero por ID
router.get('/:id', obtenerParqueaderoPorId);

// Ruta para crear un nuevo parqueadero
router.post('/', crearParqueadero);

// Ruta para actualizar un parqueadero por ID
router.put('/:id', actualizarParqueadero);

// Ruta para eliminar un parqueadero por ID
router.delete('/:id', eliminarParqueadero);

module.exports = router;

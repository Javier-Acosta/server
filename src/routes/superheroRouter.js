const express = require('express');
const router = express.Router();
const {
    getSuperheros,
    getSuperheroById,
    createSuperhero,
    updateSuperhero,
    deleteSuperhero
} = require('../controllers/superheroController');
const { authenticateToken, hasPermission } = require('../middleware/authMiddleware');

// Rutas públicas
//Verifricamos si el usuario tiene acceso y luego verificamos si tiene permisos
router.get('/', authenticateToken, hasPermission('read:cliente'), getSuperheros);
router.get('/:id', authenticateToken, hasPermission('read:cliente'), getSuperheroById);

// Rutas protegidas
router.post('/', authenticateToken, hasPermission('create:cliente'), createSuperhero);

router.put('/:id', authenticateToken, hasPermission('update:cliente'), updateSuperhero);

router.delete('/:id', authenticateToken, hasPermission('delete:cliente'), deleteSuperhero);

module.exports = router;
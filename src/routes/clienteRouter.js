const express = require('express');
const router = express.Router();
const {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
} = require('../controllers/clienteController');
const { authenticateToken, hasPermission } = require('../middleware/authMiddleware');

// Rutas públicas
//Verifricamos si el usuario tiene acceso y luego verificamos si tiene permisos
router.get('/', authenticateToken, hasPermission('read:cliente'), getClientes);
router.get('/:id', authenticateToken, hasPermission('read:cliente'), getClienteById);

// Rutas protegidas
router.post('/', authenticateToken, hasPermission('create:cliente'), createCliente);

router.put('/:id', authenticateToken, hasPermission('update:cliente'), updateCliente);

router.delete('/:id', authenticateToken, hasPermission('delete:cliente'), deleteCliente);

module.exports = router;
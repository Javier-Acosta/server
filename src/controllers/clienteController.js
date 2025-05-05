const { validationResult } = require('express-validator');
const clienteService = require('../services/clienteService');

exports.getClientes = async(req, res) => {
    try {
        console.log('Obteniendo lista de clientes', {
            page: req.query.page,
            limit: req.query.limit
        });

        const result = await clienteService.getAll(
            parseInt(req.query.page),
            parseInt(req.query.limit)
        );

        console.log('Clientes obtenidos exitosamente', {
            count: result.data.length,
            pagination: result.pagination
        });

        res.json(result);
    } catch (error) {
        console.log('Error obteniendo clientes:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

exports.getClienteById = async(req, res) => {
    try {
        console.log('Buscando cliente por ID', { id: req.params.id });

        const cliente = await clienteService.getById(req.params.id);

        console.log('Cliente encontrado exitosamente', {
            clienteId: cliente._id,
            clienteName: cliente.name
        });

        res.json(cliente);
    } catch (error) {
        console.log('Error obteniendo cliente:', error);
        res.status(error.message === 'cliente no encontrado' ? 404 : 500)
            .json({ message: error.message || 'Error en el servidor' });
    }
};

exports.createCliente = async(req, res) => {
    try {

        console.log('Creando nuevo ate', {
            clienteData: {...req.body, password: undefined }
        });

        const cliente = await clienteService.create(req.body);

        console.log('cliente creado exitosamente', {
            clienteId: cliente._id,
            clienteName: cliente.name
        });

        res.status(201).json(cliente);
    } catch (error) {
        console.log('Error creando cliente:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

exports.updateCliente = async(req, res) => {
    try {


        console.log('Actualizando cliente', {
            id: req.params.id,
            updateData: req.body
        });

        const cliente = await clienteService.update(req.params.id, req.body);

        console.log('cliente actualizado exitosamente', {
            clienteId: cliente._id,
            clienteName: cliente.name
        });

        res.json(cliente);
    } catch (error) {
        console.log('Error actualizando superhéroe:', error);
        res.status(error.message === 'cliente no encontrado' ? 404 : 500)
            .json({ message: error.message || 'Error en el servidor' });
    }
};

exports.deleteCliente = async(req, res) => {
    console.log('Usuario autenticado:', req.user);
    try {
        console.log('Eliminando cliente', { id: req.params.id });

        await clienteService.delete(req.params.id);

        console.log('cliente eliminado exitosamente', { id: req.params.id });

        res.json({ message: 'cliente eliminado exitosamente' });
    } catch (error) {
        console.log('Error eliminando cliente:', error);
        res.status(error.message === 'cliente no encontrado' ? 404 : 500)
            .json({ message: error.message || 'Error en el servidor' });
    }
};
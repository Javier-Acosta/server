const Cliente = require('../models/Cliente');

class ClienteService {
    async getAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;

        const clientes = await Cliente.find()

        .skip(skip)
            .limit(limit);

        const total = await Cliente.countDocuments();

        return {
            data: clientes,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalItems: total
            }
        };
    }

    async getById(id) {
        const cliente = await Cliente.findById(id);
        if (!cliente) {
            throw new Error('Superhéroe no encontrado');
        }
        return cliente;
    }

    async create(clienteData) {
        const cliente = new Superhero(clienteData);
        await cliente.save();
        cliente.id = cliente._id;
        return cliente;
    }

    async update(id, clienteData) {
        const cliente = await Cliente.findByIdAndUpdate(
            id,
            clienteData, { new: true }
        );

        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }

        return cliente;
    }

    async delete(id) {
        const cliente = await Cliente.findByIdAndDelete(id);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        return cliente;
    }
}

module.exports = new ClienteService();
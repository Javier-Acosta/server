const mongoose = require('mongoose');
//los permisos  vana a tener un nombre y una descripción 
const permissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
});

// Exportar el modelo
const Permission = mongoose.model('Permission', permissionSchema);
module.exports = Permission;
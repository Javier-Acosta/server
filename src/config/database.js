const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000
        });

        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.log('Error conectando a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
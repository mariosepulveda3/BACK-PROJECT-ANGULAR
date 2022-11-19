const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

if (!DB_URL) throw new Error('URL not found in database');

const connectDb = async () => {
    try {
        const db = await mongoose.connect(DB_URL);
        const { name, host } = db.connection;
        console.log(`Connected to the db: ${name} en ${host}`);
    }   catch(error) {
        console.log(': Error connecting to database', error);
    }
};

module.exports = {
    DB_URL,
    connectDb,
};
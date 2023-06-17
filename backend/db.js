const mongoose = require('mongoose');
const mongoUri = "mongodb://localhost:27017";

const connectToDB = async () => {
    mongoose.connect(mongoUri);
}

module.exports = connectToDB;
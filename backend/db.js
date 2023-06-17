const mongoose = require('mongoose');
const mongoUri = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToDB = async () => {
    mongoose.connect(mongoUri);
}

module.exports = connectToDB;
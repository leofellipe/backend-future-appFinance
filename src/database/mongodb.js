const mongoose = require('mongoose')

async function dataBaseConnection() {
  await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@db.s8bdet6.mongodb.net/test`);
}

module.exports = dataBaseConnection
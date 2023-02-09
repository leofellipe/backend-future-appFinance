const mongoose = require('mongoose')

async function dataBaseConnection() {
  // await mongoose.connect(`mongodb+srv://${process.env.DBLOGIN}:${process.env.DBPASSWORD}@db.s8bdet6.mongodb.net/test`);
  await mongoose.connect(`mongodb+srv://leofellipe_:Mortadela1@db.s8bdet6.mongodb.net/test`);
}

module.exports = dataBaseConnection
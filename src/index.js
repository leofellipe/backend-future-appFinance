const app = require('./app')
const dataBaseConnection = require('./database/mongodb')

dataBaseConnection()

app.listen(3001, () => {
  console.log('Server is online...')
})

module.exports = app
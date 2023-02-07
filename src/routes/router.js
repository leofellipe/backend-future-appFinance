const Router = require('express')
const routes = Router()
const {
  insertionDB,
  findAllDB,
  deleteDB,
  updateDB
} = require('../controllers/finance.controller')

const {
  createLogin,
  findUsers
} = require('../controllers/login')

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Olá' })
})

// Routes to insertion data in database
routes.post('/addFinance', insertionDB)
routes.get('/allDocument', findAllDB)
routes.delete('/deleteDocument/:id', deleteDB)
routes.put('/updateDocument/:id', updateDB)

// Routes to login in application
routes.post('/createUser', createLogin)
routes.get('/findUser', findUsers)

module.exports = routes
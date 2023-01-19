const Router = require('express')
const routes = Router()
const {
  insertionDB,
  findAllDB,
  findOneDB,
  deleteDB,
  updateDB
} = require('../controllers/finance.controller')

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Olá' })
})

routes.post('/addFinance', insertionDB)
routes.get('/allDocument', findAllDB)
routes.get('/oneDocument/:id', findOneDB)
routes.delete('/deleteDocument/:id', deleteDB)
routes.put('/updateDocument/:id', updateDB)

module.exports = routes
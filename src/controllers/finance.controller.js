const ModelSchema = require('../database/schema')

async function insertionDB(req, res) {
  const { description, price } = req.body
  try {
    if (!req.body || !description || !price)
      return res.status(400).json({ success: false, message: 'try again' })

    const insert = await ModelSchema.create(req.body)

    return res.status(200).json({ success: true, insert })

  } catch (error) {
    throw new Error(error)
  }
}

async function findAllDB(req, res) {
  try {
    const find = await ModelSchema.find()

    return res.status(200).json({ success: true, find })
  } catch (error) {
    throw new Error(error)
  }
}

async function findOneDB(req, res) {
  const { id } = req.params
  try {
    if (!req.params)
      return res.status(400).json({ success: false, message: 'try again' })

    const find = await ModelSchema.findById(id)

    return res.status(200).json({ success: true, find })
  } catch (error) {
    throw new Error(error)
  }
}

async function deleteDB(req, res) {
  const { id } = req.params
  if (!req.params)
    return res.status(400).json({ success: false, message: 'try again' })

  const deleteDB = await ModelSchema.findByIdAndDelete(id)

  return res.status(200).json({ success: true, deleteDB })
}

async function updateDB(req, res) {
  const { id } = req.params
  const { title, description, price, methodPay } = req.body
  if (!req.params || !req.body || !title || !description || !price || !methodPay)
    return res.status(400).json({ success: false, message: 'ID não encontrado ou campos não preenchidos, tente novamente.' })

  const updateDB = await ModelSchema.findByIdAndUpdate(id, req.body)

  return res.status(200).json({ success: true, message: 'Data updated!' })
}

module.exports = {
  insertionDB,
  findAllDB,
  findOneDB,
  deleteDB,
  updateDB
}
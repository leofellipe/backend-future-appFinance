const { financeSchema } = require('../database/schema')

async function insertionDB(req, res) {
  const { title, description, price, methodPay } = req.body
  try {
    if (!req.body || !title || !description || !price || !methodPay)
      return res.status(400).json({ success: false, message: 'try again' })

    const insert = await financeSchema.create(req.body)

    return res.status(200).json({ success: true, insert })
  } catch (error) {
    throw new Error(error)
  }
}

async function findAllDB(req, res) {
  try {
    const find = await financeSchema.find()
    return res.status(200).json({ success: true, find })
  } catch (error) {
    throw new Error(error)
  }
}

async function deleteDB(req, res) {
  const { id } = req.params
  if (!req.params)
    return res.status(400).json({ success: false, message: 'try again' })

  const deleteDB = await financeSchema.findByIdAndDelete(id)

  return res.status(200).json({ success: true, deleteDB })
}

async function updateDB(req, res) {
  const { id } = req.params
  const { title, description, price, methodPay } = req.body
  if (!req.params || !req.body || !title || !description || !price || !methodPay)
    return res.status(400).json({ success: false, message: 'ID não encontrado ou campos não preenchidos, tente novamente.' })

  const updateDB = await financeSchema.findByIdAndUpdate(id, req.body)

  const obj = {
    createdAt: updateDB._doc.createdAt,
    idMongo: updateDB._doc._id
  }

  return res.status(200).json({ success: true, message: 'Data updated!', obj })
}

module.exports = {
  insertionDB,
  findAllDB,
  deleteDB,
  updateDB
}
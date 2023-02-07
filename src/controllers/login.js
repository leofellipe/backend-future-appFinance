const { LoginSchema } = require('../database/schema')

async function createLogin(req, res) {
  const { email, password } = req.body
  try {
    if (!req.body || !email || !password) {
      return res.status(400).json({ success: false, message: 'request body malformed.' })
    }

    if (await LoginSchema.findOne({ email })) {
      return res.status(400).json({ success: false, message: 'User already exists' })
    }

    const insertDatabase = await LoginSchema.create(req.body)

    insertDatabase.password = undefined

    return res.status(200).json({ insertDatabase })
  } catch (error) {
    throw new Error(error)
  }
}

async function findUsers(req, res) {
  const { email } = req.body
  try {
    const userFind = await LoginSchema.findOne({ email })

    return res.status(200).json({ userFind })

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  createLogin,
  findUsers
}
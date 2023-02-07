const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const schema = new Schema({
  id: ObjectId,
  data: [
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      methodPay: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    },
    {
      email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true,
        select: false,
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
})

// schema.obj.data[1].pre('save', async function (next) {
//   const hash = await bcrypt.hash(this.password, 10)
//   this.password = hash

//   next()
// })

const financeSchema = mongoose.model('finance', schema.obj.data[0])
const LoginSchema = mongoose.model('users', schema.obj.data[1])

module.exports = {
  financeSchema,
  LoginSchema
}
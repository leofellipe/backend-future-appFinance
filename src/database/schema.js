const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const financeModel = new Schema({
  id: ObjectId,
  title: String,
  description: String,
  price: Number,
  methodPay: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ModelSchema = mongoose.model('finance', financeModel)

module.exports = ModelSchema
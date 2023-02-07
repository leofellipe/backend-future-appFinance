const express = require('express')
const routes = require('./routes/router')
const cors = require('cors')

const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

console.log(cors)

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors(corsOptions))

module.exports = app
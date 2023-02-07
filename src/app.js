const express = require('express')
const app = express()
const routes = require('./routes/router')
const cors = require('cors')
const { options } = require('./utils/cors')


app.use(express.json())
app.use(routes)
app.use(cors(options))

module.exports = app
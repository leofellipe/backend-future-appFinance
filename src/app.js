const express = require('express')
const app = express()
const routes = require('./routes/router')
const { cors, options } = require('./utils/cors')

require('dotenv').config()

//Cors always needs to be called first using the express package for your 
//front-end application to have access to your backend application and not give
//a cors error
app.use(cors(options))
app.use(express.json())
app.use(routes)

module.exports = app
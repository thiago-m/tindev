const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const routes = require('./routes')

const server = express()

mongoose.connect(`mongodb+srv://${process.env.mongodb_NAME}:${process.env.mongodb_PASSWORD}@cluster0.1aowj.mongodb.net/${process.env.mongodb_PROJECT}?retryWrites=true&w=majority`, {useNewUrlParser:true})
server.use(express.json())
server.use(routes)

server.listen(3333, () => console.log('Server On'))

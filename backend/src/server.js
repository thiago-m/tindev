import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import cors from 'cors'

require('dotenv').config()

const server = express()

mongoose.connect(`mongodb+srv://${process.env.mongodb_NAME}:${process.env.mongodb_PASSWORD}@cluster0.1aowj.mongodb.net/${process.env.mongodb_PROJECT}?retryWrites=true&w=majority`, {useNewUrlParser:true})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333, () => console.log('Server On'))

const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const { readdirSync } = require('fs')
const app = express()
require('dotenv').config() 

const PORT = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())

//routes 
// include routes from files within the './routes' directory into Express application under the '/api/v1' base path
readdirSync('./routes').map((router) => app.use('/api/v1', require('./routes/' + router)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`You are listenign at PORT ${PORT}`)
    })
}

server()

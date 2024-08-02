require('dotenv').config()

const express = require('express')
const gameRoutes = require('./routes/games')
const mongoose = require('mongoose')
const cors = require('cors')

// express app 
const app = express()

// middleware 
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use(cors({origin: process.env.FRONTEND_LINK}))

// routes 
app.use('/BasketNodes/games', gameRoutes)

// connect to databse 
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        // listening for requests 
        app.listen(process.env.PORT, () => {
            console.log("App currently connected to DB and listening to port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


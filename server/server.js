const express = require('express');
require('dotenv/config');
const cors = require('cors');
const initRoutes = require('./src/routes/index.js');
const connectDatabase = require('./src/config/connectDatabase.js');
const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


initRoutes(app)
connectDatabase()

const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
    console.log(`Server is running in port ${listener.address().port}`)
})
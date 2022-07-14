const express = require('express');
const cors = require('cors');
const app = express();

const albumRoutes = require('./Controllers/albums');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/albums', albumRoutes)

app.get('/', (req,res) => {
    res.status(200).send("Hello World, this is the server!")
})


module.exports = app

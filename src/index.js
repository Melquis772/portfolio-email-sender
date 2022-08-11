const express = require('express');
const routes = require('./routes/index.routes')
const config = require('./config')
const app = express();


app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use(routes)

app.listen(config.port, () => {
    console.log("Server on port", config.port)
})
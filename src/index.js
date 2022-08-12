const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.routes')
const config = require('./config')


const app = express();


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST']
}))



app.use(routes)

app.listen(config.port, () => {
    console.log("Server on port", config.port)
})
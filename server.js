const express = require('express')
const router = require('./routes/routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(router)

app.listen(
    3000,
    () => console.log("Servidor se ejecuta en el puerto 3000")
)
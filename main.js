const express = require('express')
const {engine} = require ('express-handlebars')

//port to listen to
const POST = parseInt(process.env.PORT) || 3000

//Create an instance of express
const app = express()

app.listen(PORT, () => {
    console.info(`Application strated on port ${PORT} at ${new Date()}`)
})
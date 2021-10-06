const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./rotas')
const port = 3001
const messageServer = "O server está de pé em: http://localhost:3001"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', 'views')//?

app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.listen(port, 'localhost', () => console.log(messageServer))
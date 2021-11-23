// Declaração das dependências
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./rotas')
const port = 3001
const messageServer = "O server está de pé em: http://localhost:3001"

// Config do bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Config do EJS
app.set('view engine', 'ejs')
app.set('views', 'views')

// Dizendo onde vai estar a parte estática do blog
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))

app.use(router)

// Conexão com o banco de dados
const connections = require('./database/connections')
connections.sync().then(() => console.log('sincronizado'))
.catch(err => console.log(err))

// Colocando o app para escutar as modificações
app.listen(port, 'localhost', () => console.log(messageServer))
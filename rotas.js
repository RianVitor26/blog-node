// Declarando as dependências
const express = require('express')
const router = express.Router()

// Renderizando o ejs
router.get('/', (req, res) => {
    res.render("home")
})

router.get('/post', (req, res) => {
    res.render("post")
})

module.exports = router
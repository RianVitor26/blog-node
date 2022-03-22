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

router.get('/post/add', (req, res) => {
    res.render("addPosts")
})

module.exports = router
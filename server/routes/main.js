const router = require('express').Router()

router
    .get('/', (req, res) => {
        res.render('index.pug')
    })
    .get('/prompt', (req, res) => {
        res.render('prompt.pug')
    })

module.exports = router
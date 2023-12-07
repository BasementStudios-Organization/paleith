const router = require('express').Router()

router
    .get('/', (req, res) => {
        res.render('index.pug', { bstyle: 'background-color: #f5f5f5;'})
    })

module.exports = router
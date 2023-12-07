const router = require('express').Router()

const main = require('./main')
const cdn = require('./cdn/router')

router
    .use('/', main)
    .use('/cdn', cdn)

module.exports = router
const router = require('express').Router()

const css = require('./css')
const js = require('./javascript')
const img = require('./images')
const fonts = require('./font')

router
    .use('/css', css)
    .use('/js', js)
    .use('/img', img)
    .use('/fonts', fonts)

module.exports = router
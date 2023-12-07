const router = require('express').Router()
const fs = require('fs-extra')

router
    .get('/w/:file', (req, res) => {
        fs.readFile(`${process.cwd()}/server/assets/javascript/web/${req.params.file}`, 'utf8', (err, data) => {
            if (err) console.log(err)
            res.setHeader('Content-Type', 'text/javascript').send(data)
        })
    })
    .get('/c/:file', (req, res) => {
        fs.readFile(`${process.cwd()}/server/assets/javascript/class/${req.params.file}.js`, 'utf8', (err, data) => {
            if (err) console.log(err)
            res.setHeader('Content-Type', 'text/javascript').send(data)
        })
    })
    .get('/ranjs', (req, res) => {
        fs.readFile(`${process.cwd()}/server/assets/javascript/ranjs/index.js`, 'utf8', (err, data) => {
            if (err) console.log(err)
            res.setHeader('Content-Type', 'text/javascript').send(data)
        })
    })
    .get('/utils', (req, res) => {
        fs.readFile(`${process.cwd()}/server/assets/javascript/utils/index.js`, 'utf8', (err, data) => {
            if (err) console.log(err)
            res.setHeader('Content-Type', 'text/javascript').send(data)
        })
    })

module.exports = router
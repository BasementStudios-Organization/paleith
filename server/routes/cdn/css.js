const router = require('express').Router()
const fs = require('fs-extra')

router
    .get('/:file', (req, res) => {
        fs.readFile(`${process.cwd()}/server/assets/css/${req.params.file}`, 'utf8', (err, data) => {
            if (err) console.log(err)
            res.setHeader('Content-Type', 'text/css').send(data)
        })
    })

module.exports = router
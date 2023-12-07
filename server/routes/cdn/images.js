const router = require('express').Router()
const fs = require('fs-extra')

router
    .get('/:file', (req, res) => {
        fs.readFile(`${process.cwd()}/server/assets/images/${req.params.file}`, (err, data) => {
            if (err) console.log(err)
            res.setHeader('Content-Type', 'image/png').send(data)
        })
    })

module.exports = router
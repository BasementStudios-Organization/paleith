const router = require('express').Router()
const fs = require('fs-extra')

router
    .get('/:file', (req, res) => {
        fs.readFile(`${process.cwd()}/server/assets/fonts/${req.params.file}`, (err, data) => {
            if (err) console.log(err)
            res.setHeader('Content-Type', 'application/x-font-ttf').send(data)
        })
    })

module.exports = router
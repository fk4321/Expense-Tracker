const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Hello Router World")
})

module.exports = router 
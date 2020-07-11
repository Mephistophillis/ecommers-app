const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.end('test api'))

module.exports = router

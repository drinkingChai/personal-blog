const router = require('express').Router()

router.use('/blogs', require('./blogs'))
router.use('/sessions', require('./sessions'))

module.exports = router

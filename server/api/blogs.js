const router = require('express').Router()
const { Blog } = require('../db').models

router.get('/', (req, res, next) => {
  Blog.findAll({ order: [[ 'createdAt', 'DESC' ]] })
    .then(blogs => res.send(blogs))
    .catch(next)
})

module.exports = router

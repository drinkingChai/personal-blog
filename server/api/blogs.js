const router = require('express').Router()
const { Blog } = require('../db').models

router.get('/', (req, res, next) => {
  Blog.findAll({ order: [[ 'createdAt', 'DESC' ]] })
    .then(blogs => res.send(blogs))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Blog.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Blog.findById(req.params.id)
    .then(blog => {
      Object.assign(blog, { ...req.body })
      blog.save()
    })
    .then(() => res.sendStatus(200))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Blog.findById(req.params.id)
    .then(blog => blog.destroy())
    .then(() => res.sendStatus(200))
    .catch(next)
})


module.exports = router

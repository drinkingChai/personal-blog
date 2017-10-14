const router = require('express').Router()
const { requireLogin } = require('./middlewares/session-middleware')
const { Blog } = require('../db').models

router.get('/', (req, res, next) => {
  Blog.findAll({ order: [[ 'createdAt', 'DESC' ]] })
    .then(blogs => res.send(blogs))
    .catch(next)
})

router.post('/', requireLogin, (req, res, next) => {
  Blog.create({ ...req.body, userId: req.session.userId })
    .then(blog => res.status(201).send(blog))
    .catch(next)
})

router.put('/:id', requireLogin, (req, res, next) => {
  Blog.findOne({ where: { id: req.params.id, userId: req.session.userId } })
    .then(blog => {
      Object.assign(blog, { ...req.body })
      blog.save()
    })
    .then(blog => res.status(200).send(blog))
    .catch(next)
})

router.delete('/:id', requireLogin, (req, res, next) => {
  Blog.findOne({ where: { id: req.params.id, userId: req.session.userId } })
    .then(blog => blog.destroy())
    .then(() => res.sendStatus(200))
    .catch(next)
})


module.exports = router

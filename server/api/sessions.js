const router = require('express').Router()
const { User, Blog } = require('../db').models

router.get('/', (req, res, next) => {
  User.findById(req.session.userId, { include: [ Blog ] })
    .then(user => {
      if (!user) return res.sendStatus(401)
      const { email, name, blogs } = user
      res.send({
        email,
        name,
        blogs
      })
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const { email, password } = req.body
  User.findOne({ where: { email, password } })
    .then(user => {
      if (!user) return res.sendStatus(401)
      req.session.userId = user.id
      res.sendStatus(202)
    })
    .catch(next)
})

router.delete('/', (req, res, next) => {
  delete req.session.userId
  res.sendStatus(200)
})

module.exports = router

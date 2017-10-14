const router = require('express').Router()
const { User } = require('../db').models

router.get('/', (req, res, next) => {
  res.send(req.session)
})

router.post('/', (req, res, next) => {
  const { email, password } = req.body
  User.findOne({ where: { email, password } })
    .then(user => {
      if (!user) res.sendStatus(401)
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

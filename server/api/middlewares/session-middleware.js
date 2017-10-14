const { User } = require('../../db').models

const requireLogin = (req, res, next) => {
  User.findById(req.session.userId)
    .then(user => {
      if (!user) return res.sendStatus(401)
      next()
    })
    .catch(next)
}

module.exports = {
  requireLogin
}

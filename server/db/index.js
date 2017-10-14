const conn = require('./conn')
const Blog = require('./Blog')
const User = require('./User')

// associations
User.hasMany(Blog)
Blog.belongsTo(User)

const sync = () => conn.sync()

module.exports = {
  sync,
  models: {
    Blog,
    User
  }
}

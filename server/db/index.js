const conn = require('./conn')
const Blog = require('./Blog')

const sync = () => conn.sync()

module.exports = {
  sync,
  models: {
    Blog
  }
}

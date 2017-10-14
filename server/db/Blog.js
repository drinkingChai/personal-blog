const conn = require('./conn')
const Sequelize = conn.Sequelize

const Blog = conn.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { notEmpty: true }
  }
})

module.exports = Blog

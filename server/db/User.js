const conn = require('./conn')
const Sequelize = conn.Sequelize

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true, isEmail: true }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  }
})

module.exports = User

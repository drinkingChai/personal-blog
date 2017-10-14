const conn = require('./conn')
const { Blog, User } = require('./index').models

const seed = () => {
  return conn.sync({ force: true })
    .then(() => {
      return Promise.all([
        Blog.create({ title: 'test blog', content: 'lotta stuff' }),
        User.create({ name: 'hello', email: 'foo@foo.com', password: 'a' }),
        User.create({ name: 'hello', email: 'bar@bar.com', password: 'a' })
      ])
    })
    .then(([ blog, user ]) => {
      return user.addBlog(blog)
    })
}

seed()
  .then(() => console.log('database seeded'))
  .then(() => conn.close())

const conn = require('./conn')
const { Blog } = require('./index').models

const seed = () => {
  return conn.sync({ force: true })
    .then(() => {
      return Promise.all([
        Blog.create({ title: 'test blog', content: 'lotta stuff' })
      ])
    })
}

seed()
  .then(() => console.log('database seeded'))
  .then(() => conn.close())

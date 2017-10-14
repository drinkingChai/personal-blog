const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express()
app.use(require('morgan')('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/public', express.static(path.join(__dirname, '..', 'public')))
app.use('/api', require('./api'))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

const port = process.env.PORT || 3005

db.sync()
  .then(() => app.listen(port, () => console.log(`listening on port ${port}`)))


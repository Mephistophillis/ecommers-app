const express = require('express')
const next = require('next')

const mongoose = require('mongoose')

const PORT = parseInt(process.env.PORT, 10) || 3000
const DEV = process.env.NODE_ENV !== 'production'
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/test'
const app = DEV ? next({ DEV, dir: './client' }) : next({ dir: './client' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // mongo connection
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to the database')
    })
    .catch((err) => {
      console.log('Could not connect to the database. Exiting now...', err)
      process.exit()
    })

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))

  // bind routes
  require('./routes')(server)(app)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})

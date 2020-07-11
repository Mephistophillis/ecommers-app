module.exports = (server) => (app) => {
  server.use('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.use('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  // api routes
  require('./api')(server)
}

const API_BASE = `/api/`

const API_AVAILABLE_ENDPOINTS = [`test`]

module.exports = (server) => {
  // bind endpoints
  API_AVAILABLE_ENDPOINTS.forEach((endpoint) => {
    server.use(API_BASE + endpoint, require(`./${endpoint}`))
  })
  // root endpoint
  server.use(API_BASE, (req, res, next) =>
    res.json({ 'Available endpoints: ': API_AVAILABLE_ENDPOINTS })
  )
}

const express = require('express')
const { PORT } = require('./config')
const cors = require('cors')
const compression = require('compression')
const measurementsRouter = require('./controllers/measurements')
const middleware = require('./utils/middleware')
const bodyParser = require('body-parser')


const app = express()

app.use(compression())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)

app.use('/', measurementsRouter)

app.use(middleware.error)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = {
  app
}

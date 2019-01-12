const express = require('express')
const cors = require('cors')
const compression = require('compression')
const measurementsRouter = require('./controllers/measurements')
const middleware =require('./utils/middleware')


const app = express()

app.use(compression())
app.use(cors())
app.use(express.static('build'))
app.use(middleware.logger)

app.use('/', measurementsRouter)

app.use(middleware.error)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
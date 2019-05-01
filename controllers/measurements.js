const measurementsRouter = require('express').Router()
const SQL = require('sql-template-strings')
const connection = require('../db_connection')
const createResponse = require('../utils/createResponse')


const measurementsQuery = (SQL`SELECT * FROM observations WHERE timestamp > UNIX_TIMESTAMP() - 87000`)


function querySQL(query) {
  return new Promise(function (resolve, reject) {
    connection.query(query, (error, results) => {
      const stringify = JSON.stringify(results)
      const json = JSON.parse(stringify)
      resolve(json)
      reject(new Error('tuli virhe!'))
    })
  })
}

measurementsRouter.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

measurementsRouter.get('/measurements', async (req, res) => {

  const measurements = await querySQL(measurementsQuery)
  console.log('measurements kutsuttu')

  res.json(measurements)
})

measurementsRouter.get('/measurements/:tag', async (req, res) => {
  const tagi = req.params.tag
  const queryString = (SQL`SELECT * FROM observations WHERE timestamp > UNIX_TIMESTAMP() - 87000 AND tagname = ${tagi}`)
  const measurements = await querySQL(queryString)

  res.json(measurements)
})

measurementsRouter.get('/last', async (req, res) => {
  const queryString = (SQL`SELECT * FROM observations WHERE timestamp > UNIX_TIMESTAMP() - 5000`)
  const measurements = await querySQL(queryString)
  const lastMeasurements = measurements.map(n => n.timestamp).sort((a, b) => a - b).reverse()[0]
  //console.log(lastMeasurements)
  const lastTemps = measurements.filter(n => n.timestamp === lastMeasurements)
  console.log(lastTemps)
  res.json(lastTemps)
})

measurementsRouter.post('/queryData', async (req, res) => {
  const body = req.body
  const room = body.queryResult.parameters.room
  const requestedValue = body.queryResult.parameters.value
  console.log('requestedValue: ', requestedValue)

  let tagi = ''

  if (room === 'bedroom') {
    tagi = 'tag1'
  } else if (room === 'balcony') {
    tagi = 'tag2'
  }

  const queryString = (SQL`SELECT * FROM observations WHERE timestamp > UNIX_TIMESTAMP() - 300 AND tagname = ${tagi}`)
  const measurements = await querySQL(queryString)

  const value = measurements[0][requestedValue]

  console.log('pyydetty arvo on:', value)
  res.json(createResponse(value, requestedValue, room))
})

module.exports = measurementsRouter

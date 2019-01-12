const measurementsRouter = require('express').Router()
const SQL = require('sql-template-strings')
const connection = require('../db_connection')

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
  //res.send('<h1>Hello World!</h1>')
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
  const queryString = (SQL `SELECT * FROM observations WHERE timestamp > UNIX_TIMESTAMP() - 5000`)
  const measurements = await querySQL(queryString)
  const lastMeasurements = measurements.map(n => n.timestamp).sort( (a, b) => a - b).reverse()[0]
  //console.log(lastMeasurements)
  const lastTemps = measurements.filter(n => n.timestamp === lastMeasurements)
  console.log(lastTemps)
  res.json(lastTemps)
})

module.exports = measurementsRouter
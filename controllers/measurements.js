const measurementsRouter = require('express').Router()
const SQL = require('sql-template-strings')
const { querySQL, mapTagToName } = require('../utils/tools')

const createResponse = require('../utils/createResponse')




measurementsRouter.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

measurementsRouter.get('/measurements', async (req, res) => {

  const queryString = (SQL`SELECT * FROM observations WHERE timestamp > UNIX_TIMESTAMP() - 87000`)
  const measurements = await querySQL(queryString)
  console.log('measurements kutsuttu')

  res.json(measurements)
})

measurementsRouter.get('/measurements/:tag', async (req, res) => {
  const tagi = req.params.tag
  const queryString = (SQL`SELECT * FROM observations WHERE timestamp > UNIX_TIMESTAMP() - 87000 AND tagname = ${tagi}`)
  const measurements = await querySQL(queryString)
  console.log('tulokset: ', measurements)
  res.json(measurements)
})

measurementsRouter.get('/last', async (req, res) => {
  const queryString = (SQL`SELECT * FROM observations ORDER BY timestamp DESC LIMIT 4`)
  const measurements = await querySQL(queryString)
  res.json(measurements)
})

measurementsRouter.post('/queryData', async (req, res) => {
  const body = req.body
  const room = body.queryResult.parameters.room
  const requestedValue = body.queryResult.parameters.value
  console.log('requestedValue: ', requestedValue)
  console.log('room: ', room)

  let tagi = mapTagToName(room)

  const queryString = (SQL`SELECT * FROM observations WHERE tagname = ${tagi} ORDER BY timestamp DESC LIMIT 1`)
  console.log('query string: ', queryString)
  let queryResponse
  try {
    queryResponse = await querySQL(queryString)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }

  if (queryResponse.length === 0) {
    return res.json(createResponse())
  }

  const value = queryResponse[0][requestedValue]
  console.log('pyydetty arvo on ', value)
  return res.json(createResponse(value, requestedValue, room))
})

module.exports = measurementsRouter

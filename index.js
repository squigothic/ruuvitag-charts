const express = require('express')
const connection = require('./db_connection')
const SQL = require('sql-template-strings')

const logger = (request, response, next) => {
  console.log('Method:',request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const app = express()
app.use(logger)
app.use(express.static('build'))

const valittuTagi = 'tag1'

const measurementsQuery = (SQL`SELECT * FROM observations WHERE timestamp > UNIX_TIMESTAMP() - 9000000 AND tagname = ${valittuTagi}`)

function querySQL(query) {
  return new Promise(function (resolve, reject) {
    connection.query(query, (error, results) => {
      const stringify = JSON.stringify(results)
      console.log(stringify)
      const json = JSON.parse(stringify)
      resolve(json)
      reject(new Error('tuli virhe!'))
    })
  })
}

app.get('/', (req, res) => {
  //res.send('<h1>Hello World!</h1>')
})

app.get('/measurements', async (req, res) => {

  const measurements = await querySQL(measurementsQuery)

  res.json(measurements)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
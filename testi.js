const connection = require('./db_connection')

const queryString = `
SELECT * FROM observations;
`
console.log(queryString)
connection.query(queryString, (error, results) => {
  if (error) throw error
  console.log(results)
})

connection.end()

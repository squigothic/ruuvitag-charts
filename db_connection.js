require('dotenv').config()
const mysql = require('mysql')

// Connect to mysql database
//let MYSQL_PORT = process.env.MYSQL_PORT
// if (process.env.NODE_ENV === 'development') {
//   MYSQL_PORT = process.env.MYSQL_PORT_DEV
// }


const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB,
}

if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
  config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
}

const connection = mysql.createConnection(config)

console.log('luodaan sql-yhteys parametreilla: ', connection.config.socketPath)
connection.connect((err) => {
  if (err) {
    return console.log('error: ' + err.message)
  }
  console.log(`connected to mysql server ${config.socketPath ? connection.config.socketPath : connection.config.host}`)
})

module.exports = connection

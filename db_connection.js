require('dotenv').config()
const mysql = require('mysql')

const config = {
  host: process.env.MYSQL_URI,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT
}

if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
  config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
}

if (process.env.NODE_ENV === 'development') {
  config.port = process.env.MYSQL_PORT_DEV
}

const connection = mysql.createConnection(config)

console.log('trying to connect: ', config)


connection.connect((err) => {
  if (err) {
    return console.log('error: ' + err.message)
  }
  console.log(`connected to mysql server ${config.socketPath ? connection.config.socketPath : connection.config.host}`)
})

module.exports = connection

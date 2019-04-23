require('dotenv').config()
const mysql = require('mysql')

// Connect to mysql database
let MYSQL_PORT = process.env.MYSQL_PORT
if (process.env.NODE_ENV === 'development') {
  MYSQL_PORT = process.env.MYSQL_PORT_DEV
}

const connection = mysql.createConnection({
  host: process.env.MYSQL_URI,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB,
  port: MYSQL_PORT
})

connection.connect()

module.exports = connection

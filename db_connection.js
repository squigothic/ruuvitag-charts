require('dotenv').config()
const mysql = require('mysql')

// Connect to mysql database

const connection = mysql.createConnection({
  host: process.env.MYSQL_URI,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB,
  port: 9000
})

connection.connect()

module.exports = connection
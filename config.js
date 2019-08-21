require('dotenv').config()

let PORT = process.env.DEV_PORT

if (process.env.NODE_ENV === 'production') {
  console.log('set port to production port')
  PORT = process.env.PORT
}

module.exports = { PORT }

const logger = (request, response, next) => {
  console.log(new Date())
  console.log('Method:',request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const error = (req , res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

module.exports = {
  logger,
  error
}
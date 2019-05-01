const createResponse = (value, measurement, room) => {
  const response = `${room} ${measurement} is ${value}`
  const responseData = {
    'fulfillmentText': response,
    'payload': {
      'google': {
        'expectUserResponse': false,
        'richResponse': {
          'items': [
            {
              'simpleResponse': {
                'textToSpeech': response,
                'displayText': response
              }
            }
          ]
        }
      }
    }
  }
  return responseData
}

//const resolveQuery = ()

module.exports = createResponse

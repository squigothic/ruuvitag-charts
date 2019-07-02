const createResponse = (value, measurement, room, error) => {

  let needResponse = ''
  let response = ''

  if (!value || !measurement || !room) {
    needResponse = true
    response = 'Sorry, I didn\'t quite catch that'
  } else if (error) {
    needResponse = false
    response = 'I can\'t communicate with the databse right now'
  } else {
    response = `${room} ${measurement} is ${value}`
    needResponse = false
  }

  const responseData = {
    'fulfillmentText': response,
    'payload': {
      'google': {
        'expectUserResponse': needResponse,
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

module.exports = createResponse

const connection = require('../db_connection')

function querySQL(query) {
  return new Promise(function (resolve, reject) {
    connection.query(query, (error, results) => {
      const stringify = JSON.stringify(results)
      const json = JSON.parse(stringify)
      resolve(json)
      reject(new Error('tuli virhe!'))
    })
  })
}

const mapTagToName = (room) => {
  switch (room) {
    case 'bedroom':
      return 'tag1'
    case 'balcony':
      return 'tag2'
    case 'living room':
      return 'tag3'
    case 'bathroom':
      return 'tag4'
    default:
      return null
  }
}

const getGroupedBy = (data, key) => {
  let groups = {}
  let result = []
  data.forEach((a) => {
    if (!(a[key] in groups)) {
      groups[a[key]] = []
      result.push(groups[a[key]])
    }
    groups[a[key]].push(a)
  })
  return result
}

module.exports = { querySQL, mapTagToName, getGroupedBy }


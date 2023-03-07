const _ = require('lodash');
let rockyObj = {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': 'Inactive'
  }
  let miroslavObj = {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': 'Active'
  }
  let donnyObj = {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Inactive'
  }
  let mattObj = {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Active'
  }

    /**
   * should filter a data according the specified status.
   * @function
   * @param {object[]} o - array of objects.
   * @returns(object[])
   */
  function camelCaseObject(o) {
    let newO, origKey, value
    if (o instanceof Array) {
        newO = []
        for (origKey in o) {
            value = o[origKey]
            if (typeof value === 'object') {
                value = camelCaseObject(value)
            }
            newO.push(value)
        }
    } else {
        newO = {}
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
                newO[_.camelCase(origKey)] = o[origKey]
            }
        }
    }
    return newO
}

 const fullData = [rockyObj, miroslavObj, donnyObj, mattObj];


 module.exports = {data: camelCaseObject(fullData)}




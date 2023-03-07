// name: Diego Arevalo, march 7, 2023

const { data } = require('./data')

// class receive array of data to manipulate it
class DataHandler {
  /**
   * Represents a array of person preferences.
   * @constructor
   * @param {array} data - it is an array of object.
   */
  constructor(data) {
    this.data = data.map((item) => ({ ...item, date: new Date() }))
  }

  /**
   * should filter a data according the specified status.
   * @function
   * @param {string} status - Status could be Active or Inactive.
   * @returns(object[])
   */
  filteredData(status) {
    return this.data.filter((item) => item['status'] === status)
  }

  /**
   * show the data, returning only the keys added in the whitelist array.
   * @function
   * @param {string[]} whiteList - they are all the keys we want to return once we filter.
   * @param {string} status - Status could be Active or Inactive.
   * @returns(object[])
   */
  show(whiteList, status) {
    const filteredData = this.filteredData(status)
    return filteredData.map((item) => {
      return whiteList.map((list) => {
        return {
          [list]: item[list],
        }
      })
    })
  }

  /**
   * show default data.
   * @function
   * @returns(object[])
   */
  display() {
    return this.data
  }
}

// array of keys that should be returned in the dataHandler.show() method
const whiteList = ['name', 'date', 'favoriteMovie']

const dataHandler = new DataHandler(data)

console.log('......ataching date')
console.log(dataHandler.display())
console.log('......filtered by active')
console.log(dataHandler.show(whiteList, 'Active'))

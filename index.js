// name: Diego Arevalo, march 7, 2023 at: 3:00 PM

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
   * should filter the data according the specified status.
   * @function
   * @param {string} status - Status could be Active or Inactive.
   * @returns(object[])
   */
  filteredData(status) {
    return this.data.filter((item) => item['status'] === status)
  }

  /**
   * should sort the data according the property name.
   * @function
   * @param {string} propertyName - should be the property name, we want to use to sort data.
   * @returns(object[])
   */
  sortByProperty(propertyName) {
    return this.data.sort((a, b) => {
      if (a[propertyName] < b[propertyName]) {
        return -1
      } else if (a[propertyName] > b[propertyName]) {
        return 1
      } else {
        return 0
      }
    })
  }

  /**
   * show the data, returning only the keys added in the whitelist array.
   * @function
   * @param {string[]} whiteList - they are all the keys we want to return once we filter.
   * @param {string} status - Status could be Active or Inactive.
   * @returns(object[])
   */
  show(whiteList, status) {
    const filteredData = this.filteredData(status);
    if(filteredData.length < 1) return "No records to show"
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

console.log(
  '----------------------------attaching date--------------------------',
)
console.log(dataHandler.display())
console.log(
  '----------------------------filtering by active--------------------------',
)
console.log(dataHandler.show(whiteList, 'Active'))
console.log('----------------------------sorting--------------------------')
console.log(dataHandler.sortByProperty('favoriteFood'))
console.log('----------------------------end--------------------------')

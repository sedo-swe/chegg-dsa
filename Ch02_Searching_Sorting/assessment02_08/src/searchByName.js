const sortByName = require("./sortByName");

/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
    if (Array.isArray(customers)) {
        const sortedCustomers = sortByName(customers);

        let lowerIndex = 0;
        let upperIndex = sortedCustomers.length - 1;
        while (lowerIndex <= upperIndex) {
            const middle = Math.floor((upperIndex + lowerIndex) / 2);
      
            let comparison;
            if (sortedCustomers[middle].lastName != lastName) {
                comparison = sortedCustomers[middle].lastName.localeCompare(lastName);
            } else {
                comparison = sortedCustomers[middle].firstName.localeCompare(firstName);
            }
      
            if (comparison < 0) {
              lowerIndex = middle + 1;
            }
      
            if (comparison === 0) {
              return middle;
            }
      
            if (comparison > 0) {
              upperIndex = middle - 1;
            }
        }
    }
    return -1;
}


module.exports = searchByName;

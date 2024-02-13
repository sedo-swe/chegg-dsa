const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */
function sortByName(customers) {
  return sort(compareName, customers);
}

function compareName(user1, user2) {
  if (user1.lastName != user2.lastName) {
    return user1.lastName.localeCompare(user2.lastName);
  } else {
    return user1.firstName.localeCompare(user2.firstName);
  }
}

module.exports = sortByName;

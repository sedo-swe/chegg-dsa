/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
function searchByEmail(email, customers) {
  if (Array.isArray(customers)) {
    let index = 0;
    const length = customers.length;
    while (index < length) {
      if (customers[index].email.localeCompare(email) === 0) {
        return index;
      }
      index++;
    }
  }
  return -1;
}

module.exports = searchByEmail;

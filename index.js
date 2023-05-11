// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}
var bestCustomer;

function setBestCustomer() {
  // Assign a value to the global variable
  bestCustomer = "not bob";
}
function overwriteBestCustomer() {
  // Overwrite the global variable
  bestCustomer = "maybe bob";
}
// Declare a constant in global scope
const leastFavoriteCustomer = "bob";

// Function that attempts to change the constant
function changeLeastFavoriteCustomer() {
  // This will throw an error
  leastFavoriteCustomer = "not bob";
}

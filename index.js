// Write your solution in this file!
// Declare customerName variable in global scope
var customerName = "bob";

//Function to upperCaseCustomerName
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

//Function to set Best Customer
function setBestCustomer(){
    bestCustomer = "not bob";  //overwrites bestCustomer();
}

//Function to overwrite Best customer
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "someone";
//Function change leastFavoriteCustomer
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "someone else";
}
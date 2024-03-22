const accountId = 144553
let accountEmail = "sm@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState ;

//accountId = 2 -> Not Allowed

accountEmail = "shm@yahoo.com"
accountPassword = "54321"
accountCity = "Howrah"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
const accountId = 144334
let accountEmail = "himu@google.com"
var accountPassword = "12345"
accountCity = "Charkhi Dadri" /*like this,also possible(withput any var)*/
let accountState;

// accountId = 2 //Not allowed//


    
/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountPassword = "34567"
accountCity = "gurugram"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
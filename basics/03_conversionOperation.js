let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = false
let score6 = "Shouvik"

//console.table([typeof score1, typeof score2, typeof score3, typeof score4, typeof score5, typeof score6]);

let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
let valueInNumber5 = Number(score5)
let valueInNumber6 = Number(score6)

//console.table([valueInNumber1, valueInNumber2, valueInNumber3, valueInNumber4, valueInNumber5, valueInNumber6]);

/*
    "33" -> 33
    "33abc" -> NaN
    false -> 0 , true -> 1
*/

let isLoggedIn = "Shouvik"

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);

/*
    1 -> true , 0 -> false
    "" -> false
    "String" -> true
 */

let number = 45

let stringNumber = String(number)

//console.log(stringNumber);
//console.log( typeof stringNumber);

/* 
 45 -> "45"  
 */

//**************** OPERATIONS **************

let value = 3
let negValue = -value

//console.log(negValue);

let str1 = "hello"
let str2 = " shouvik"

let str3 = str1 + str2

//console.log(str3);

//console.log(1 + "2");
//console.log("1" + 2);
//console.log(1 + 2 + "3");
//console.log("1" + 2 + 3);

let counter = 12
counter++
console.log(counter);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
    Working of ==  operator is different from the comparison operators(> , >= , < , <=) . comparison operators convert null into 0. Thats why:-
    null > 0 -> false
    null >= 0 -> true
*/

console.log("2" == 2); //true
console.log("2" === 2); //false

// === implies strict checking , i.e value check as well as data type check.


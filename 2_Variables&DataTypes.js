                                    /* Simpl Javascript Course */

/*
Variables:

Difference between var and let in JavaScript:

var is function scoped and let is block scoped.
Input:
    console.log(x);
    var x=5;
    console.log(x);
Output:
    undefined
    5

Input:
    console.log(x);
    let x=5;
    console.log(x);
Output:
    Error

Thus, It can be said that a variable declared with var is defined throughout the program as compared to let.
*/


// const variable
const name = 'Mukul';
name = 'Mayank'; // will give Assignment to constant variable error.


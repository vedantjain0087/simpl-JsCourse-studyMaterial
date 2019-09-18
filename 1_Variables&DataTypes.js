                                    /* Simpl Javascript Course */

/*

Datatypes :
1. There are 7 primitive data types: string, number, bigint, boolean, null, undefined, and symbol.
and 1 Non-primitive Object
2. Except for null and undefined, all primitive values have object equivalents
that wrap around the primitive values
            ex:
            var s_prim = 'foo';
            var s_obj = new String(s_prim);
*/ 

//Numbers
var num1 = 42;      //Written without decimals. 
var num2 = 42.00;   //Written with decimals.
var num3 = 2e5;     //200000
var num4 = 2e-5;    //0.00002

// Booleans

var a = true;   
var b = false;

// Strings

var website = "Simpl";   // Using double quotes
var website = 'Simpl';   // Using single quotes

// Symbols

let id = Symbol();
let id = Symbol("id"); // id is a symbol with the description "id"

let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

let id = Symbol("welcome");
alert(id.description); // welcome


// Null
var data = null;

// Undefined

var data;       //It has type undefined
var data1 = undefined;


// Object

var car = {color:"black", model:"X", mileage:30};

// BigInt
/*
BigInt is a built-in object that provides a way to represent whole numbers larger than (2 ^ 53) - 1, 
A BigInt is created by appending n to the end of an integer literal 
*/

Number.MAX_SAFE_INTEGER //9007199254740991
BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n


// OUESTIONS

/* 

1.What does the following expression return?

5 / 0;

ans: Infinity

2. What does the following expression return?

3 / "bob";

Ans: NaN

3.Divide the number 6 by the string "2" and explain the result.

Ans : 3

4. What does the following expression return?

NaN === NaN;

Ans: false

5.hat does the following expression return?

var sport; 
sport === undefined

Ans : true

*/
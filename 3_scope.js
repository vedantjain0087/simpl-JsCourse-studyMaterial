                                    /* Simpl Javascript Course */

/*
In JavaScript, there are two types of scopes:

Global Scope – Scope outside the outermost function attached to Window.
Local Scope – Inside the function being executed.
*/


// Example 1

let globalLet = "This is a global variable"; 
   
function fun() { 
  let localLet = "This is a local variable"; 
   
  console.log(globalLet); // This is a global variable 
  console.log(localLet); // This is a local variable 
} 
fun();

// Example 2

let globalLet = "This is a global variable"; 
   
function fun() { 
  let localLet = "This is a local variable"; 
} 
fun(); 
  console.log(globalLet); // This is a global variable 
  console.log(localLet); // localLet is not defined

// Example 3
  let globalLet = "This is a global variable"; 
   
function fun() { 
   localLet = "This is a local variable"; 
} 
   
fun(); 
  console.log(globalLet); // This is a global variable 
  console.log(localLet); // This is a local variable 

//   Example 4

let globalLet = "This is a global variable"; 

function fun() { 
let globalLet = "This is a local variable"; 
} 
fun(); 
console.log(globalLet); // This is a global variable 

// Example 5
let globalLet = "This is a global variable"; 
   
function fun() { 
  let globalLet = "This is a local variable"; 
  console.log(globalLet); // This is a local variable 
} 
fun(); 

// Example 6
let globalLet = "This is a global variable"; 
   
function fun() { 
  let globalLet = "This is a local variable"; 
  console.log(window.globalLet); // This is a global variable 
} 
fun(); 



// Questions

/* 

1.function fun(){ 
    function fun2(){ 
         i = 100; 
    } 
    fun2(); 
    console.log(i); // 100 
} 
fun(); 

2. function fun(){ 
    function fun2(){ 
        let i = 100; 
    } 
    fun2(); 
    console.log(i); // i is not defined  
} 
fun(); 


*/

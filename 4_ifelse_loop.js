                                    /* Simpl Javascript Course */
// If Else
var i = 20; 
  
if (i == 10) 
  document.wrte("i is 10"); 
else if (i == 15) 
  document.wrte("i is 15"); 
else if (i == 20) 
  document.wrte("i is 20"); 
else
  document.wrte("i is not present"); 


//   Switch

var i = 9; 
  
switch (i)  
{ 
   case 0: 
       document.write("i is zero."); 
       break; 
   case 1: 
       document.write("i is one."); 
       break; 
   case 2: 
       document.write("i is two."); 
       break; 
   default: 
       document.write("i is greater than 2."); 
} 


// Loops

// For Loop

var i; 
  
for (i = 0; i < 10; i++)  
{ 
    document.write("Hello World!\n"); 
} 


// While Loop

var x = 1; 
  
// Exit when x becomes greater than 4 
while (x <= 4) 
{ 
    document.write("Value of x:" + x + "<br />"); 

    // increment the value of x for 
    // next iteration 
    x++; 
} 


// For in loop

   // creating an Object 
   var languages = { first : "C", second : "Java",  
   third : "Python", fourth : "PHP",  
   fifth : "JavaScript" }; 

// iterate through every property of the 
// object languages and print all of them 
// using for..in loops 
for (itr in languages)  
{ 
document.write(languages[itr] + "<br >"); 
} 


// Do While Loop
var x = 21; 
  
do 
{ 
    // The line while be printer even 
    // if the condition is false 
    document.write("Value of x:" + x + "<br />"); 

    x++; 
} while (x < 20); 
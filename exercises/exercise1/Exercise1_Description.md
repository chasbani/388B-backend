# Exercise 1: 

## Due Date: Tuesday, January 11, 2022 11:59 PM
## Objectives: To get familiar with writing basic node modules and gain practice with our git workflow for distributiing course materials and submitting projects.

## Specifications/Requirements
1. You are given 2 files: __functions.js__ and __calculator.js__. You need to implement the 4 basic arithmetic operations: add, multipply, divide and subtract. In the __functions.js__ file you need to create a node module that will export 4 functions with the following signatures:  
*  function add(num1, num2)
*  function subtract(num1, num2)
*  function multiply(num1, num2)
*  function divide(num1, num2) 

2.  In __calculator.js__ you will need to use the funtions you export from your newly created node module and use them inside of the main function you have been given. To run the script you will just execute:  
```javascript  
node calculator.js
```  
Inside of main you will need to call each one of your functions and display the result using `console.log()`. The expected output from a run of your script using the values 12 and 3 for num1 and num2 respectively would be:  
```javascript 
% node calculator.js
running script
15
9
36
4
done running scipt
```  
To deliver your submission you will need to commit your changes locally and push to your repo on the university gitlab server.


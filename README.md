# Stackr.js
A Javascript library that helps in treating arrays like stack data types.

# Setup

You need to create an array in javascript first. Once its setup you can pass this array as an argument
to the initializer or directly to some methods.

Example:
var array = [1, 2, 3, 4, 5, 6];
//Initialize Stackr
var stack = Stackr(array);

Because you passed an array any array modifying methods will use this array by default. You can override this by adding
a different array as a parameter.

updateArr: function(array)

//Gets the top positioned element of the Stack
getTop: function(array)

//Returns the elements of the array in reverse order
getReverse: function(array)

//Reverses the elements of the array
reverse: function(array){


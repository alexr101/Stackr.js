# Stackr.js
A Javascript library that helps in treating arrays like stack data types.

# Setup

You need to create an array in javascript first. Once its setup you can pass this array as an argument
to the initializer or directly to some methods.

Example:
var array = [1, 2, 3, 4, 5, 6];
Initialize Stackr <br/>
var stack = Stackr(array);

Because you passed an array any array modifying methods will use this array by default. You can override this by adding
a different array as a parameter.

# Methods

**updateArr: function(array)**<br/>

Update or setup the default array for function operations in the Stackr object

**Array**(required) - This array will be set as the default array for the Stackr object

---------

**getTop: function(array)**<br/>

Gets the top positioned element of the Stack. Default array will be used if no parameter is provided. <br/>

**Array**(optional) - If passed, its top positioned element will be returned

----------------

**getReverse: function(array)**<br/>

Returns a string with the elements of the array in reverse order. Default array will be used if no parameter is provided. <br/>

**Array**(optional) - If passed, the elements of the array will be returned in reverse inside of a string.

----------------

**reverse: function(array)**<br/>

Returns an array with reversed contents. Default array will be used if no parameter is provided. <br/>

**Array**(optional)

----------------


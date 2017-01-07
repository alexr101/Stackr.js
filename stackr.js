//Stackr is just a simple array object with an added method for getting the top value.
//I made this in inspiration of the stack data structure.
//This is easily achievable in Javascript. I just wanted to practice my Data Structures, and to
//release it as a small library

(function(global){
	"use strict"

	var array = [];

	var Stackr = function(){
		return new Stackr.init(array);
	}

	Stackr.init = function(array){
		this.arr = array;
	}

	//most function take in an array as parameter
	//If no parameter is given then the default this.arr will be used
	Stackr.prototype = {

		updateArr: function(array){
			this.arr = array;
		},

		//Gets the top positioned element of the Stack
		getTop: function(array){
			var arr = array || this.arr;

			if(arr.length > 0){
				return arr[arr.length - 1];
			} else {
				throw new Stackr.prototype.StackrException("Stack is empty. Cannot get value of null")
			}
		},

		//Returns the elements of the array in reverse order
		getReverse: function(array){
			var arr = array || this.arr;
			var reverseString = "";

			while(arr.length > 0){
				reverseString = reverseString + arr.pop() + ", ";
			}

			return reverseString;
		},

		//Reverses the elements of the array
		reverse: function(array){
			var arr = array || this.arr;
			var arrCopy = arr;

			for(var i = 0; i < arr.length; i++){
				arr[i] = arrCopy.pop();
			}
		},

		StackrException: function(message){
			this.message = message;
	   		this.name = "Stackr Exception";
		},
	}

	Stackr.init.prototype = Stackr.prototype;


	global.Stackr = Stackr;

})(window);




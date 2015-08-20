$(document).ready(function(){
var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];


//Part 1
// You have two arrays. One of prime numbers and one of non-primes. 
// Write a function that adds the numbers in the arrays together, 
// but add the non-primes in reverse order, and returns that information in a new array. 
// So the first prime should be added to the last non-prime, 
// the second prime should be added to the second to last non-prime, etc.

//create an empty array to hold solution
var solution = [];

//add first to last from each array, etc.
function addArrays(array1, array2){
	for (var i=0; i<array1.length; i++) {
		solution.push(array1[i] + array2[(array2.length-1)-i]);
		
		//append to DOM, console log each step
		$("#solution1").append(solution[i]+", ");
		console.log("Add: "+array1[i]+ " and " + array2[(array2.length-1)-i]);
	}
	//console log final array
	console.log("Final array: "+solution);
}
	//call the function on the arrays
	addArrays(primes, nonPrimes);
})


//Part 2
// Using the following arrays, write a function that merges the numbers together, 
// in order, and returns the result as a new array. 
// The result should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Write a comparison function, that takes two parameters. 
// If the first is less than the second, return -1. If the first is greater than the second, 
// return 1. If they are equal, return 0. 
// Pass your comparison function to Array.prototype.Sort.

$(document).ready(function(){

var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];

//concatenate the array
var together = numbers1.concat(numbers2);
console.log(together);

//compare and sort 
function compare(x, y) {
  return x - y;
}
//display to console and DOM
together.sort(compare);
console.log(together);
$("#solution2").append(together.join(', '));
})

// Part 3
// Create a constructor for an object called rightTriangle. 
// The constructor should take in two parameters, a, b.
// Give the triangle the properties a, b, c.
// Now, create a prototyped function called hypotenuse. 
// When called, it should check to see if degrees is equal to 90. 
// If so, it will square a, square b, add them together, and 
// set c equal to the square root of their sum.
// Create a new rightTriangle object, pass in 3 and 4 for the 
// parameters. When you call the object’s hypotenuse function, c should 
// be equal to 5. Call console.log on your object’s c and see if it is 5.

$(document).ready(function(){

//create Constructor function
	function RightTriangle(a, b) {
		this.a=a,
		this.b=b,
		this.c
		//this.hypotenuse=function(a, b){
		}
	
//create prototype object method
	RightTriangle.prototype.hypotenuse = function() {
		this.c = Math.sqrt((this.a*this.a)+(this.b*this.b));
		console.log("C is: "+this.c);
		}
	

// create the object
	var triangle = new RightTriangle(3,4);
	console.log(triangle);

//call the method on the object
	triangle.hypotenuse();
	console.log(triangle);
//compare the result and decide if it is a right triangle	
	
	if (triangle.c == 5) {
			console.log("Success! This is a right triangle.")
			$("#solution3").append("C is "+triangle.c+" therefore, it is a right triangle.");
		} else {
			alert("This is not a right triangle.")
		}
	})

// Part4
// Write a function that takes a number as a parameter. 
// If the number is 0, just return 0, otherwise return the number. 

// When called, your new function adds up numbers from 1 to any 
// given number, plus every number below it. For example, an input 
// of 5 will return 1 + 2 + 3 + 4 + 5 = 15. 


$(document).ready(function(){
	var addends = [];
	var sum;
	function addAll (n) {
		if (n ==0){
			console.log("n=0");
			return n;
		} else {
		for (var j=1; j<=n; j++) {
			addends.push(j);
			sum = addends.reduce(function(pv, cv) { 
				return pv + cv; 
			return sum;
			});
				
		}
		}
	}
	var n=7;
addAll(n);
console.log(addends+"="+sum);
$("#solution4").append("For n="+n+": "+addends+" = "+sum);

})


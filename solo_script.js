$(document).ready(function(){
var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];

// You have two arrays. One of prime numbers and one of non-primes. 
// Write a function that adds the numbers in the arrays together, 
// but add the non-primes in reverse order, and returns that information in a new array. 
// So the first prime should be added to the last non-prime, 
// the second prime should be added to the second to last non-prime, etc.
var solution = [];

function addArrays(array1, array2){
	for (var i=0; i<array1.length; i++) {
		solution.push(array1[i] + array2[(array2.length-1)-i]);
		
		$("#solution1").append(solution[i]+", ");
		console.log("Add: "+array1[i]+ " and " + array2[(array2.length-1)-i]);
	}
	console.log(solution);
}
	addArrays(primes, nonPrimes);
})
"use strict";
/*
 Joakim Levin, 900820
 AD3897
*/

// Uppgift 1

	console.log("Uppgift 1");

// Returns the highest value of the two parameters.
	function max(x, y){
		if(x > y)
			return x;
		else
			return y;
	}
	
// Returns the lowest value of the two parameters.
	function min (x, y){
		if(x < y)
			return x;
		else
			return y;
	}
	
	var print = max(5, 4);
	
	console.log(print);

	print = min(20, 10);
	
	console.log(print);
	

// Uppgift 2
	
	console.log("\nUppgift 2");

// Creates and returns a new array with n elements.	
	function range (n){
		var array = [];
		
		for(var i = 0; i < n; i++){
			array.push(i);
		}
		
		return array;
	}
	
	print = range(11);
	
	console.log(print);
	
	
// Uppgift 3

	console.log("\nUppgift 3");

// Returns the sum of the input array.	
	function sum(input){
		var sum = 0;
		
		for(var i = 0; i < input.length; i++){
			sum += input[i];
		}
		
		return sum;
	}
	
	var numbers = [5, 10, 15, 20, 25];
	
	print = sum(numbers);
	
	console.log(print);
	
	
// Uppgift 4

	console.log("\nUppgift 4");
	
// Returns the number of occuring characters in the string.
	function countCharacter(string, character){
		var array = string.match(new RegExp(character, "g"));
		
		return array.length;
	}
	
	var testString1 = "Jane Doe";
	var testString2 = "Abracadabra";
	
	console.log(countCharacter(testString1, "e"));
	console.log(countCharacter(testString2, "a"));
	
// Uppgift 5

	console.log("\nUppgift 5");

// Returns a reversed version of the string.
	function reverse(string){
		return string.split('').reverse().join('');
	}

// Checks if the string is a palindrome.
	function palindrome(string){
		var reversed = reverse(string);
		
		return reversed.includes(string);
	}
	
	testString1 = "sirap - paris";
	testString2 = "lorem ipsum";
	
	console.log(palindrome(testString1));
	console.log(palindrome(testString2));
	

// Uppgift 6
	
	console.log("\nUppgift 6");
	
	var person0 = {
		firstName:"Joakim",
		lastName:"Levin",
		age:26,
		family:["Carin", "Robert", "Linus"]
		};
	

// Uppgift 7

	console.log("\nUppgift 7");
	
// Prints the details of the person.
	function printPerson(person){
		name = person.firstName.concat(" " + person.lastName);
		
		
		console.log("Name: " + name + "\nAge: " + person.age + "\nFamily: " + person.family);
	}
	
	printPerson(person0);
	
	
// Uppgift 8

	console.log("\nUppgift 8");
	
	function createBox(height, width){
		return {height:height, width:width};
	}
	
	var box = createBox(15, 20);
	
	console.log(box.height + "\n" + box.width);
	
	
// Uppgift 9

	console.log("\nUppgift 9");
	
	function triangle(height, width){
		this.height = height;
		this.width = width;
		
		this.area = function(){
			return (height * this.width) / 2;
		}
	}
	
	var tri = new triangle(12, 14);
	
	console.log(tri.height + "\n" + tri.width + "\n" + tri.area());
	
	
// Uppgift 10

	console.log("\nUppgift 10");
	
	function attributes(object){
		var array = [];
		for (var attribute in object){
			array.push(attribute);
		}
		
		return array;
	}
	
	var testObject0 = {
		width:15,
		height:20
	};
	
	console.log(attributes(testObject0));
	
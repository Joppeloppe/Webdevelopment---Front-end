"use strict";
/*
 Joakim Levin, 900820
 AD3897
*/

// Uppgift 1

	console.log("Uppgift 1");
	
	console.log(5*2<12);
	console.log(55>22);
	console.log(16/4==4);
	console.log(8+2<=128);
	console.log(32*8!=225);
	
// Uppgift 2
	console.log("\nUppgift 2");

	var tisdag = "Tisdag";
	var hamburgare = "Hamburgare";
	var beBack = "I'll be back";

	
	console.log(tisdag.substring(0,3));
	console.log(hamburgare.substring(3,hamburgare.length));
	console.log(beBack.substring(beBack.length - 7));
	
// Uppgift 3
	console.log("\nUppgift 3");

	var itsLearning = "It's Learning";
	var jsGoodParts = "JavaScript: The Good Parts";
	var print = "";
	
	
	print  = itsLearning.substring(5).toUpperCase();
	console.log(print);
	
	print = jsGoodParts.substring(jsGoodParts.length - 10).toLowerCase();
	console.log(print);

// Uppgift 4
	console.log("\nUppgift 4");

	var numbers = [128, 256, 512,1024, 2048];


	// 1
	var sumOfNumbers = 0;
	
	for(var i = 0; i < numbers.length; i++){
		sumOfNumbers += numbers[i];
	}
	
	console.log("1: " + sumOfNumbers);
	
	// 2
	var avgNumber = 0;
	
	avgNumber = sumOfNumbers / numbers.length;
	
	console.log("2: " + avgNumber);
	
	// 3
	numbers.push(sumOfNumbers);
	console.log("3: " + numbers);
	
// Uppgift 5
	console.log("\nUppgift 5");
	
	var countries = ["Sweden", "Denmark", "Finland", "Norway"];
	var print = "";
	
	// 1
	print = countries[1].substring(0,3);
	console.log("1: " + print);
	
	// 2
	var sum = 0;
	
	for (var i = 0; i < countries.length; i++){
		sum += countries[i].length;
	}
	
	var avg = sum / countries.length;
	
	console.log("2: " + avg);
	
// Uppgift 6
	console.log("\nUppgift 6");
	
	var values = [3, 5, "Jane", true, 144, false];
	
	
	console.log(values.reverse());
	
// Uppgift 7
	console.log("\nUppgift 7");
	
	var names = ["Jane", "Joe", "Eliza"];
	var ages = [21, 34, 22];
	var hasPet = [true, false, true];
	
	var multipleArrays = [];
	multipleArrays = multipleArrays.concat(names, ages, hasPet);
/*	
---OLD---
	var multipleArrays = names.join() + "," + ages.join() + "," + hasPet.join();
*/

	console.log(multipleArrays);
	
// Uppgift 8
	console.log("\nUppgift 8");
	
	var actors = ["Sherlock", "Watson", "Bo"];
	var print = "";
	
	print = actors.join(" - ");
	
/*	
---OLD---
	for (var i = 0; i < actors.length; i++){
		print += actors[i];
		
		if(i < actors.length - 1)
			print += " - ";
	}
*/	
	console.log(print);
	
	
// Uppgift 9
	console.log("\nUppgift 9");
	
	var amount = 100;
	
	if(amount < 50)
		console.log("Less then 50!");
	else if(amount > 50 && amount < 65)
		console.log("Optimal range for the amount!");
	else
		console.log("Too much");

// Uppgift 10
	console.log("\nUppgift 10");
	
	var print = "";
	
	for(var i = 0; i < 8; i++){
		print += "#";
		
		console.log(print);
	}
	
"use strict";
/*
 Joakim Levin, 900820
 AD3897
*/

// Uppgift 1

// Changes the class of an element.
	function changeClass(element, newClass){
		document.getElementById(element).className = newClass;
	}

	
// Uppgift 2

	var button = document.getElementById("add-item");
	button.addEventListener("click", addItemToList);
	
// Adds an item from user input to list "items".
	function addItemToList(){
		// Get user input for item
		var newItem = window.prompt("What do you want to add?");
		
		// Create new item
		var node = document.createElement("LI");
		var textNode = document.createTextNode(newItem);
		
		node.appendChild(textNode);
		document.getElementById("items").appendChild(node);
	}
	
// Uppgift 3

	button = document.getElementById("remove-item");
	button.addEventListener("click", removeLastItemInList);
	
// Removes the last item in "items" list.
	function removeLastItemInList(){
		var list = document.getElementById("items")
		
		list.removeChild(list.lastElementChild);
	}
	
// Uppgift 4

// Creates a list of buttons with class name.
	var buttons = document.getElementsByClassName("remove-list-item");
// Add action listeners to all the buttons.
	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", removeElementFromList);
	}
	
// Removes an element from a list, after user confirmation.
	function removeElementFromList(){
		if(window.confirm("Are you certain you want to remove this?")){
			var parentNode = buttons.parentNode;
			this.parentNode.remove(this);
		}
	}
	
// Uppgift 5
	var form = document.getElementById("apply-for-pet");
	var pets = document.getElementsByName("pet");
	var checked = "";
	// Del 1
	

	form.addEventListener("submit", function(event){
		
		console.log("First name: " + this.elements.firstname.value);
		console.log("Last name: " + this.elements.lastname.value);
		console.log("Age: " + this.elements.age.value);
		console.log("E-mail: " + this.elements.email.value);
		
		
		for(var i = 0; i < pets.length; i++){
			if(pets[i].checked)
				checked = "checked";
			else
				checked = "unchecked";
			
			console.log(pets[i].value + " : " + checked);
		}
		
		console.log("\n\n");
	});

	
	//Del 2
	// Could you please explain the tip that is in the assignment for this part? 
	//(Tips: använd er av en stor if-sats med else if () och slutligen en else { } del.)
	form.addEventListener("submit", function(event){
	
		var firstName = "";
		var lastName = "";
		var age = "";
		var email = "";
	
		if(this.elements.firstname.value.length < 50 && this.elements.firstname.value !== "")
			firstName = this.elements.firstname.value;
		else{
			event.preventDefault();	
			alert("Please re-enter your first name.\nToo long or empty");
			return;
		}
		
		if(this.elements.lastname.value.length < 50 && this.elements.lastname.value !== "")
			lastName = this.elements.lastname.value;
		else{
			event.preventDefault();	
			alert("Please enter your last name.\nToo long or empty");
			return;
		}
		
		if(Number(this.elements.age.value) > 0)
			age = this.elements.age.value;
		else{
			event.preventDefault();	
			alert("Please enter a valid age.");
			return;
		}
		
		if(this.elements.email.value.length < 50 && this.elements.email.value !== "")
			email = this.elements.email.value;
		else{
			event.preventDefault();	
			alert("Please enter your email.\nToo long or empty");
			return;
		}
		
		var hasChecked = false;

		for(var i = 0; i < pets.length; i++){
			if(pets[i].checked){
				hasChecked = true;
				break;
			}
		}
		
		if (hasChecked === false){
			event.preventDefault();	
			alert("Please select a pet");
			return;
		}
		
		event.target.submit();

	});
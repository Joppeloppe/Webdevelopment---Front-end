"use strict";
/*
 Joakim Levin, 900820
 AD3897
*/

var form = document.getElementById("search-form");

form.addEventListener("submit", function(event){	
	var searchQuery = this.elements.query.value;
	
	// Removes unnecesarry blankspaces if the user by mistake adds multiple.
	searchQuery = searchQuery.replace(/\s+/g, ' ');
	
	if(searchQuery[0] === ' ')
		searchQuery = searchQuery.slice(1);
	
	// If empty search request.
	if(searchQuery === ""){
		alert("Please enter a movie title.");
		event.preventDefault();

		return;
	}
	
	console.log("Searching for: " + searchQuery);
	
	searchMovie(searchQuery);
	
	event.preventDefault();
});

function searchMovie(movieTitle){	
	var omdbAPI = new XMLHttpRequest();
	var omdbURL = "http://www.omdbapi.com/?s=" + '"' + encodeURI(movieTitle) + '"';
	
	// Clear the result div.
	document.getElementById("result").innerHTML = "";
	
	// Vad vill vi göra när vi fått ett svar?
	omdbAPI.addEventListener("load", function() {
		// Konvertera resultatet från JSON
		var result = JSON.parse(this.responseText);
		// Skriv ut resultatet
		console.log(result);
		
		if(result.Response == "False"){
			alert("No movie found!");
			event.preventDefault();

			return;
		}
		
		addItemsToList(result);
	});

	// Ange vilken metod (get) samt URL vi ska skicka med
	omdbAPI.open("get", omdbURL, true);
	// Skicka förfrågan
	omdbAPI.send();
}

function addItemsToList(items){				
		for(var i = 0; i < items.Search.length; i++){
			var node = document.createElement("LI");
			var movie = items.Search[i].Title + " (" + items.Search[i].Year + ")";
			var textNode = document.createTextNode(movie);

			node.appendChild(textNode);
						
			document.getElementById("result").appendChild(node);
		}
}


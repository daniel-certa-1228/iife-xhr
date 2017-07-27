console.log( "Predator.js" );

{
	var Predator = {};
	let carnivores = [];
	let herbivores = [];

	Predator.loadCarnivores = (callbackToInvoke) => {
		let carnivoreLoader = new XMLHttpRequest();
		carnivoreLoader.addEventListener("load", carnivoreLoadComplete);
		carnivoreLoader.addEventListener("error", carnivoreLoadFailed);

		function carnivoreLoadComplete(event) {
			
				console.log( "carnivores have loaded" );
				carnivores = JSON.parse(event.target.responseText);
				console.log( "carnivores", carnivores );
				return carnivores;
		}

		function carnivoreLoadFailed(event) {
			console.log( "Carnivore load failed", responseText );
		}

		carnivoreLoader.open("GET", "../json/carnivores.json");
		carnivoreLoader.send();
	}

	Predator.loadHerbivores = (callbackToInvoke) => {
		let herbivoreLoader = new XMLHttpRequest();
		herbivoreLoader.addEventListener("load", herbivoreLoadComplete);
		herbivoreLoader.addEventListener("error", herbivoreLoadFailed);

		function herbivoreLoadComplete(event) {

			console.log( "herbivores have loaded");
			herbivores = JSON.parse(event.target.responseText);
			console.log( "herbivores", herbivores );
			return herbivores;
		}

		function herbivoreLoadFailed(event) {
			console.log( "Herbivore load failed.", responseText );
		}
		herbivoreLoader.open("GET", "../json/herbivores.json");
		herbivoreLoader.send();
	}

}

Predator.loadCarnivores();
Predator.loadHerbivores();











// var Predator = (function () {
//   var carnivores = [];
//   var herbivores = [];

//   return {
//     loadCarnivores: function (callbackToInvoke) {
//       var loader = new XMLHttpRequest();

//       loader.addEventListener("load", function () {
//         // Set the value of the private array
//         carnivores = JSON.parse(this.responseText);

//         // Invoke the callback function so that the caller knows
//         // that the process is complete. Make sure to pass the 
//         // carnivore array as an argument.

//       });
//     }
//   }


// })();
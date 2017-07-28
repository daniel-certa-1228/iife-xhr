console.log( "Predator.js" );

var Predator = (function () {

  return {

  		loadCarnivores: (callbackFunction) => {

		let carnivoreLoader = new XMLHttpRequest();
		carnivoreLoader.addEventListener("load", carnivoreLoadComplete);
		carnivoreLoader.addEventListener("error", carnivoreLoadFailed);

		function carnivoreLoadComplete(event) {
			let carnivoresObjects = [];
  			let carnivores = [];
				
				console.log( "carnivores have loaded" );
				carnivoresObjects = JSON.parse(event.target.responseText);
				// console.log( "carnivoresObjects", carnivoresObjects );

				for (let i = 0; i < carnivoresObjects.length; i++) {
					let meatEater = carnivoresObjects[i].carnivore;
					carnivores.push(meatEater);
				};
				// console.log( "carnivores", carnivores );
				showCarnivores(carnivores);

		}

		function carnivoreLoadFailed(event) {
			console.log( "Carnivore load failed", responseText );
		}

		carnivoreLoader.open("GET", "../json/carnivores.json");
		carnivoreLoader.send();

		},
		//////////////////////

		loadHerbivores: (callbackFunction) => {

		let herbivoreLoader = new XMLHttpRequest();
		herbivoreLoader.addEventListener("load", herbivoreLoadComplete);
		herbivoreLoader.addEventListener("error", herbivoreLoadFailed);

		function herbivoreLoadComplete(event) {
			let herbivoresObjects = [];
   			let herbivores = [];

			console.log( "herbivores have loaded");
			herbivoresObjects = JSON.parse(event.target.responseText);

				for (let i = 0; i < herbivoresObjects.length; i++) {
					let plantEater = herbivoresObjects[i].herbivore;
					herbivores.push(plantEater);
					
				};

			// console.log( "herbivores", herbivores );
			showHerbivores(herbivores);
			
		}

		function herbivoreLoadFailed(event) {
			console.log( "Herbivore load failed.", responseText );
		}
		herbivoreLoader.open("GET", "../json/herbivores.json");
		herbivoreLoader.send();
		}
	}
 })();



























    // loadCarnivores: function (callbackToInvoke) {
    //   var loader = new XMLHttpRequest();

    //   loader.addEventListener("load", function () {
    //     // Set the value of the private array
    //     carnivores = JSON.parse(this.responseText);

    //     // Invoke the callback function so that the caller knows
    //     // that the process is complete. Make sure to pass the 
    //     // carnivore array as an argument.


// {
// 	var Predator = {};
// 	let carnivoresObjects = [];
// 	let herbivoresObjects = [];
// 	let carnivores = [];
// 	let herbivores = [];

// 	Predator.loadCarnivores = (callbackFunction) => {
// 		let carnivoreLoader = new XMLHttpRequest();
// 		carnivoreLoader.addEventListener("load", carnivoreLoadComplete);
// 		carnivoreLoader.addEventListener("error", carnivoreLoadFailed);

// 		function carnivoreLoadComplete(event) {
			
// 				console.log( "carnivores have loaded" );
// 				carnivoresObjects = JSON.parse(event.target.responseText);
// 				// console.log( "carnivoresObjects", carnivoresObjects );

// 				for (let i = 0; i < carnivoresObjects.length; i++) {
// 					let meatEater = carnivoresObjects[i].carnivore;
// 					carnivores.push(meatEater);
					
// 				};

// 				console.log( "carnivores", carnivores );
// 				return carnivores;
// 		}

// 		function carnivoreLoadFailed(event) {
// 			console.log( "Carnivore load failed", responseText );
// 		}

// 		carnivoreLoader.open("GET", "../json/carnivores.json");
// 		carnivoreLoader.send();
// 	}

	// Predator.loadHerbivores = (callbackFunction) => {
	// 	let herbivoreLoader = new XMLHttpRequest();
	// 	herbivoreLoader.addEventListener("load", herbivoreLoadComplete);
	// 	herbivoreLoader.addEventListener("error", herbivoreLoadFailed);

	// 	function herbivoreLoadComplete(event) {

	// 		console.log( "herbivores have loaded");
	// 		herbivoresObjects = JSON.parse(event.target.responseText);

	// 			for (let i = 0; i < herbivoresObjects.length; i++) {
	// 				let plantEater = herbivoresObjects[i].herbivore;
	// 				herbivores.push(plantEater);
					
	// 			};

	// 		console.log( "herbivores", herbivores );
	// 		return herbivores;
	// 	}

	// 	function herbivoreLoadFailed(event) {
	// 		console.log( "Herbivore load failed.", responseText );
	// 	}
	// 	herbivoreLoader.open("GET", "../json/herbivores.json");
	// 	herbivoreLoader.send();
	// }

// }

// Predator.loadHerbivores();
// Predator.loadCarnivores();


// {
// 	Predator.showCarnivors = (carnivores) => {
// 		for (let i = 0; i < carnivores.length; i++) {
// 			console.log( "carnivores", carnivores[i] );
// 		};
// 	}

// 	Predator.showHerbivores = (herbivores) => {
// 		for (let i = 0; i < herbivores.length; i++) {
// 			console.log( "herbivores", herbivores[i] );
// 		};
// 	}

// }








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
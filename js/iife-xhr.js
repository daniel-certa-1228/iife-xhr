console.log( "iife-xhr.js" );

var carnivoreOutput = document.getElementById("carnivoreDiv");
var herbivoreOutput = document.getElementById("herbivoreDiv");

//Print carbivores to the DOM
function showCarnivores(carnivores) {

	for (let i = 0; i < carnivores.length; i++) {
		let carnivore = carnivores[i];
		// console.log( "carnivore", carnivore );
		let carnivoreHtml = `<p>${carnivore}</p>`
		carnivoreOutput.innerHTML += carnivoreHtml;
	};
}

//Print herbivores to the DOM
function showHerbivores(herbivores) {

	for (let i = 0; i < herbivores.length; i++) {
		let herbivore = herbivores[i];
		// console.log( "herbivore", herbivore );
		let herbivoreHtml = `<p>${herbivore}</p>`
		herbivoreOutput.innerHTML += herbivoreHtml;
	};
}

//Invoke those beautiful shits.
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);


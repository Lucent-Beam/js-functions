//Función constructura donde asignamos a los métodos
//al prototypo, no  a la función como tal.

function Animal(nombre, genero) {
	this.nombre = nombre;
	this.genero = genero;
	
	//Métodos
	// this.sonar() = function () {
	// 	console.log("Hago sonidos por que estoy vivo.");	
	// }

}

//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function () {
	console.log("Hago sonidos por que estoy vivo.");
}

Animal.prototype.saludar = function () {
	console.log(`Hola me llamo ${this.nombre}`);
}

const snoopy = new Animal("Snoopy", "Macho");

console.log(snoopy);

snoopy.sonar();
snoopy.saludar();
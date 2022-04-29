class Pelicula {
	constructor({id, titulo, director, estreno, pais, generos, calificacion}){
		this.id = id;
		this.titulo = titulo;
		this.director = director;
		this.estreno = estreno;
		this.pais = pais;
		this.generos = generos;
		this.calificacion = calificacion;

		this.validarIMDB(id);
	}

	validarCadena(propiedad, valor){
		console.log(valor);
		if(!valor) return console.warn(`${propiedad} "${valor} está vacío."`);

		if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto."`);

		return true;
	}

	valirLongitudCadena(propiedad, valor, longitud){
		
	}

	validarIMDB(id){
		if(this.validarCadena("IMDB id", id)){
			if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
				return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes números.`);
			}
		}
	}
}

const peli = new Pelicula({id: "1234567tt"});
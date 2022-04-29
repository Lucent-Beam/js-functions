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
		this.validarTitulo(titulo);
		this.validarDirector(director);
		this.validarEstreno(estreno);

	}

	validarCadena(propiedad, valor){
		
		if(!valor) return console.warn(`${propiedad} "${valor}" está vacío.`);

		if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto.`);

		return true;
	}

	validarNumero(propiedad, valor){
		if(!valor) return console.warn(`${propiedad} "${valor}" está vacío.`);

		if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de número.`);

		return true;
		
	}

	valirLongitudCadena(propiedad, valor, longitud){
		if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`);

		return true;
	}

	validarIMDB(id){
		if(this.validarCadena("IMDB id", id)){
			if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
				return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes números.`);
			}
		}
	}

	validarTitulo(titulo){
		if(this.validarCadena("Título", titulo)){
			this.valirLongitudCadena("Título", titulo, 100);
		}
	}

	validarDirector(director){
		if(this.validarCadena("Director", director)){
			this.valirLongitudCadena("Director", director, 50);
		}
	}

	validarEstreno(estreno){
		if(this.validarNumero("Año de Estreno", estreno)){
			if(!(/^([0-9]){4}$/.test(estreno))){
				return console.error(`Año de Estreno "${estreno}" no es válido, debe ser un número de 4 dígitos.`);
			}
		}
	}
}

const peli = new Pelicula({id: "tt1234567", titulo: "Alguna película", director:"ssssssssssssssssssssssssssssssssssssssssssss", estreno: 2011});
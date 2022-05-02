//a way to work with events and functions
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){

	//section 1
	listaCursos.addEventListener('click', agregarCurso);

	//section 2

	//section 3

}

function agregarCurso(e){
	e.preventDefault();

	if(e.target.classList.contains('agregar-carrito')){
		const cursoSeleccionado = e.target.parentElement.parentElement;
		leerDatosCurso(cursoSeleccionado);
	}

	//...

}

function leerDatosCurso(curso){
	const infoCurso = {
		imagen: "imagen",
		titulo: "titulo",
		precio: 20,
		id: 2,
		cantidad: 1,
	}

	console.log(infoCurso);

	articulosCarrito = [...articulosCarrito, infoCurso];

}

function carritoHTML(){

	limpiarHTML();

	articulosCarrito.forEach( curso => {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				${curso.titulo}
			</td>

		`;

		contenedorCarrito.appendChild(row);
	});
}

function limpiarHTML(){
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}
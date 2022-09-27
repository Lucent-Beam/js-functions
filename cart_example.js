//a way to work with events and functions
const carrito = document.querySelector('#carrito');

const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){

	//section 1
	listaCursos.addEventListener('click', agregarCurso);

	//section 2
	carrito.addEventListener('click', eliminarCurso);

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

function eliminarCurso(e) {

	console.log(e.target.classList);
	if ( e.target.classList.contains('borrar-curso') ) {
		const cursoId = e.target.getAttribute('data-id');

		articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );

		carritoHTML();
	}
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

	const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );

	if (existe) {
		const cursos = articulosCarrito.map( curso => {
			if ( curso.id === infoCurso.id ) {
				curso.cantidad++;
				return curso;
			} else {
				return curso;
			}
		} );

		articulosCarrito = [...cursos];
	} else {
		articulosCarrito = [...articulosCarrito, infoCurso];
	}



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


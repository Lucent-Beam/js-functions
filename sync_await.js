function cuadradoPromise(value){
	if (typeof value !== "number") {
		return Promise.reject(`Error, el valor "${value}" ingresado no es un número.`);
	}

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				value,
				result: value*value
			});
		}, 0 | Math.random()*1000);
	});
}

async function funcionAsincronaDeclarada(){
	try {
		console.log('Inicio Async Function');

		let obj = await cuadradoPromise(0);
		console.log(`Async Function: ${obj.value}, ${obj.value}`);

		obj = await cuadradoPromise(0);
		console.log(`Async Function: ${obj.value}, ${obj.value}`);

	} catch(err) {
		// statements
		console.log(err);
	}
}

funcionAsincronaDeclarada();
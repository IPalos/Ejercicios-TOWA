const demo = function (url){
	console.log(url);
	return function(pag){ //devuelve una nueva funcion que toma como parametro una pagina
	console.log(`${url}${pag}`);
		return  function(id){ // devuelve una nueva funcion que toma como parametro un id
			console.log(`${url}${pag}${id}`);
		}
	}

}

var d= demo('http://algo.com');

var e = d('/products');

e('/id');

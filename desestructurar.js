var a= [1,2,3,4];
var b={a:1, b:2, c:3};

var destructure= function (a,b){

	var [eins, zwei] = a; //guarda las primeras dos variables del array a
	var {a, c} = b;		//guarda las  variables a,c  del objeto b 

	console.log(eins);
	console.log(zwei);
	console.log(a);
	console.log(c);
}


destructure(a,b);

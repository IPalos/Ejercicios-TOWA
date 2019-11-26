var a= 1;
let b=2;
const c=3;

const demo = function (a="A", b="B", c="C"){
	a= "AA"; //overridea al valor ingresado de A
	b="BB";
	c="CC";

	console.log(a);
	console.log(b);
	console.log(c);

}


demo();

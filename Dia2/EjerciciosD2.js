// NUMEROS PRIMOS

const OrderPrimes = array => {
	let sortedArray  = array.sort();
	let primeArray=[];
	
	sortedArray.forEach(number => {
		let isPrime=true;
		if (number === 2){ primeArray.push(number)}
		else if(number>2){
			for (let i=2;i<(number/2)+1;i++){
				if (number%i===0){
					isPrime=false
				}
			}
			if(isPrime){
				primeArray.push(number);
			}
		}
	});
	
	return primeArray.sort(function(a, b){return a-b});
  
}



//CLASES DE VEHICULO
class Vehiculo  {
	constructor(plate, model){
		this._matricula=plate;
		this._modelo=model;
	}
 
	set matricula(plate){
		this._matricula =plate;
		console.log(`La matricula de tu coche ahora es${this.matricula}`);
	}
	
	get matricula(){
		console.log(`La matricula de tu coche es${this.matricula}`);
		return this.matricula;      
	}
	
	set modelo(model){
		this._modelo = model;
		console.log(`Acabas de comprar un ${this.modelo}`);
	}
	
	get modelo(){
		console.log(`Tu coche es un ${modelo}`);
		return this.modelo;
	}
	
}

 
class Taxi extends Vehiculo{
	constructor(licence){
		super(plate,model);
		this._numeroLicencia=licence;
  }
  
	set numeroLicencia(licence){
		this._numeroLicencia=licence;
		console.log(`Tu nueva licencia es ${this.numeroLicencia}`);
	}
	
	get numeroLicencia(){
		console.log(`Tu licencia es ${this.numeroLicencia}`);
	}
 
}
 
class ClaseCinco extends Vehiculo{
	constructor(seats){
		super(plate, model);
		this._numeroPlazas=seats;
	}
 
	set numeroPlazas(seats){
		this._numeroPlazas=seats;
		console.log(`Ahora pusiste  ${this.numeroPlazas} asientos`);
	}
	
	get numeroPlazas(){
		console.log(`Tu vehiculo tiene ${this.numeroPlazas} asientos`);
	}
	 
}

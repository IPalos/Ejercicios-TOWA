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
	constructor(matricula, modelo){
		this._matricula=matricula;
		this._modelo=modelo;
	}
 
	set matricula(plate){
		this._matricula =plate;
	}
	
	get matricula(){
		return this._matricula;      
	}
	
	set modelo(model){
		this._modelo = model;
	}
	
	get modelo(){
		return this._modelo;
	}
	
}

 
class Taxi extends Vehiculo{
	constructor(licence){
		super();
		this._numeroLicencia=licence;
  }
  
	set numeroLicencia(licence){
		this._numeroLicencia=licence;
	}
	
	get numeroLicencia(){
		return `Tu licencia es ${this._numeroLicencia}`;
	}
 
}
 
class ClaseCinco extends Vehiculo{
	constructor(seats){
		super();
		this._numeroPlazas=seats;
	}
 
	set numeroPlazas(seats){
		this._numeroPlazas=seats;
	}
	
	get numeroPlazas(){
		return`Tu vehiculo tiene ${this._numeroPlazas} asientos`;
	}
	 
}


var Persona = function(name,age = -1){
  this.name = name;
  this.age = age;
  this.calif = []
}

Persona.prototype.getAge = function (){
  return this.age;
}
Persona.prototype.isAdult = function(){
  if (this.age > 17){
    return 'Esta persona es mayor de edad';
  }
  else{
    return 'Esta persona es menor de edad';
  }
}

Persona.prototype.addCalif = function(o_calif){
  this.calif.push(o_calif);
}

///Implementar método 
Persona.prototype.removeCalif = function(name){
  console.log(this.calif[0].name);
  console.log(this.calif.indexOf(calif => calif.name === name));
  this.calif.splice(this.calif.indexOf(name))
}

const Calificaciones = function(name, avg =0){
  this.name = name;
  this.avg=avg;

}



let said = new Persona ('Said', 18);
said.addCalif(new Calificaciones('Fisica',10));
said.addCalif(new Calificaciones('Matematicas',9));
said.addCalif(new Calificaciones('CS',11));
said.removeCalif('Fisica');



console.log(said.calif);


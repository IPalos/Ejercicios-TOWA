var App = function(){
  console.log('inside App');
}

App.prototype.getallPeople = function(){
  url = 'https://swapi.co/api/people'
  
  //consume aqui el servicio https://swapi.co/api/people/ y regresa un array de todos los nombres de las personas que tengan una altura mayor a 120
e};

const app = new App();
console.log('names')
console.log(app.getallPeople());

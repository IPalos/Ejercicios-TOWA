var App = function(){
  console.log('inside App');
}
App.prototype.getallPeople = function(){
  url = 'https://swapi.co/api/people';
  fetch(url)
    .then(response => response.json()
      .then(result => console.log(result.results.filter(tall => tall.height > 120).map(p=> p.name))));

};

const app = new App();
console.log('names')
console.log(app.getallPeople());
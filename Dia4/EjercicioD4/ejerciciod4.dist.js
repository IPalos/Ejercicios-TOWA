(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Clase People, para obtener las personas de Star Wars API

class People{
  constructor(){
    this.path =  "https://swapi.co/api/people/";
  }

  async getPeople(){
    const response = await fetch (this.path);
    // const result =await response.json();
    // return await result.results;
    return await ( await response.json() ).results;
  }

  async getPersonsSpeciesName(personObj){
    const response = await fetch(personObj.species[0]);
    return await ( await response.json() ).name;
  }

  async getPersonByID(id){
    const response = await fetch(this.path+`${id}`);
    return await ( await response.json() ).results;
  }


}

module.exports = People;

},{}],2:[function(require,module,exports){
//Clase People, para obtener las personas de Star Wars API

class Specie{
  constructor(){
    this.path =  "https://swapi.co/api/species/";
  }

  async getSpecies(){
    const response = await fetch (this.path);
    const result =await response.json();
    return await result.results;
  }

  async getSpecieByID(id){
    const response = await fetch(this.path+`${id}`);
    // return await response.json();
    const result =await response.json();
    return await (result.name);
  }

  // getSpecieName(id){
  //   return this.getSpecieByID(id).name;
  // }
}

module.exports = Specie;

},{}],3:[function(require,module,exports){
const People = require('./Classes/people.js');
const Specie = require('./Classes/specie.js');


class Info {
  constructor() {
    this.users = new People();
    this.species= new Specie();
    this.users.getPeople().then(data => {
      data.forEach(this.card, this)
    }, this);
  }

  card(item) {
    console.log(item);
    this.users.getPersonsSpeciesName(item).then( name => {
      console.log(name);
      var el = document.createElement('div');
      el.setAttribute('id', item.id);
      el.setAttribute('class', "card");
      el.innerHTML =`<div  class="container">
        <h4><b>${item.name}</b></h4>
        <p>${name}</p>
        </div>`;
      el.addEventListener('click', this.OnClick.bind(this));
      document.querySelector('#sidebar ul')
        .appendChild(el);
    });

  }

  OnClick(event) {
    console.log(event.target.id)
    console.log(event.target);
    this.fillUser(event.target.id);
    document.getElementById(event.target.id).style.backgroundColor = "rgb(161, 145, 250)";
  }

  fillUser(id) {
    let user = new Users();
    var posts = new Posts();
    posts.getPostsByUserID(id).then(data => {
      document.querySelector('#person-info').innerHTML= "";
      console.log(data);
      data.forEach(this.userPosts),this;
    });
    user.getUserById(id).then(data => console.log(`El usuario que seleccionaste es ${data.username}`));
  }

  userPosts(item) {
    console.log(`Titulo: ${item.title}`);
    //Elemento de la lista
    var el = document.createElement('li');
    el.setAttribute('id',`post${item.id}`);
    document
      .querySelector('.container .content ul')
      .appendChild(el)

    //Titulo
    var title = document.createElement('p');
    title.innerHTML = item.title;
    title.style.fontWeight = "900";
    document
    .querySelector(`#post${item.id}`)
    .appendChild(title);

    //Contenido
    var content = document.createElement('p');
    content.innerHTML = item.body;
    document
    .querySelector(`#post${item.id}`)
    .appendChild(content);
  }

}



const app = new Info() ;


},{"./Classes/people.js":1,"./Classes/specie.js":2}]},{},[3]);

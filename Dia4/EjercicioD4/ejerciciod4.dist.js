(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Clase People, para obtener las personas de Star Wars API

class People{
  constructor(){
    this.path =  "https://swapi.dev/api/people/";
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

  // async getPersonsMovies(personObj){
  //   console.log(personObj.films);
  //   let movieNames;

  //   personObj.films.map(url => {
  //     fetch(url)
  //     .then( a => a.json()
  //     .then( b => movieNames.push(b.title))
  //     )  

  //   });
  // }

  async getPersonByID(id){
    const response = await fetch(this.path+`${id}`);
    return await ( await response.json() ).results;
  }


}

module.exports = People;

},{}],2:[function(require,module,exports){
//Clase Specie, para obtener las especies de Star Wars API

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
    this.users.getPersonsSpeciesName(item).then( s_name => {
      console.log(s_name);
      var el = document.createElement('div');
      el.setAttribute('class', "card");
      el.innerHTML =`<div id class="container">
        <h4><b>${item.name}</b></h4>
        <p>${s_name}</p>
        </div>`;
      //el.addEventListener('click', this.OnClick().bind(this));
      el.addEventListener('click', (event) => ((arg) => {
        this.OnSideClick(event,item);
      })(item));
      document.querySelector('#sidebar ul')
        .appendChild(el);
    });

  }

  OnSideClick(event,item) {
    console.log("PASE AL ONCLICK")
    this.showPersonalInfo(item);

    document.querySelector('#info-bar').addEventListener('click', (event) => ((arg) => {
      this.showPersonalInfo(arg);
    })(item));
    document.querySelector('#movie-bar').addEventListener('click', (event) => ((arg) => {
      this.showMovies(arg);
    })(item));
    document.querySelector('#starship-bar').addEventListener('click', (event) => ((arg) => {
      this.showStarships(arg);
    })(item));
    document.querySelector('#vehicle-bar').addEventListener('click', (event) => ((arg) => {
      this.showVehicles(arg);
    })(item));
  }

  showPersonalInfo(item) {
    //editar la barra superior
    document.querySelector('#info-bar').setAttribute('class', 'active');
    document.querySelector('#vehicle-bar').setAttribute('class','');
    document.querySelector('#starship-bar').setAttribute('class','');
    document.querySelector('#movie-bar').setAttribute('class','');

    //borrar la información existente
    document.querySelector('#person-info').innerHTML='';


    //llenar con una nueva información
    let info= document.createElement('div');
    info.innerHTML=`<h1> Personal Info</h1>
      <p>Name: ${item.name}</p>
      <p>Height: ${item.height}</p>
      <p>Mass: ${item.mass}</p>
      <p>Hair Color: ${item.hair_color}</p>
      <p>Skin Color: ${item.skin_color}</p>
      <p>Eye Color: ${item.eye_color}</p>
      <p>Gender: ${item.gender}</p>
      <p>Birth: ${item.birth_year}</p>`;
    info.setAttribute('class','content-info');
    document.querySelector('#person-info')
      .appendChild(info);

   
  }

  showMovies(item){
    //borrar la información existente
    document.querySelector('#person-info').innerHTML='';

    //llenar con una nueva información
    let info= document.createElement('div');
    info.innerHTML=`<h1> Movies</h1>`;
    info.setAttribute('class','content-info');
    document.querySelector('#person-info')
      .appendChild(info);
    
    //obtener la info de las pelis de la persona
    item.films.map(url => {
      fetch(url)
      .then( a => a.json()
      .then( b => {
        var movieEl=document.createElement('p');
        movieEl.innerHTML= `${b.title}`;
        info.appendChild(movieEl);
      })
      )  

    });

    //editar la barra superior
    document.querySelector('#info-bar').setAttribute('class', '');
    document.querySelector('#vehicle-bar').setAttribute('class','');
    document.querySelector('#starship-bar').setAttribute('class','');
    document.querySelector('#movie-bar').setAttribute('class','active');

  }
  
  showStarships(item){
    //borrar la información existente
    document.querySelector('#person-info').innerHTML='';

    //llenar con una nueva información
    let info= document.createElement('div');
    info.innerHTML=`<h1> StarShips </h1>`;
    info.setAttribute('class','content-info');
    document.querySelector('#person-info')
      .appendChild(info);
    
    //obtener la info de las naves de la persona
    item.starships.map(url => {
      fetch(url)
      .then( a => a.json()
      .then( b => {
        let starshipName=document.createElement('p');
        starshipName.innerHTML= `Name: ${b.name}`;
        info.appendChild(starshipName);

        let model=document.createElement('p');
        model.innerHTML= `Model: ${b.model}`;
        info.appendChild(model);

        var cost=document.createElement('p');
        cost.innerHTML= `Cost: ${b.cost_in_credits}`;
        info.appendChild(cost);

        var s_length=document.createElement('p');
        s_length.innerHTML= `Length: ${b.length}`;
        info.appendChild(s_length);

        var crew=document.createElement('p');
        crew.innerHTML= `Crew: ${b.crew}`;
        info.appendChild(crew);

        var passengers=document.createElement('p');
        passengers.innerHTML= `Passengers: ${b.passengers}`;
        info.appendChild(passengers);

        var consumables=document.createElement('p');
        consumables.innerHTML= `Consumables: ${b.consumables}`;
        info.appendChild(consumables);

        var s_class=document.createElement('p');
        s_class.innerHTML= `Class: ${b.starship_class}`;
        info.appendChild(s_class);

        var separator = document.createElement('p');
        separator.innerHTML= "=======================";
        info.appendChild(separator);
      })
      )  

    });

    //editar la barra superior
    document.querySelector('#info-bar').setAttribute('class', '');
    document.querySelector('#vehicle-bar').setAttribute('class','');
    document.querySelector('#starship-bar').setAttribute('class','active');
    document.querySelector('#movie-bar').setAttribute('class','');

  }

  showVehicles(item){
 //borrar la información existente
 document.querySelector('#person-info').innerHTML='';

 //llenar con una nueva información
 let info= document.createElement('div');
 info.innerHTML=`<h1> Vehicles </h1>`;
 info.setAttribute('class','content-info');
 document.querySelector('#person-info')
   .appendChild(info);
 
 //obtener la info de las naves de la persona
 item.vehicles.map(url => {
   fetch(url)
   .then( a => a.json()
   .then( b => {
     let name=document.createElement('p');
     name.innerHTML= `Name: ${b.name}`;
     info.appendChild(name);

     let model=document.createElement('p');
     model.innerHTML= `Model: ${b.model}`;
     info.appendChild(model);

     var cost=document.createElement('p');
     cost.innerHTML= `Cost: ${b.cost_in_credits}`;
     info.appendChild(cost);

     var s_length=document.createElement('p');
     s_length.innerHTML= `Length: ${b.length}`;
     info.appendChild(s_length);

     var crew=document.createElement('p');
     crew.innerHTML= `Crew: ${b.crew}`;
     info.appendChild(crew);

     var passengers=document.createElement('p');
     passengers.innerHTML= `Passengers: ${b.passengers}`;
     info.appendChild(passengers);

     var consumables=document.createElement('p');
     consumables.innerHTML= `Consumables: ${b.consumables}`;
     info.appendChild(consumables);

     var s_class=document.createElement('p');
     s_class.innerHTML= `Class: ${b.vehicle_class}`;
     info.appendChild(s_class);

     var separator = document.createElement('p');
     separator.innerHTML= "=======================";
     info.appendChild(separator);
   })
   )  

 });

 //editar la barra superior
 document.querySelector('#info-bar').setAttribute('class', '');
 document.querySelector('#vehicle-bar').setAttribute('class','active');
 document.querySelector('#starship-bar').setAttribute('class','');
 document.querySelector('#movie-bar').setAttribute('class','');
  }

}


const app = new Info() ;


},{"./Classes/people.js":1,"./Classes/specie.js":2}]},{},[3]);

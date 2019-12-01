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

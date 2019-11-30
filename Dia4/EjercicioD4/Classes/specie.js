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

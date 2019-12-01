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

//Clase Starships, para obtener las naves de Star Wars API

class Starships{
    constructor(){
      this.path =  "https://swapi.co/api/starships/";
    }
  
    async getStarships(){
      const response = await fetch (this.path);
      return await ( await response.json());
    }
  
    async getStarshipsByID(id){
      const response = await fetch(this.path+`${id}`);
      return await (await response.json());
    }
  
  }
  
  module.exports = Starships;
  
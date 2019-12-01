//Clase Vehicles, para obtener los vehiclulos de Star Wars API

class Vehicles{
    constructor(){
      this.path =  "https://swapi.co/api/starships/";
    }
  
    async getVehicles(){
      const response = await fetch (this.path);
      return await ( await response.json());
    }
  
    async getVehiclesByID(id){
      const response = await fetch(this.path+`${id}`);
      return await (await response.json());
    }
  
  }
  
  module.exports = Vehicles;
  
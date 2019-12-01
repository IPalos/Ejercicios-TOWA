//Clase Movies, para obtener las Peliculas de Star Wars API

class Movies{
    constructor(){
      this.path =  "https://swapi.co/api/films/";
    }
  
    async getMovies(){
      const response = await fetch (this.path);
      return await ( await response.json());
    }
  
    async getMoviesByID(id){
      const response = await fetch(this.path+`${id}`);
      return await (await response.json());
    }
  
  }
  
  module.exports = Movies;
  
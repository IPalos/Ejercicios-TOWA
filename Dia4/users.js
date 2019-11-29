//Clase Users, utilizada en appAsync.js

class Users{
  constructor(){
    this.path =  "https://jsonplaceholder.typicode.com/users";
  }

  async getUsers(){
    const response = await fetch (this.path);
    return await response.json()
  }

  async getUserById(id){
    const response = await fetch(this.path+`/${id}`);
    return await response.json()
  }
}

module.exports = Users;

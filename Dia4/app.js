const Users = require('./users.js');
const App = require('./App.js');
console.log("Welcome");

const users= new Users();
const app = new App();


const CreateCard = function(item){
  var card = document.createElement('div');
  body.appendChild(card);

  var name = document.createElement('div');
  name.innerHTML =`Name: <span id="${item.name}">${item.name}</span>`;
  card.appendChild(name);

  var username= document.createElement('div');
  username.innerHTML =`Username: <span id="${item.username}">${item.username}</span>`;
  card.appendChild(username);

  var email = document.createElement('div');
  email.innerHTML =`Email: <span id="${item.email}">${item.email}</span>`;
  card.appendChild(email);
}




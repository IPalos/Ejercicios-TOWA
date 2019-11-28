const Users = require('./users.js');
console.log("Welcome");

const users= new Users();
let a;

const getData = function(data){
    console.log("DATA: ",data)
    a= data;
    console.log("A: ",a);
    a.forEach(p=> CreateCard(p));

}

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


users.getUsers().then(getData);



var body = document.querySelector("body");
var el = document.createElement('h1');

el.innerText='Ignacio';
body.appendChild(el);



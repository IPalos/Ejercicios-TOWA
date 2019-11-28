(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



},{"./users.js":2}],2:[function(require,module,exports){
//Clase Users, utilizada en appAsync.js

class Users{
  constructor(){
    this.path =  "https://jsonplaceholder.typicode.com/users";
  }

  async getUsers(){
    const response = await fetch (this.path);
    return await response.json()
  }
}

module.exports = Users;

},{}]},{},[1]);

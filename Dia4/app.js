console.log("Welcome");

var body = document.querySelector("body");
var el = document.createElement('h1');

el.innerText='Juan';
body.appendChild(el);

var card = document.createElement('div');
body.appendChild(card);

var name = document.createElement('div');
name.innerHTML ='Name: <span id="name">...</span>';
card.appendChild(name);

var username= document.createElement('div');
username.innerHTML ='Username: <span id="username">...</span>';
card.appendChild(username);

var email = document.createElement('div');
email.innerHTML ='Email: <span id="email">...</span>';
card.appendChild(email);


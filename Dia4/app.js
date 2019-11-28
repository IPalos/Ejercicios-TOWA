console.log("Welcome");

var body = document.querySelector("body");
var el = document.createElement('h1');

el.innerText='Juan';
body.appendChild(el);

var card = document.createElement('div');
body.appendChild(card);

var name = document.createElement('p');
name.innerText ='Name: ';
card.appendChild(name);

var username= document.createElement('p');
username.innerText='Username: ';
card.appendChild(username);

var email = document.createElement('p');
email.innerText='Email: ';
card.appendChild(email);


(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Users = require('./users.js')

const users = new Users();

users.getUsers().then( data => console.log(data));

/*
const userID=2;

const users = async function(id){
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let user = await response.json();
  user.posts = await posts(user.id);
  return user;
}

const posts = async function(userID){
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let userPosts = await response.json()
  return userPosts.filter ( p => p.userID === userID);
}


users(userID).then( (data) => console.log(data));
*/

},{"./users.js":2}],2:[function(require,module,exports){
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

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Users = require('./users.js');
const Posts = require('./posts.js');


class App{
  constructor(){
    this.users = new Users();
    this.users.getUsers().then(data => {
      data.forEach(this.card,this)},this);
    this.userInfo=[];
  }

  card(item){
    this.userInfo.push(item);
    var el = document.createElement('li');
    el.setAttribute('id',item.id);
    el.innerHTML=item.username;
    el.addEventListener('click',this.OnClick.bind(this));
    document.querySelector('.container .left ul')
      .appendChild(el);
  }

  OnClick(event){
    console.log(event.target.id)
    console.log(event);
    this.fillUser(event.target.id);
  }

  fillUser(id){
    var posts = new Posts();
    this.userInfo.forEach(u =>{
      //console.log(u.id);
      if(u.id == id){
        posts.getPostsByUserID(u.id).then(data => console.log(data));
        console.log(`El usuario que seleccionaste es ${u.username}`);
      }
    });
    //console.log(this.userInfo);
 }

}

module.exports = App;

},{"./posts.js":3,"./users.js":4}],2:[function(require,module,exports){
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




},{"./App.js":1,"./users.js":4}],3:[function(require,module,exports){
//Clase Posts, utilizada en appAsync.js

class Posts{
  constructor(){
    this.path = 'https://jsonplaceholder.typicode.com/posts';
  }

  async getPosts(){
    const response = await fetch(this.path);
    return await response.json()
  }

  async getPostsById(postID){
    const response = await fetch(this.path+(`/${postID}`));
    return await response.json()
  }

  async getPostsByUserID(userID){
    const response = await fetch (this.path);
    let userPosts = await response.json();
    return userPosts.filter (p=> p.userId === userID)
  }

  async getPostsByUsername(username){
    const response = await fetch(this.path);
    let userPosts = await response.json();
    return userPosts.filter(p=> p.username === username)
  }

}

module.exports = Posts;

},{}],4:[function(require,module,exports){
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

},{}]},{},[2]);

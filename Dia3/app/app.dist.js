(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//=========================================================
//ESTE ARCHIVO SE TIENE QUE BROWSERIFICAR PARA QUE FUNCIONE
//
//browserify appAsync.js > app.dist.js
//
//=========================================================
const Users = require('./users.js')
const Posts = require('./posts.js')
const Comments = require('./comments.js')

const users = new Users();
const posts = new Posts();
const comments = new Comments();

posts.getPostsByUserID(3).then(data => console.log(data));
comments.getCommentsByPostID(4).then(data => console.log(data));
users.getUsers().then( data => console.log(data));
comments.getCommentsByUserID(5).then(data=> console.log(data));


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

},{"./comments.js":2,"./posts.js":3,"./users.js":4}],2:[function(require,module,exports){
// Clase Comments, utilizada en appAsync.js

class Comments{
  constructor(){
    this.path= 'https://jsonplaceholder.typicode.com/comments';
  }

  async getComments(){
    const response = await fetch (this.path);
    return await response.json()
  }

  async getCommentsByID(commentID){
    const response = await fetch(this.path+`/${commentID}`);
    return await response.json()
  }

  async getCommentsByPostID(postID){
    const response = await fetch(this.path);
    let  comments = await response.json();
    return comments.filter(c => c.postId === postID)
  }

  async getCommentsByUserID(userID){
    const response = await fetch(this.path);
    let comments = await response.json();
    return comments.filter(c=> c.userId === userID)
  }
}

module.exports = Comments;

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);

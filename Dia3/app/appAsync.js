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

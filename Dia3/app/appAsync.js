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

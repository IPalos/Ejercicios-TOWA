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
    return userPosts.filter (p=> p.userId == userID)
  }

  async getPostsByUsername(username){
    const response = await fetch(this.path);
    let userPosts = await response.json();
    return userPosts.filter(p=> p.username == username)
  }

}

module.exports = Posts;

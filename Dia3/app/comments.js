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

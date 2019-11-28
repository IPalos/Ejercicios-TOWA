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

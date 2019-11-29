const Users = require('./users.js');
const Posts = require('./posts.js');


class App {
  constructor() {
    this.users = new Users();
    this.users.getUsers().then(data => {
      data.forEach(this.card, this)
    }, this);
  }

  card(item) {
    var el = document.createElement('li');
    el.setAttribute('id', item.id);
    el.innerHTML = item.username;
    el.addEventListener('click', this.OnClick.bind(this));
    document.querySelector('.container .left ul')
      .appendChild(el);
  }

  OnClick(event) {
    console.log(event.target.id)
    console.log(event);
    this.fillUser(event.target.id);
  }

  fillUser(id) {
    let user = new Users();
    var posts = new Posts();
    posts.getPostsByUserID(id).then(data => {
      document.querySelector('.container .content ul').innerHTML= "";
      console.log(data);
      data.forEach(this.userPosts),this;
    });
    user.getUserById(id).then(data => console.log(`El usuario que seleccionaste es ${data.username}`));
  }

  userPosts(item) {
    console.log(`Titulo: ${item.title}`);
    //Elemento de la lista
    var el = document.createElement('li');
    el.setAttribute('id',`post${item.id}`);
    document
      .querySelector('.container .content ul')
      .appendChild(el)

    //Titulo
    var title = document.createElement('p');
    title.innerHTML = item.title;
    title.style.fontWeight = "900";
    document
    .querySelector(`#post${item.id}`)
    .appendChild(title);

    //Contenido
    var content = document.createElement('p');
    content.innerHTML = item.body;
    document
    .querySelector(`#post${item.id}`)
    .appendChild(content);
  }

}

module.exports = App;

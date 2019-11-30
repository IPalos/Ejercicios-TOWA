const People = require('./Classes/people.js');
const Specie = require('./Classes/specie.js');


class Info {
  constructor() {
    this.users = new People();
    this.species= new Specie();
    this.users.getPeople().then(data => {
      data.forEach(this.card, this)
    }, this);
  }

  card(item) {
    console.log(item);
    this.users.getPersonsSpeciesName(item).then( name => {
      console.log(name);
      var el = document.createElement('div');
      el.setAttribute('id', item.id);
      el.setAttribute('class', "card");
      el.innerHTML =`<div  class="container">
        <h4><b>${item.name}</b></h4>
        <p>${name}</p>
        </div>`;
      el.addEventListener('click', this.OnClick.bind(this));
      document.querySelector('#sidebar ul')
        .appendChild(el);
    });

  }

  OnClick(event) {
    console.log(event.target.id)
    console.log(event.target);
    this.fillUser(event.target.id);
    document.getElementById(event.target.id).style.backgroundColor = "rgb(161, 145, 250)";
  }

  fillUser(id) {
    let user = new Users();
    var posts = new Posts();
    posts.getPostsByUserID(id).then(data => {
      document.querySelector('#person-info').innerHTML= "";
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



const app = new Info() ;


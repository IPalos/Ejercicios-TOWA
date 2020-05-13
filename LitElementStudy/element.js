

import { LitElement, html,css } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array }
    };
  }
  
  static get styles(){
    return css`
      p {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
      }

      .red {
        color: red;
      }

      .blue {
        color: blue;
      }
    `
  }

  constructor() {
    super();
    this.message = 'Hello world! From my-element';
    this.myArray = ['an','array','of','test','data'];
    this.myBool = true;
  }
  render() {
    return html`
      <p>${this.message}</p>
      <ul>${this.myArray.map(item => html`<li>${item}</li>`)}</ul>
      ${this.myBool ?
        html`<p>Render some HTML if myBool is true</p>` :
        html`<p>Render some other HTML if myBool is false</p>`}
      <button @click=${this.clickHandler}>Click</button>
      <p class="${this.myBool ? 'blue' :'red'}">Este texto cambia de color!</p>
    `;
  }
  clickHandler(event) {
    console.log(event.target);
    this.myBool = !this.myBool;
  }
}
customElements.define('my-element', MyElement);

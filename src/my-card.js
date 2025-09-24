import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.cardTitle = "Allium";
    this.image = "https://assets.highcountrygardens.com/media/catalog/product/a/l/allium-globemaster-1_1.jpg?quality=85&fit=bounds&height=&width=3840&auto=webp&format=pjpg";
    this.description = "This is an allium flower.";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      :host([fancy]) .card{
        background-color: var(--my-card-fancy-bg )
      }
      
      .card {
        max-width: 400px;
        box-sizing: border-box;
        padding: 16px;
        margin: 16px;
        text-align: center;
        border: 5px solid pink;
        border-radius: 8px;
        background-color: #9569a3;
      }

      .card .card-image {
        max-width: 300px;
      }

      .text {
        font-family: courier new;
        color: pink;
      }

      button:hover {
        background-color: pink;
        color: black;
      }
    `;
  }

  render() {
    return html`
        <div class="card">
            <h3 class="text">${this.cardTitle}</h3>
            <img class="card-image" src="${this.image}" alt="Picture of ${this.cardTitle}">
            <p class="text">${this.description}</p>
            <a href="https://hax.psu.edu"> 
              <button>Details</button>
            </a>
        </div>
    `;
  }

  static get properties() {
    return {
      title: {type: String },
      cardTitle: {type: String},
      image: {type: String },
      description: { type: String},
      fancy: {type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

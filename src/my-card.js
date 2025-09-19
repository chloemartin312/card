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
        display: block;
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
        transition: .6s all ease-in-out;
      }

      .card .card-image {
        max-width: 300px;
      }

      .card.change-background {
        background-color: #66356E;
      }

      .text {
        font-family: courier new;
        color: pink;
      }

      .button {
        display: none;
      }

      @media (min-width: 501px) and (max-width: 799px) {
        .button {
          display: inline-block;
        }
      }

      button:hover {
        background-color: pink;
        color: black;
      }

      @media (max-width: 500px) {
        .card {
          width: 90%;
          margin: 16px;
          padding: 16px;
        }

        .card h1 {
          font-size: 20px;
        }

        .card p {
          font-size: 14px;
        }

        .card .card-image {
          max-width: 100%;
          height: auto;
        }
      }
    `;
  }

  render() {
    return html`
        <div class="card">
          <div class="text">
            <h3 class="card-title">${this.cardTitle}</h3>
            <img class="card-image" src="${this.image}" alt="Picture of ${this.title}">
            <p>${this.description}</p>
          </div>
          <div class="button">
            <a href="https://hax.psu.edu"> 
              <button>Details</button>
            </a>
          </div>
        </div>
    `;
  }

  static get properties() {
    return {
      title: {type: String },
      cardTitle: {type: String},
      image: {type: String },
      description: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

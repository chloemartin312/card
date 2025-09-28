import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.cardTitle = "Allium";
    this.image = "https://assets.highcountrygardens.com/media/catalog/product/a/l/allium-globemaster-1_1.jpg?quality=85&fit=bounds&height=&width=3840&auto=webp&format=pjpg";
    this.description = "This is an allium flower.";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      :host([fancy]) .card{
        background-color: pink;
        border: 2px solid hotpink;
        box-shadow: 10px 5px 5px #9569a3;
      }

      :host([fancy]) .text {
          color: indigo;
        }

      .card {
        max-width: 400px;
        margin: 16px;
        padding: 16px;
        text-align: center;
        border: 5px solid pink;
        border-radius: 8px;
        background-color: #9569a3;
      }

      details summary {
        text-align: center;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
      
      details div {
        border: 2px solid black;
        text-align: center;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }

      .card h3 {
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .card .card-image {
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        border-radius: 6px;
        display: block;
      }

      .text {
        font-family: courier new;
        color: pink;
      }

      button:hover {
        background-color: hotpink;
        color: black;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
        <div class="card">
            <h3 class="text">${this.cardTitle}</h3>
            <img class="card-image" src="${this.image}" alt="Picture of ${this.cardTitle}">
            <p class="text">${this.description}</p>
            <details ?open="${this.fancy}" @toggle="${this.openChanged}">
              <summary>Description</summary>
              <div>
                <slot></slot>
                <a href="https://hax.psu.edu" target="_blank"> 
                  <button class = "btn">Details</button>
                </a>
              </div>
            </details>
        </div>
    `;
  }



  static get properties() {
    return {
      cardTitle: {type: String},
      image: {type: String },
      description: { type: String},
      fancy: {type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

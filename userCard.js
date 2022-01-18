const template = document.createElement('template');
template.innerHTML = `
  <style>
    .user-card {
      font-family: 'Arial', sans-serif;
      background: #f4f4f4;
      width: 500px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 15px;
      margin-bottom: 20px;
      border-bottom: darkorchid 10px solid;
    }
    .user-card img {
      width: 100%;
      height: 100%;
    }
    .user-card p {
      margin: 5px 0;
    }
    .user-card button {
      cursor: pointer;
      background: darkorchid;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 7.5px 12.5px;
      margin-top: 10px;
    }
  </style>
  <div class='user-card'>
    <img />
    <div>
      <h3></h3>
      <div className='info'>
        <p><slot name='email' /></p>
        <p><slot name='phone' /></p>
      </div>
      <button id='cta-btn'>Fire event!</button>
    </div>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('#cta-btn')
      .addEventListener('click', () => alert('Event fired!'));
  }
}

window.customElements.define('user-card', UserCard);

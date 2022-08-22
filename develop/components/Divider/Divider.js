fetch('./develop/components/Divider/Divider.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class DividerComponent extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;

      // set number
      console.log(this.shadowRoot);
      const dividerNumber = this.shadowRoot.children[2].children[1];
      const num = this.getAttribute('number');
      dividerNumber.innerText = num;
    }

    // VARIABLES

    // METHODS
  }
  window.customElements.define('divider-component', DividerComponent);
}

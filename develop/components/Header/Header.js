fetch('./develop/components/Header/Header.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class HeaderComponent extends HTMLElement {
    constructor() {
      super();

      var shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;
    }
  }
  window.customElements.define('header-component', HeaderComponent);
}

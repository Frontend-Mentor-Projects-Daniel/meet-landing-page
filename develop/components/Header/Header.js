fetch('./develop/components/Header/Header.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class HeaderComponent extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;

      const header = this.shadowRoot.children[2];
      const logo = this.shadowRoot.children[2].children[0];
      const hero = this.shadowRoot.children[2].children[1];
      const heroImage = this.shadowRoot.children[2].children[1].children[0];
      const heroImageLeft = this.shadowRoot.children[2].children[1].children[1];
      const heroImageRight =
        this.shadowRoot.children[2].children[1].children[2];

      this.observeScreen(heroImage, heroImageLeft, heroImageRight);
    }

    // VARIABLES
    body = document.body;

    // METHODS
    observeScreen(...args) {
      const [heroSmall, heroLeft, heroRight] = args;

      const observer = new ResizeObserver((entries) => {
        const bodyElement = entries[0];
        const isDesktop = bodyElement.contentRect.width >= 1400;

        if (isDesktop) {
          heroSmall.classList.add('hide');
          heroLeft.classList.remove('hide');
          heroRight.classList.remove('hide');
        } else {
          heroSmall.classList.remove('hide');
          heroLeft.classList.add('hide');
          heroRight.classList.add('hide');
        }
      });

      observer.observe(this.body);
    }
  }
  window.customElements.define('header-component', HeaderComponent);
}

document.documentElement.classList.remove('no-js');

customElements.define('menu-toggle', class MenuToggle extends HTMLElement {
  connectedCallback() {
    const button = this.querySelector('button');
    const menu = document.querySelector(button?.getAttribute('aria-controls') ? `#${button.getAttribute('aria-controls')}` : '');
    if (!button || !menu) return;

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('is-open', !expanded);
    });
  }
});

// class myNav extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//     <nav class="menuNav menuNavClosed">
//     <a class="menuOpen">MENU <i class="fa-solid fa-bars"></i></a>
//     </nav>
//     `;
//   }
// }

// customElements.define("my-nav", myNav);

class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      </footer>
      `;
  }
}

customElements.define("my-footer", myFooter);

import { LitElement, html } from "lit-element";

class myCard extends LitElement {
  /**
 * Implement `render` to define a template for your element.
 *
 * You must provide an implementation of `render` for any element
 * that uses LitElement as a base class.
 */
  render() {
    return html`
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div class="card bg-dark text-white">
    <img class="card-img" src="250" alt="">
    <div class="card-img-overlay d-flex flex-column justify-content-end">
      <h4 class="card-title">Title</h4>
      <p class="card-text">Text</p>
      </div>
      </div>
      `;
  }
}

customElements.define('my-card', myCard)

class tabSection extends LitElement {
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  constructor() {
    super()
    this.title = this.getAttribute('title');
    this.count = parseInt(this.getAttribute('count'))
  }
  render() {
    return html`
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <section class="row" id = "${this.title}" >
    <div class="col-12"> ${this.title}</div>
    <div id="column-template" class="col-12 col-md-4">
    <my-card></my-card>
    </div>
    </section >
    `;
  }
  firstUpdated() {
    var template = this.shadowRoot.getElementById('column-template')

    for (var i = 1; i < this.count; i++) {
      var cls = template.cloneNode(true)
      this.shadowRoot.getElementById('column-template').parentNode.appendChild(cls)
    }
  }
}

customElements.define('x-section-large', tabSection)


class tabSectionSmall extends LitElement {
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  constructor() {
    super()
    this.title = this.getAttribute('title');
    this.count = parseInt(this.getAttribute('count'))
  }
  render() {
    return html`
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <section class="row" id = "${this.title}" >
    <div class="col-12"> ${this.title}</div>
    <div id="column-template" class="col-12 col-md-3">
    <my-card></my-card>
    </div>
    </section>
    `;
  }
  firstUpdated() {
    var template = this.shadowRoot.getElementById('column-template')

    for (var i = 1; i < this.count; i++) {
      var cls = template.cloneNode(true)
      this.shadowRoot.getElementById('column-template').parentNode.appendChild(cls)
    }
  }
}

customElements.define('x-section-small', tabSectionSmall)



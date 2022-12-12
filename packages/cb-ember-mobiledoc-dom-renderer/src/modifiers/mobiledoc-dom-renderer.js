import Modifier from 'ember-modifier';
import Renderer from 'mobiledoc-dom-renderer';



export default class MobiledocDomRendererModifier extends Modifier {
  modify(element, [content, atoms = [], cards = []]) {
    if (!this.renderer) {
      const options = { mobiledoc: content };
      this.renderer = new Renderer({cards, atoms, cardOptions: []});
      let { result: rendered } = this.renderer.render(options.mobiledoc);
      element.appendChild(rendered);
    }
  }
}




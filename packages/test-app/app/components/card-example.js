import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CardExampleComponent extends Component {
  @tracked
  content = {
    version: '0.3.2',
    atoms: [['mention', '', {}]],
    cards: [['kitten', {}]],
    markups: [],
    sections: [
      [
        1,
        'p',
        [
          [0, [], 0, 'Example with a card'],
          [1, [], 0, 0],
        ],
      ],
      [10, 0],
    ],
  };

  cards = [
    {
      name: 'kitten',
      type: 'dom',
      render() {
        let el = document.createElement('figure');
        el.innerHTML = `
        <img src="http://placekitten.com/200/100">
        <figcaption>Image of a kitten</figcaption>
      `;
        return el;
      },
    },
  ];

  atoms = [
    {
      name: 'mention',
      type: 'dom',
      render() {
        let el = document.createElement('span');
        el.setAttribute('style', 'background-color: #CCC;');
        el.innerText = `@hello`;
        return el;
      },
    },
  ];

  get jsonContent() {
    return JSON.stringify(this.content);
  }
}

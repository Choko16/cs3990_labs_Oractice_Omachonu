import { Button } from './myButton.js';

export class ColorButton extends Button {
  constructor(btnText, btnBgColor, btnTitle, fColor) {
    super(btnText, btnBgColor, btnTitle);
    this.fColor = fColor;
  }

  show(container = document.getElementById('colorButtonContainer')) {
    if (!container) return;

    const button = document.createElement('button');
    button.textContent = this.btnText;
    button.style.backgroundColor = this.btnBgColor;
    button.style.color = this.fColor;
    button.title = this.btnTitle;
    button.style.padding = '10px';
    button.style.margin = '5px';
    button.style.borderRadius = '5px';
    button.style.border = '1px solid #ccc';

    container.appendChild(button);
    return button;
  }
}

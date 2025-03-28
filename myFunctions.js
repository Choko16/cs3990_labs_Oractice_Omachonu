import { Button } from './myButton.js';
import { ColorButton } from './myColorButton.js';

export let arrButtons = [];

export function generateButtons(texts, colors) {
  arrButtons = [];

  texts.forEach((text, index) => {
    const title = `${text} is shown on the ${colors[index]} background`;
    const button = new Button(text, colors[index], title);
    arrButtons.push(button);
  });

  return arrButtons;
}

export function displayButtonsWithDelay(buttons) {
  //const container = document.getElementById('buttonContainer');

  buttons.forEach((button, index) => {
    setTimeout(() => {
      button.show();
    }, index * 2000); // Set to 5 seconds for demo; use 30000 for real submission
  });
}

export function createColorButton() {
  setTimeout(() => {
    const container = document.createElement('div');
    container.id = 'colorButtonContainer';
    document.body.appendChild(container); // Add container back to page

    const colorBtn = new ColorButton(
      'Custom Button',
      '#3498DB',
      'This is a custom colored button',
      '#FFFFFF'
    );
    colorBtn.show(); // Use appendChild
  }, 9000); // wait 21 seconds (4 buttons x 5s + buffer)
}


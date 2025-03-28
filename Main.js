import { arrTexts, arrColors } from './myArrays.js';
import { generateButtons, displayButtonsWithDelay, createColorButton } from './myFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = generateButtons(arrTexts, arrColors);
  createColorButton();
  displayButtonsWithDelay(buttons);
  
});
